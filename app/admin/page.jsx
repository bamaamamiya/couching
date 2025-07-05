"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../libs/supabase-browser";

export default function AdminLoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        router.replace("/select");
      }
    };
    checkSession();
  }, [router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = form;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login gagal: " + error.message);
    } else if (data?.session) {
      console.log("Login berhasil ✅", data.session);
      console.log("Redirecting ke /select");
      router.replace("/select");
      console.log("router.push selesai");
    } else {
      alert("Login tidak berhasil. Cek kembali email & password.");
      console.warn("No session returned:", data);
    }

    setLoading(false);
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl max-w-md w-full space-y-6 border border-zinc-700"
      >
        <h1 className="text-3xl font-bold text-center">Login Admin</h1>

        <input
          type="email"
          name="email"
          placeholder="Email admin"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded font-semibold transition ${
            loading
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {loading ? "Memproses..." : "Masuk ke Dashboard"}
        </button>
      </form>
    </section>
  );
}
