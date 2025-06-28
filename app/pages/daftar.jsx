"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { db } from "../firebase"; // pastikan sudah setup Firebase
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Daftar() {
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [wa, setWa] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama || !wa) return alert("Lengkapi semua field ya!");

    setLoading(true);
    try {
      // simpan data ke Firestore
      await addDoc(collection(db, "leads"), {
        nama,
        wa,
        createdAt: serverTimestamp(),
      });

      // redirect ke halaman pilih paket
      router.push(`/pilih-paket?nama=${encodeURIComponent(nama)}&wa=${encodeURIComponent(wa)}`);
    } catch (err) {
      console.error("Gagal simpan:", err);
      alert("Gagal mendaftar. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-xl max-w-md w-full space-y-6 shadow border border-zinc-700">
        <h2 className="text-2xl font-bold text-center">Daftar Coaching</h2>

        <div>
          <label className="block mb-1 text-sm">Nama Lengkap</label>
          <input
            type="text"
            className="w-full p-3 rounded bg-black text-white border border-gray-700"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Nomor WhatsApp</label>
          <input
            type="text"
            className="w-full p-3 rounded bg-black text-white border border-gray-700"
            placeholder="08xxxxxxxxxx"
            value={wa}
            onChange={(e) => setWa(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 px-4 py-3 w-full rounded font-semibold transition"
          disabled={loading}
        >
          {loading ? "Memproses..." : "Daftar Sekarang"}
        </button>
      </form>
    </section>
  );
}
