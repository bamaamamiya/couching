"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../libs/supabase-browser";

import FadeUpWhenVisible from "./FadeUpWhenVisible";

const FinalCTA = () => {
  const [nama, setNama] = useState("");
  const [wa, setWa] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [umur, setUmur] = useState("");
  const [paket, setPaket] = useState("pecah-telur");

  const router = useRouter();

  const validateWA = (wa) => {
    const cleaned = wa.replace(/\s+/g, ""); // hapus spasi
    return /^(?:\+62|62|08)\d{6,14}$/.test(cleaned);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama || !wa || !email) return alert("Semua data wajib diisi.");

    if (!validateWA(wa))
      return alert("Nomor WA tidak valid. Awali dengan +62, 62, atau 08");
    if (!validateEmail(email)) return alert("Format email tidak valid");

    let formattedWA = wa.replace(/\s+/g, "").replace(/^(\+62|0)/, "62");

    setLoading(true);
    try {
      const { error } = await supabase.from("leadmagnet").insert([
        {
          nama: nama,
          wa: formattedWA,
          email: email,
          umur: umur,
          paket: paket,
        },
      ]);

      if (error) throw error;

      router.push("/waiting"); // arahkan ke halaman waiting list
    } catch (err) {
      console.error("Gagal simpan:", err);
      alert("Gagal daftar. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeUpWhenVisible>
      <section
        className="bg-black text-white py-24 px-6 text-center"
        id="daftar"
      >
        <div className="max-w-xl mx-auto space-y-10">
          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
              Siap Pecah Telur Pertamamu?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              🚨 Batch selanjutnya akan dibuka terbatas.
              <br className="hidden sm:block" />
              Isi form sekarang untuk amankan tempatmu di komunitas Discord
              sebelum kuota penuh.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-10 space-y-5 w-full sm:w-4/5 md:w-[480px] lg:w-[500px] mx-auto"
          >
            {/* Nama */}
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full p-3 rounded-xl bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:ring-2 focus:ring-white/80 outline-none text-sm sm:text-base"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />

            {/* WA */}
            <input
              type="text"
              placeholder="Nomor WhatsApp"
              className="w-full p-3 rounded-xl bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:ring-2 focus:ring-white/80 outline-none text-sm sm:text-base"
              value={wa}
              onChange={(e) => setWa(e.target.value)}
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Alamat Email Aktif"
              className="w-full p-3 rounded-xl bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:ring-2 focus:ring-white/80 outline-none text-sm sm:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Umur */}
            <input
              type="number"
              placeholder="Berapa Usia Kamu?"
              className="w-full p-3 rounded-xl bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:ring-2 focus:ring-white/80 outline-none text-sm sm:text-base"
              value={umur}
              onChange={(e) => setUmur(e.target.value)}
              min="15"
              max="35"
            />

            {/* Pilihan Paket */}
            <div className="text-left text-sm sm:text-base text-white space-y-2">
              <p className="font-medium">Pilih Jalur Belajar</p>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paket"
                    value="pecah-telur"
                    checked={paket === "pecah-telur"}
                    onChange={(e) => setPaket(e.target.value)}
                  />
                  <span className="text-gray-300">
                    ✍ Pemula: Fokus Pecah Telur
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paket"
                    value="naik-omset"
                    checked={paket === "naik-omset"}
                    onChange={(e) => setPaket(e.target.value)}
                  />
                  <span className="text-gray-300">
                    🔥 Naik Omset: Pecah Telur → Scale
                  </span>
                </label>
              </div>
            </div>

            {/* Tombol Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl font-semibold transition text-sm sm:text-base ${
                loading
                  ? "bg-zinc-700 cursor-not-allowed text-gray-300"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {loading ? "Memproses..." : "Booking Sekarang 🔥"}
            </button>
          </form>
        </div>
      </section>
    </FadeUpWhenVisible>
  );
};

export default FinalCTA;
