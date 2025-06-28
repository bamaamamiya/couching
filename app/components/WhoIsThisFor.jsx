"use client";

import React from "react";
import FadeUpWhenVisible from "./FadeUpWhenVisible";

const WhoIsThisFor = () => {
  return (
    <FadeUpWhenVisible>
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14 tracking-tight">
            Program Ini Cocok Banget Buat Kamu Kalau...
          </h2>

          <div className="grid sm:grid-cols-2 gap-8 text-base">
            {/* Cocok */}
            <div className="bg-zinc-900 p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-white/10 transition-all duration-300">
              <h3 className="text-lg font-bold text-green-400 mb-4">
                ✅ Cocok Jika:
              </h3>
              <ul className="space-y-3 text-white/90 leading-relaxed">
                <li>• Baru mulai dropship dan bingung mulai dari mana</li>
                <li>• Sudah coba iklan tapi belum closing</li>
                <li>• Pernah ikut kelas, tapi tanpa pendampingan</li>
                <li>• Mau dibimbing sampai pecah telur</li>
              </ul>
            </div>

            {/* Tidak Cocok */}
            <div className="bg-zinc-950 p-6 rounded-2xl border border-red-500/30 shadow-md hover:shadow-red-500/20 transition-all duration-300">
              <h3 className="text-lg font-bold text-red-400 mb-4 underline">
                ❌ Tidak Cocok Jika:
              </h3>
              <ul className="space-y-2 text-white/70 text-sm leading-relaxed">
                <li>• Kamu ingin hasil instan tanpa eksekusi</li>
                <li>• Tidak mau take action & menunda-nunda</li>
                <li>• Ingin semuanya gratis tanpa effort</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </FadeUpWhenVisible>
  );
};

export default WhoIsThisFor;
