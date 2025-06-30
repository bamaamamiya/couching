"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../libs/firebase"; // adjust path jika perlu
import { useAuth } from "../libs/useAuth"; // custom hook

const LoginPage = () => {
  const auth = getAuth(app);
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.push("/moduls"); // udah login, langsung ke moduls
    }
  }, [user, loading, router]);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/moduls");
    } catch (err) {
      console.error("Login error:", err);
      alert("Gagal login. Coba lagi.");
    }
  };

  if (loading) return null;

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-8 max-w-md w-full">
        <h1 className="text-4xl font-bold">Masuk ke Lucrum Launch</h1>
        <p className="text-gray-400">
          Akses semua modul edukasi keuangan eksklusif 📚
        </p>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Masuk dengan Google
        </button>
      </div>
    </section>
  );
};

export default LoginPage;
