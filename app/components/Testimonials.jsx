"use client";

import React from "react";
import Image from "next/image";
import FadeUpWhenVisible from "./FadeUpWhenVisible";
const Testimonials = () => {
  const data = [
    {
      img: "/images/yodi.png", // Bukti dashboard / hasil coaching
    },
    {
      img: "/images/yhosua.png", // Bukti dashboard / hasil coaching
    },
  ];

  return (
    <FadeUpWhenVisible>
      <section className="bg-black text-white py-20 px-6 sm:px-10 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12">
            Bukti Nyata Dari Murid Lucrum Launch 📈
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.map((item, i) => (
              <div
                key={i}
                className="bg-zinc-900 p-4 rounded-xl shadow-lg border border-zinc-700 hover:shadow-2xl transition"
              >
                <div className="flex justify-center items-center">
                  <Image
                    src={item.img}
                    alt={`Bukti dari ${item.name}`}
                    width={800}
                    height={500}
                    className="rounded-lg object-contain w-full h-[300px] sm:h-[300px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeUpWhenVisible>
  );
};

export default Testimonials;
