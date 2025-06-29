"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const BrandBar = () => {
  return (
    <header className="bg-black text-white py-2 shadow-sm border-b border-zinc-800">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 gap-4">
        {/* Logo dan Nama */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/lucrum.png"
            alt="Lucrum Logo"
            width={42}
            height={42}
            className="object-contain"
          />
          <div className="leading-tight">
            <p className="text-base sm:text-lg font-semibold tracking-wide ">LUCRUM</p>
            <p className="text-base sm:text-lg font-semibold tracking-wide -mt-3">LAUNCH</p>
          </div>
        </div>

        {/* Tombol CTA */}
        <Link
          href="/free"
					className="inline-block bg-white text-black px-3 sm:px-4 py-2 rounded-full font-semibold text-sm sm:text-base hover:opacity-90 transition"
        >
          Ambil Coaching Gratis 🚀
        </Link>
      </div>
    </header>
  );
};

export default BrandBar;
