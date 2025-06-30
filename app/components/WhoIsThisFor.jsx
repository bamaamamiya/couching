"use client";

import React from "react";
import FadeUpWhenVisible from "./FadeUpWhenVisible";

const WhoIsThisFor = () => {
  return (
    <FadeUpWhenVisible>
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16 tracking-tight">
            Program Ini Cocok untuk Kamu Jika...
          </h2>

          <div className="grid sm:grid-cols-2 gap-8 text-base">
            {/* Cocok */}
            <div className="bg-zinc-900/80 border border-green-500/20 rounded-2xl p-6 shadow-xl hover:shadow-green-500/10 transition-all duration-300">
              <h3 className="text-lg font-semibold text-green-400 mb-4">
                ✓ Cocok Jika
              </h3>
              <ul className="space-y-3 text-gray-100/90 leading-relaxed text-sm sm:text-base">
                <li>• Kamu baru mulai dropship & bingung mulai dari mana</li>
                <li>• Sudah coba iklan tapi belum ada hasil</li>
                <li>• Pernah ikut kelas tapi nggak ada pendampingan</li>
                <li>• Siap dibimbing sampai pecah telur pertama</li>
              </ul>
            </div>

            {/* Tidak Cocok */}
            <div className="bg-zinc-900/80 border border-red-500/20 rounded-2xl p-6 shadow-xl hover:shadow-red-500/10 transition-all duration-300">
              <h3 className="text-lg font-semibold text-red-400 mb-4">
                ✗ Tidak Cocok Jika
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                <li>• Kamu cari hasil instan tanpa mau kerja</li>
                <li>• Nggak mau take action & sering menunda</li>
                <li>• Ingin semuanya gratis tanpa usaha</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </FadeUpWhenVisible>
  );
};

export default WhoIsThisFor;
