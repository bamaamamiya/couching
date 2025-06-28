"use client";

import React from "react";

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
        <div className="mt-10 text-xl font-bold">
          Total Value: <span className="line-through">Rp2.750.000+</span>
        </div>
        <div className="text-lg text-gray-400 mt-2">
          Kamu hanya investasi mulai dari <span className="font-bold text-white">Rp1.500.000</span>
        </div>
      </div>
    </section>
  );
};

export default OfferBreakdown;