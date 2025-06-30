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
    <section className="bg-black text-white min-h-screen px-6 py-24">
      {/* Midtrans Snap Script */}
      <Script
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        strategy="beforeInteractive"
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 leading-tight tracking-tight">
          Halo {nama || "teman"} 👋
          <br />
          Pilih Paket Coaching Kamu
        </h1>

        <div className="grid sm:grid-cols-2 gap-8">
          {Object.entries(products).map(([tier, item]) => (
            <div
              key={tier}
              className="bg-zinc-900/80 border border-zinc-700 rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-zinc-500/10 transition-all duration-300"
            >
              <div className="text-center space-y-3">
                <h2 className="text-xl font-bold text-white">{item.name}</h2>
                <p className="text-2xl font-extrabold text-white">
                  Rp {new Intl.NumberFormat("id-ID").format(item.price)}
                </p>
              </div>

              <ul className="mt-6 text-sm text-gray-300 space-y-2 leading-relaxed">
                {item.features?.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    ✅ <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(tier)}
                className="mt-6 w-full py-3 rounded-xl font-semibold text-sm sm:text-base bg-white text-black hover:bg-gray-200 transition"
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
