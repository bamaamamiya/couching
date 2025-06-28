"use client";

import React from "react";

const FAQ = () => {
  const faqs = [
    {
      q: "Apakah program ini cocok untuk pemula absolut?",
      a: "Ya, program ini memang dirancang untuk kamu yang belum pernah jualan online atau belum pernah pasang iklan sama sekali.",
    },
    {
      q: "Apa perbedaan paket 1,5jt dan 5jt?",
      a: "Paket 1,5jt fokus ke pemula sampai closing pertama. Paket 5jt mencakup pendampingan lebih panjang sampai kamu belajar scale & retargeting.",
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
              <p className="text-gray-300 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
