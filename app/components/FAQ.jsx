"use client";

import React from "react";
import FadeUpWhenVisible from "./FadeUpWhenVisible";

const FAQ = () => {
  const faqs = [
    {
      q: "Apakah program ini cocok untuk pemula absolut?",
      a: "Ya, program ini memang dirancang untuk kamu yang belum pernah jualan online atau belum pernah pasang iklan sama sekali.",
    },
    {
      q: "Apa bedanya paket Rp.400.000 dan Rp.1.500.000?",
      a: "Paket 400rb cocok untuk kamu yang baru mulai dan ingin pecah telur pertama. Kalau kamu ingin lanjut belajar scale, retargeting, dan butuh pendampingan lebih panjang, pilih paket 1,5jt.",
    },
    {
      q: "Apakah ini kelas video atau live?",
      a: "Bukan kelas video. Ini full coaching 1-on-1 dengan kamu langsung dibimbing lewat Discord dan sesi evaluasi rutin.",
    },
    {
      q: "Bagaimana kalau saya belum punya produk?",
      a: "Tenang, kamu akan dibimbing riset produk yang cocok buatmu dan langsung siap pasang iklan.",
    },
  ];

  return (
    <FadeUpWhenVisible>
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10">
            Pertanyaan yang Sering Ditanyakan 🤔
          </h2>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-700 p-6 rounded-xl shadow"
              >
                <h3 className="font-semibold text-lg mb-2 text-white">
                  {item.q}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
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
