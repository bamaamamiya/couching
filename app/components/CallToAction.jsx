"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../libs/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import FadeUpWhenVisible from "./FadeUpWhenVisible";

const FinalCTA = () => {
  const [nama, setNama] = useState("");
  const [wa, setWa] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
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

    if (!validateWA(wa)) return alert("Nomor WA tidak valid. Awali dengan +62, 62, atau 08");
    if (!validateEmail(email)) return alert("Format email tidak valid");

    // 🔁 Format WA: 08 / +62 jadi 62
    let formattedWA = wa.replace(/\s+/g, "").replace(/^(\+62|0)/, "62");

    setLoading(true);
    try {
      await addDoc(collection(db, "leads"), {
        nama,
        wa: formattedWA,
        email,
        createdAt: serverTimestamp(),
      });

      router.push(`/pilih-paket?nama=${nama}&wa=${formattedWA}`);
    } catch (err) {
      console.error("Gagal simpan:", err);
      alert("Gagal daftar. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeUpWhenVisible>
      <section className="bg-black text-white py-24 px-6 text-center" id="daftar">
        <div className="max-w-xl mx-auto space-y-8">
          <div>
            <h2 className="text-4xl sm:text-4xl font-extrabold mb-4 leading-tight">
              Siap Pecah Telur Pertamamu?
            </h2>
            <p className="text-gray-400 text-lg">
              🚨 Slot 3 orang lagi. Harga naik 20% bulan depan. Ambil langkah
              sekarang — sebelum "nanti" jadi terlambat.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 rounded-2xl px-6 py-10 space-y-4 border border-zinc-700 w-full sm:w-3/4 md:w-[480px] lg:w-[500px] mx-auto"
          >
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full p-3 rounded-xl bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:ring-2 focus:ring-white outline-none"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nomor WhatsApp"
              className="w-full p-3 rounded-xl bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:ring-2 focus:ring-white outline-none"
              value={wa}
              onChange={(e) => setWa(e.target.value)}
            />
            <input
              type="email"
              placeholder="Alamat Email Aktif"
              className="w-full p-3 rounded-xl bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:ring-2 focus:ring-white outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl font-semibold transition ${
                loading
                  ? "bg-zinc-600 cursor-not-allowed text-gray-300"
                  : "bg-black hover:bg-black/70 text-white"
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
