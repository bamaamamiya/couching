import React, { useState } from "react";
import { product } from "../libs/product";
import Link from "next/link";

const Checkout = ({ tier = "basic", nama, wa }) => {
  const [quantity, setQuantity] = useState(1);
  const [paymentUrl, setPaymentUrl] = useState("");

  const selectedProduct = product[tier];

  const checkout = async () => {
    const data = {
      id: selectedProduct.id,
      productName: selectedProduct.name,
      price: selectedProduct.price,
      quantity: 1,
      nama,
      wa,
    };

    const response = await fetch("/api/tokenizer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error:", response.status, errorText);
      alert("Gagal checkout. Cek console untuk detail.");
      return;
    }

    const requestData = await response.json();
    window.snap.pay(requestData.token);
  };

  const generatePaymentLink = async () => {
    const secret = process.env.NEXT_PUBLIC_SECRET;
    const encodedSecret = Buffer.from(secret).toString("base64");
    const basicAuth = `Basic ${encodedSecret}`;

    const data = {
      item_details: [
        {
          id: selectedProduct.id,
          name: selectedProduct.name,
          price: selectedProduct.price,
          quantity: 1,
        },
      ],
      transaction_details: {
        order_id: selectedProduct.id,
        gross_amount: selectedProduct.price,
      },
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v1/payment-links`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: basicAuth,
        },
        body: JSON.stringify(data),
      }
    );

    const paymentLink = await response.json();
    setPaymentUrl(paymentLink.payment_url);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-zinc-800 z-50 p-4">
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
      <button
        className="w-full sm:w-auto rounded bg-white text-black px-6 py-3 text-sm font-semibold transition hover:bg-gray-200"
        onClick={checkout}
      >
        Checkout Sekarang
      </button>

      <button
        className="w-full sm:w-auto text-white underline text-sm hover:opacity-80 transition"
        onClick={generatePaymentLink}
      >
        Buat Link Pembayaran
      </button>
    </div>

    {paymentUrl && (
      <div className="text-white underline italic mt-4 text-center">
        <Link href={paymentUrl} target="_blank">
          {paymentUrl}
        </Link>
      </div>
    )}
  </div>
    </>
  );
};

export default Checkout;
