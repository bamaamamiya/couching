"use client";

import React from "react";
import FadeUpWhenVisible from "./FadeUpWhenVisible";

const OfferBreakdown = () => {
  const benefits = [
    { title: "1-on-1 coaching", value: "Rp5.000.000" },
    { title: "SOP riset produk", value: "Rp1.000.000" },
    { title: "Mindset video winning ads", value: "Rp1.500.000" },
    { title: "Copy Ads Prompt FB", value: "Rp2.000.000" },
    { title: "Akses grup coaching selamanya", value: "Rp3.000.000" },
    { title: "Garansi coaching sampai pecah telur", value: "Tak ternilai" },
  ];

  return (
    <FadeUpWhenVisible>
      <section className="bg-black text-white py-24 px-6 sm:px-10 md:px-20">
        <div className="max-w-3xl mx-auto rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-2xl p-10 backdrop-blur">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">
            Apa yang Kamu Dapatkan?
          </h2>

          <div className="space-y-5 text-sm sm:text-base">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-zinc-800 pb-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{item.title}</span>
                </div>
                <span className="font-medium text-right text-gray-200">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="text-base sm:text-lg text-gray-400 mb-2">
              Total Value:
            </div>
            <div className="text-2xl sm:text-3xl font-bold line-through text-gray-500">
              Rp12.500.000+
            </div>

            <div className="mt-6 text-gray-400 text-sm sm:text-base">
              Harga Spesial Hari Ini
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Rp400.000
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Harga akan naik 20% bulan depan. Tersisa <span className="text-white font-semibold">3 slot</span> lagi.
            </p>
          </div>
        </div>
      </section>
    </FadeUpWhenVisible>
  );
};

export default OfferBreakdown;
