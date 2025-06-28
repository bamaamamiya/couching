"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";
import { products } from "../libs/product";

export default function PilihPaket() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nama = searchParams.get("nama");
  const wa = searchParams.get("wa");

  useEffect(() => {
    if (!nama || !wa) {
      router.push("/");
    }
  }, [nama, wa, router]);

  const handleCheckout = async (tier) => {
    const product = products[tier];
    if (!product) return alert("Paket tidak valid");

    const data = {
      id: product.id,
      productName: product.name,
      price: product.price,
      quantity: 1,
      nama,
      wa,
    };

    try {
      const response = await fetch("/api/tokenizer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Gagal create token:", errorText);
        return alert("Gagal membuat pembayaran. Coba lagi.");
      }

      const res = await response.json();

      window.snap.pay(res.token, {
        onSuccess: () => router.push("/thanks"),
        onPending: () => router.push("/thanks"),
        onClose: () => alert("Kamu belum menyelesaikan pembayaran."),
      });
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Terjadi kesalahan saat checkout.");
    }
  };

  return (
    <section className="bg-black text-white min-h-screen px-4 py-20">
      {/* Midtrans Snap Script */}
      <Script
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        strategy="beforeInteractive"
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
          Halo {nama || "teman"} 👋
          <br />
          Pilih paket coaching kamu:
        </h1>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          {Object.entries(products).map(([tier, item]) => (
            <div
              key={tier}
              className="bg-zinc-900 border border-indigo-600 rounded-2xl p-6 shadow-lg hover:shadow-indigo-700 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-indigo-400 mb-2 text-center">
                {item.name}
              </h2>
              <p className="text-3xl font-extrabold text-white mb-4 text-center">
                Rp {new Intl.NumberFormat("id-ID").format(item.price)}
              </p>

              <ul className="text-sm text-gray-300 mb-6 space-y-2">
                {item.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    ✅ <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition duration-200"
                onClick={() => handleCheckout(tier)}
              >
                Checkout Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
