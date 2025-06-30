"use client";

import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-6">
          Pecah Telur Pertamamu Dalam 7 Hari 🚀
        </h1>

        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Coaching 1-on-1 untuk bantu kamu closing pertama dari bisnis dropship lewat Meta Ads.
          Tanpa bingung mulai dari mana — semua dibimbing langkah demi langkah sampai berhasil.
        </p>

        <Link href="#daftar">
          <span className="inline-block bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-md hover:bg-gray-100 transition-all duration-200 cursor-pointer">
            Booking Sekarang
          </span>
        </Link>

        <p className="mt-5 text-xs sm:text-sm italic text-gray-500">
          Harga naik 20% bulan depan. Slot terbatas setiap bulan.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
