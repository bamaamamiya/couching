"use client";

import React from "react";
import FadeUpWhenVisible from "./FadeUpWhenVisible";

const FAQ = () => {
  const faqs = [
    {
      q: "Apakah program ini cocok untuk pemula?",
      a: "Banget. Bahkan kamu nggak perlu pusing mikirin produk dan iklan. Saya akan bantu carikan produk yang terbukti laku, buatin ads copy-nya, dan bimbing kamu langsung jalankan semuanya sampai pecah telur.",
    },
    {
      q: "Saya dibantu sampai sejauh apa?",
      a: "Program ini bukan sekadar ngajarin teori. Kamu akan langsung dibantu cari produk, disiapkan iklan, dibuatkan copy-nya, dan didampingi terus sampai benar-benar ada order masuk. Bisa dibilang, kamu saya carry untuk pecah telur pertama.",
    },
    {
      q: "Apakah ini kelas video atau live?",
      a: "Bukan kelas video. Ini sesi 1-on-1 langsung via Discord, jadi kamu bisa tanya apapun dan dijelaskan sampai paham. Beneran didampingi, bukan ditinggal nonton.",
    },
    {
      q: "Apakah hasilnya dijamin?",
      a: "Ya. Selama kamu benar-benar ikut step by step, hasil pecah telur itu saya jamin. Karena semua materi, eksekusi, dan strategi akan disesuaikan langsung untuk kamu.",
    },
    {
      q: "Apa bedanya paket Rp500.000 dan Rp1.500.000?",
      a: "Paket Rp500.000 fokus pecah telur: produk saya pilihkan, ads copy saya bantu buatkan, dan saya dampingi pasang iklannya. Paket Rp1.500.000 cocok untuk kamu yang sudah closing dan ingin lanjut scale lewat landing page & optimasi lanjutan.",
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
