"use client";

import React from "react";
import Image from "next/image";

const Testimonials = () => {
  const data = [
    {
      name: "Yodi",
      message:
        "Testimoni langsung via chat: Super disiplin, detail, & hasil real!",
      img: "/images/yodi-chat.png", // bukti dashboard / hasil coaching
    },
    
  ];

  return (
    <section className="bg-black text-white py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12">
          Bukti Nyata Dari Murid Bama Dropship 📈
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 p-6 rounded-xl shadow-lg border border-zinc-700 hover:shadow-2xl transition"
            >
              <Image
                src={item.img}
                alt={`Bukti dari ${item.name}`}
                width={1000}
                height={600}
                className="rounded-lg w-full h-auto mb-4"
              />
              <div className="space-y-2">
                <p className="text-sm text-gray-300 italic">"{item.message}"</p>
                <p className="mt-2 font-semibold text-white text-sm">
                  – {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
