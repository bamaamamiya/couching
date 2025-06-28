"use client";

import React from "react";
import Image from "next/image";
import { Julius_Sans_One } from "next/font/google";

const julius = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

const BrandBar = () => {
  return (
    <header className="bg-black text-white py-2">
      <div className="flex items-center max-w-6xl mx-auto px-4 gap-2 sm:gap-3">
        {/* Logo Bulat */}
        <Image
          src="/lucrum.png"
          alt="Lucrum Logo"
          width={42}
          height={42}
          className="object-contain"
        />

        {/* Teks Stacked */}
        <div className={`${julius.className} leading-tight`}>
          <p className="text-base sm:text-lg tracking-wide md:-mb-4">LUCRUM</p>
          <p className="text-base sm:text-lg tracking-wide -mt-2">LAUNCH</p>
        </div>
      </div>
    </header>
  );
};

export default BrandBar;
