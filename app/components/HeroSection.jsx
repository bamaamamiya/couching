"use client";

import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          Pecah Telur Pertamamu Dalam 14 Hari 🚀
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Program coaching 1-on-1 untuk bantu kamu closing pertama dari dropship
          via Meta Ads — tanpa harus bingung mulai dari mana. Semua sudah
          dibimbing langkah demi langkah.
        </p>
        <Link href="#pricing">
          <span className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition cursor-pointer">
            Booking Sekarang
          </span>
        </Link>
        <p className="mt-4 text-sm italic text-gray-500">
          Harga naik 20% bulan depan. Slot terbatas setiap bulan.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
