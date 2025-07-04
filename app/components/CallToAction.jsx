"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../libs/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  where,
} from "firebase/firestore";

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

    if (!validateWA(wa))
      return alert("Nomor WA tidak valid. Awali dengan +62, 62, atau 08");
    if (!validateEmail(email)) return alert("Format email tidak valid");

    // 🔁 Format WA: 08 / +62 jadi 62
    let formattedWA = wa.replace(/\s+/g, "").replace(/^(\+62|0)/, "62");

    // 1. Cek berapa yang sudah mendaftar bulan ini
    const now = new Date();
    const awalBulan = new Date(now.getFullYear(), now.getMonth(), 1);

    const q = query(
      collection(db, "leads"),
      where("createdAt", ">=", awalBulan)
    );
    const snapshot = await getDocs(q);

    if (snapshot.size >= 3) {
      alert("Slot bulan ini sudah penuh. Kamu masuk waiting list ya.");

      await addDoc(collection(db, "waitinglist"), {
        nama,
        wa: formattedWA,
        email,
        createdAt: serverTimestamp(),
      });

      router.push("/waiting-list"); // arahkan ke halaman khusus waiting
      return;
    }

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
              🚨 Sisa 3 slot lagi. Harga akan naik jadi Rp600.000 bulan depan.
              <br className="hidden sm:block" />
              Ambil slotmu sekarang — sebelum semua batch penuh.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-10 space-y-5 w-full sm:w-4/5 md:w-[480px] lg:w-[500px] mx-auto"
          >
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full p-3 rounded-xl bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:ring-2 focus:ring-white/80 outline-none text-sm sm:text-base"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nomor WhatsApp"
              className="w-full p-3 rounded-xl bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:ring-2 focus:ring-white/80 outline-none text-sm sm:text-base"
              value={wa}
              onChange={(e) => setWa(e.target.value)}
            />
            <input
              type="email"
              placeholder="Alamat Email Aktif"
              className="w-full p-3 rounded-xl bg-zinc-800 text-white placeholder-gray-400 border border-zinc-700 focus:ring-2 focus:ring-white/80 outline-none text-sm sm:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

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
