import React, { use, useState } from "react";
import { product } from "../libs/product";
import Link from "next/link";

const Checkout = ({ tier = "basic",nama,wa }) => {
  const [quantity, setQuantity] = useState(1);
  const [paymentUrl, setPaymentUrl] = useState("");

  const selectedProduct = product[tier];

  const decreaseQuantity = () => {
    setQuantity((prevState) => (quantity > 1 ? prevState - 1 : null));
  };

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const checkout = async () => {
    const data = {
      id: selectedProduct.id,
      productName: selectedProduct.name,
      price: selectedProduct.price,
      quantity: 1,
			nama,
			wa
    };

    const response = await fetch("/api/tokenizer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // penting!`
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text(); // raw response
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
      <div className="grid items-center justify-center">
        {/* <div className="flex sm:gap-4">
          <button
            className="transition-all hover:opacity-75"
            onClick={decreaseQuantity}
          >
            ➖
          </button>

          <input
            type="number"
            id="quantity"
            value={quantity}
            className="h-10 w-16 text-black border-transparent text-center"
            onChange={quantity}
          />

          <button
            className="transition-all hover:opacity-75"
            onClick={increaseQuantity}
          >
            ➕
          </button>
        </div> */}
        <button
          className="rounded bg-indigo-500 p-4 text-sm font-medium transition hover:scale-105"
          onClick={checkout}
        >
          Checkout
        </button>
        <button
          className="text-indigo-500 py-4 text-sm font-medium transition hover:scale-105"
          onClick={generatePaymentLink}
        >
          Create Payment Link
        </button>
      </div>
      {paymentUrl ? (
        <div className="text-black underline italic">
          <Link href={paymentUrl} target="_blank">
            {paymentUrl}
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Checkout;
