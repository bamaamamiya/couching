"use client";

import React from "react";
import FadeUpWhenVisible from "./FadeUpWhenVisible";

const OfferBreakdown = () => {
  const benefits = [
    { title: "1-on-1 coaching", value: "Rp5.000.000" },
    { title: "SOP riset produk", value: "Rp1.000.000" },
    { title: "Template video winning ads", value: "Rp1.500.000" },
    { title: "Copywriting WA & landing page", value: "Rp2.000.000" },
    { title: "Akses grup coaching selamanya", value: "Rp3.000.000" },
    { title: "Garansi coaching sampai pecah telur", value: "Tak ternilai" },
  ];

  return (
    <FadeUpWhenVisible>
      <section className="bg-black text-white py-20 px-6 sm:px-10 md:px-20">
        <div className="max-w-3xl mx-auto text-center bg-zinc-900 p-8 rounded-2xl border border-zinc-700 shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-bold mb-10">
            Apa yang Kamu Dapatkan di Program Ini?
          </h2>

          <div className="space-y-5 text-left text-sm sm:text-base">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="flex justify-between border-b border-zinc-800 pb-4"
              >
                <span className="flex gap-2 items-center text-green-400">
                  ✅ <span className="text-white">{item.title}</span>
                </span>
                <span className="font-semibold text-right text-white">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-lg sm:text-xl font-bold text-white">
            Total Value:{" "}
            <span className="line-through text-gray-400">
              Rp12.500.000+
            </span>
          </div>

          <div className="mt-4 text-sm sm:text-base text-gray-400">
            Harga spesial hari ini hanya
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-white">
            Rp1.500.000
          </div>

          <p className="mt-2 text-xs sm:text-sm text-gray-500">
            Harga naik 20% bulan depan. Slot tersisa 3 orang lagi.
          </p>
        </div>
      </section>
    </FadeUpWhenVisible>
  );
};

export default OfferBreakdown;
