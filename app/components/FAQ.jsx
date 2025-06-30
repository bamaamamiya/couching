"use client";

import React from "react";
import FadeUpWhenVisible from "./FadeUpWhenVisible";

const FAQ = () => {
  const faqs = [
    {
      q: "Apakah program ini cocok untuk pemula absolut?",
      a: "Ya, program ini dirancang khusus untuk kamu yang belum pernah jualan online atau belum pernah pasang iklan sama sekali.",
    },
    {
      q: "Apa bedanya paket Rp400.000 dan Rp1.500.000?",
      a: "Paket Rp400.000 cocok untuk kamu yang ingin pecah telur pertama. Sedangkan paket Rp1.500.000 memberikan pendampingan lanjutan seperti scale, retargeting, dan strategi lanjutan.",
    },
    {
      q: "Apakah ini kelas video atau live?",
      a: "Bukan kelas video. Ini adalah coaching 1-on-1 langsung, lewat Discord & sesi evaluasi mingguan agar progresmu dipantau langsung.",
    },
    {
      q: "Bagaimana kalau saya belum punya produk?",
      a: "Tenang, kamu akan dibimbing step-by-step cara riset dan memilih produk yang cocok — bahkan dari nol.",
    },
  ];

  return (
    <FadeUpWhenVisible>
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16 tracking-tight">
            Pertanyaan yang Sering Ditanyakan
          </h2>

          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-zinc-900/80 border border-zinc-700/50 p-6 sm:p-8 rounded-2xl shadow-lg transition duration-300 hover:shadow-zinc-600/10"
              >
                <h3 className="font-semibold text-base sm:text-lg text-white mb-2">
                  {item.q}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeUpWhenVisible>
  );
};

export default FAQ;
