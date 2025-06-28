"use client";

import React from "react";
import Checkout from "./Checkout";

const Pricing = () => {
  const packages = [
    {
      name: "Pemula dari Nol",
      price: 1500000,
      features: [
        "Coaching 1-on-1 selama 14 hari",
        "Riset produk & skrip iklan",
        "Setup Meta Ads",
        "Review & feedback harian",
      ],
      button: <Checkout tier="basic" />,
    },
    {
      name: "Sampai Tahap Scale",
      price: 5000000,
      features: [
        "Semua yang ada di paket pemula",
        "Strategi scale & retargeting",
        "Analisis performa iklan lanjutan",
        "Akses prioritas + support lebih panjang",
      ],
      button: <Checkout tier="scale" />,
    },
  ];

  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID").format(value);

  return (
    <section
      id="pricing"
      className="bg-black text-white py-20 px-6 text-center"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-4">Pilih Paketmu 🎯</h2>
      <p className="text-gray-400 mb-10">
        Harga naik 20% bulan depan. Booking sekarang selagi bisa.
      </p>

      <div className="grid sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="border border-white rounded-xl p-8 bg-gray-900 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
            <p className="text-3xl font-bold mb-4">
              Rp {formatRupiah(pkg.price)}
            </p>
            <ul className="text-left text-sm space-y-2 mb-6">
              {pkg.features.map((f, j) => (
                <li key={j}>✅ {f}</li>
              ))}
            </ul>
            {pkg.button}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
