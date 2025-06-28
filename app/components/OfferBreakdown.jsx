"use client";

import React from "react";
import FadeUpWhenVisible from "./FadeUpWhenVisible";
const OfferBreakdown = () => {
  const benefits = [
    {
      title: "3x Sesi Zoom 1-on-1",
      value: "Rp1.500.000",
    },
    {
      title: "Template & Skrip WhatsApp Proven",
      value: "Rp500.000",
    },
    {
      title: "Template Iklan Siap Pakai (Canva + Copy)",
      value: "Rp750.000",
    },
    {
      title: "Grup Support Eksklusif (Discord)",
      value: "Tak ternilai",
    },
  ];

  return (
		<FadeUpWhenVisible>

    <section className="bg-black text-white py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-10">
          Apa yang Kamu Dapatkan di Program Ini?
        </h2>

        <div className="space-y-6 text-left">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="flex justify-between border-b border-gray-800 pb-4"
            >
              <span className="font-medium">✅ {item.title}</span>
              <span className="font-semibold">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-xl sm:text-2xl font-bold">
          Total Value: <span className="line-through">Rp2.750.000+</span>
        </div>

        <div className="mt-4">
          <p className="text-lg text-gray-400 mb-1">Tapi kamu hanya investasi mulai dari:</p>
          <p className="text-3xl sm:text-4xl font-extrabold text-indigo-400 tracking-wide">
            Rp1.500.000
          </p>
        </div>
      </div>
    </section>
		</FadeUpWhenVisible>

  );
};

export default OfferBreakdown;
