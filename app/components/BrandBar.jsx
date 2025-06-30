"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../libs/firebase"; // pastikan path sesuai
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const BrandBar = () => {
  const [username, setUsername] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  // Ambil user login
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const name = user.displayName || user.email?.split("@")[0];
        setUsername(name);
      } else {
        setUsername("");
      }
    });

    return () => unsubscribe();
  }, []);

  // Tutup menu kalau klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <header className="bg-black text-white py-3 border-b border-zinc-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo + Nama Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/lucrum.png"
            alt="Lucrum Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <div className="leading-tight font-semibold tracking-tight">
            <p className="text-base sm:text-lg">LUCRUM</p>
            <p className="-mt-2 text-base sm:text-lg">LAUNCH</p>
          </div>
        </Link>

        {/* Kanan: Username atau CTA */}
        {username ? (
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-sm sm:text-base text-gray-300 hover:text-white transition"
            >
              Hi, {username} ▼
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg w-40 z-50">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-zinc-800 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/free"
            className="inline-block bg-white text-black px-5 py-2 rounded-full font-medium text-sm sm:text-base hover:bg-gray-100 transition-all duration-200"
          >
            Ambil Coaching Gratis 🚀
          </Link>
        )}
      </div>
    </header>
  );
};

export default BrandBar;
