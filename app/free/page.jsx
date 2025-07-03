"use client";

import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../libs/firebase"; // pastikan path-nya sesuai strukturmu
import FadeUpWhenVisible from "../components/FadeUpWhenVisible";

export default function LeadMagnetForm() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    wa: "",
    alasan: "",
    umur: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidWA = (wa) => {
    return /^(08|\+62|62)[0-9]{7,15}$/.test(wa);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nama || !form.email || !form.wa || !form.alasan) {
      alert("Lengkapi semua field ya.");
      return;
    }

    if (!isValidWA(form.wa)) {
      alert(
        "Nomor WhatsApp harus diawali dengan 08, 62, atau +62 dan hanya angka."
      );
      return;
    }

    const umur = parseInt(form.umur);
    if (!umur || umur < 17 || umur > 40) {
      alert("Isi umur kamu dengan benar (17–40 tahun)");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "leadmagnet"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Gagal simpan:", err);
      alert("Gagal daftar. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeUpWhenVisible>
      <div className="bg-black text-white min-h-screen px-6 py-20 flex items-center justify-center">
        <div className="max-w-2xl w-full space-y-8">
          {submitted ? (
            <div className="bg-zinc-900 border border-zinc-700 text-white p-6 rounded-xl text-center space-y-4 shadow-xl">
              <h2 className="text-3xl font-bold text-white">
                ✅ Kamu Berhasil Daftar
              </h2>
              <p className="text-gray-300">
                Nama kamu udah masuk daftar! 1 peserta bakal dipilih dalam 1x24
                jam buat dapet akses coaching langsung.
              </p>
              <p className="text-sm text-zinc-400">
                Tim Lucrum Launch akan hubungi kamu via WhatsApp kalau kamu
                terpilih. Sambil nunggu, pantau terus konten terbaru di IG &
                Discord 💬
              </p>

							<a
          href="https://discord.gg/HGbCwWFkEk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black font-semibold px-5 py-3 rounded-xl hover:bg-gray-200 transition mt-4"
        >
          🚀 Join Komunitas Discord
        </a>
            </div>
          ) : (
            <>
              <h1 className="text-4xl font-bold text-center">
                Coaching 1-on-1 Gratis (1 Slot Saja)
              </h1>
              <p className="text-center text-gray-400">
                Gue bakal pilih 1 orang buat gue bimbing sampai pecah telur —
                dan perjalanannya akan gue dokumentasiin buat bukti program
                Lucrum Launch 💥
              </p>

              <div className="bg-zinc-800 border border-zinc-700 text-sm text-gray-300 rounded-xl p-4 mt-4">
                <p className="mb-1 font-semibold text-white">Syarat Minimal:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Akun FB aktif dengan minimal{" "}
                    <strong>100 teman</strong>
                  </li>
                  <li>
                    Akun sudah berumur lebih dari <strong>6 bulan</strong>
                  </li>
                  <li>
                    Berusia antara <strong>17–40 tahun</strong>
                  </li>
                  <li>
                    Punya <strong>Internet & Laptop</strong>
                  </li>
                </ul>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-zinc-900 p-6 rounded-xl border border-zinc-700"
              >
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama Lengkap"
                  className="w-full p-3 bg-zinc-800 rounded text-white outline-none"
                  value={form.nama}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="umur"
                  placeholder="Umur"
                  className="w-full p-3 bg-zinc-800 rounded text-white outline-none"
                  value={form.umur}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Alamat Email"
                  className="w-full p-3 bg-zinc-800 rounded text-white outline-none"
                  value={form.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="wa"
                  placeholder="Nomor WhatsApp"
                  className="w-full p-3 bg-zinc-800 rounded text-white outline-none"
                  value={form.wa}
                  onChange={handleChange}
                />
                <textarea
                  name="alasan"
                  rows={4}
                  placeholder="Kenapa kamu pengen ikut program ini?"
                  className="w-full p-3 bg-zinc-800 rounded text-white outline-none"
                  value={form.alasan}
                  onChange={handleChange}
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded font-semibold transition ${
                    loading
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-white text-black hover:opacity-90"
                  }`}
                >
                  {loading ? "Memproses..." : "Daftar Sekarang 🔥"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </FadeUpWhenVisible>
  );
}
