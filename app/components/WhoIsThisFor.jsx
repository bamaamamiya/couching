"use client";

import React from "react";
import FadeUpWhenVisible from "./FadeUpWhenVisible";

const WhoIsThisFor = () => {
  return (
		<FadeUpWhenVisible>

    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10">
          Program Ini Cocok Untuk Kamu Jika...
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 text-lg">
          <div className="bg-black p-6 rounded-xl border border-white/10 shadow-sm">
            <ul className="list-disc list-inside space-y-2 text-white/90">
              <li>Baru mulai dropship dan bingung mulai dari mana</li>
              <li>Sudah coba iklan tapi belum closing</li>
              <li>Pernah ikut kelas, tapi tanpa pendampingan</li>
              <li>Mau dibimbing sampai pecah telur</li>
            </ul>
          </div>
          <div className="bg-black p-6 rounded-xl border border-white/10 shadow-sm">
            <h3 className="font-semibold mb-4 text-white text-lg underline">
              Tidak Cocok Jika:
            </h3>
            <ul className="list-disc list-inside text-sm text-white/60 space-y-1">
              <li>Kamu ingin hasil instan tanpa eksekusi</li>
              <li>Tidak mau take action & menunda-nunda</li>
              <li>Ingin semuanya gratis tanpa effort</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
		</FadeUpWhenVisible>
  );
};

export default WhoIsThisFor;
