"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { db } from "../libs/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Komponen LP tambahan
import OfferBreakdown from "../components/OfferBreakdown";
import WhoIsThisFor from "../components/WhoIsThisFor";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CallToAction from "../components/CallToAction";

export default function Home() {
  const [nama, setNama] = useState("");
  const [wa, setWa] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama || !wa) return alert("Isi dulu ya!");

    setLoading(true);
    try {
      await addDoc(collection(db, "leads"), {
        nama,
        wa,
        createdAt: serverTimestamp(),
      });

      router.push(
        `/pilih-paket?nama=${encodeURIComponent(nama)}&wa=${encodeURIComponent(wa)}`
      );
    } catch (err) {
      console.error("Gagal simpan:", err);
      alert("Gagal daftar. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-black text-white">
      {/* SECTION: Form Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full space-y-8 p-8 bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">
            Coaching 1-on-1 Dropship 🚀
          </h1>
          <p className="text-gray-400 text-center">
            Dapatkan bimbingan langsung dari Bama sampai kamu pecah telur!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Nama Lengkap</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-black text-white border border-gray-700"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama kamu"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Nomor WhatsApp</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-black text-white border border-gray-700"
                value={wa}
                onChange={(e) => setWa(e.target.value)}
                placeholder="08xxxxxxxxxx"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded font-semibold transition"
            >
              {loading ? "Memproses..." : "Daftar Sekarang 🔥"}
            </button>
          </form>
        </div>
      </section>

      {/* SECTION: Komponen LP lainnya */}
      <OfferBreakdown />
      <WhoIsThisFor />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CallToAction />
    </main>
  );
}
