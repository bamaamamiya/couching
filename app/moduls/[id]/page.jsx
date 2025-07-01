// app/moduls/[id]/page.jsx
"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { moduls } from "../../libs/moduls";
import BackButton from "../../components/BackButton";
import Link from "next/link";

export default function ModulDetail() {
  const { id } = useParams();
  const modul = moduls.find((m) => m.id === id);

  if (!modul) return notFound();

  const [completed, setCompleted] = useState(false);

  return (
    <section className="bg-black text-white min-h-screen px-4 py-20 flex items-center justify-center">
      <div className="w-full max-w-4xl space-y-8">
        <BackButton />

        {/* Video */}
        <div className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden border border-zinc-700">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${modul.videoId}`}
            title={modul.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Konten */}
        <div className="space-y-4 text-left">
          <h2 className="text-3xl font-bold">
            {modul.icon} {modul.title}
          </h2>
          <p className="text-gray-300 leading-relaxed">{modul.description}</p>
          {/* Tampilkan gambar hanya jika ada */}
          {modul.images && (
            <img
              src={modul.images}
              alt={`${modul.title} illustration`}
              className="rounded-lg mt-4 flex justify-center items-center"
            />
          )}
          <ul className="list-disc list-inside text-gray-400 text-sm mt-3 space-y-1">
            {modul.takeaway.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
