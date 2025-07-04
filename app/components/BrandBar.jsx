"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { auth } from "../libs/firebase";
import { signOut as firebaseSignOut } from "firebase/auth";
import { supabase } from "../libs/supabase-browser"; // pakai createBrowserSupabaseClient()

const BrandBar = () => {
  const [userInfo, setUserInfo] = useState({ name: "", provider: "" });
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  // Cek login dari Firebase atau Supabase
  useEffect(() => {
    const checkAuth = async () => {
      // 1. Cek Firebase dulu
      const unsub = auth.onAuthStateChanged((user) => {
        if (user) {
          const name = user.displayName || user.email?.split("@")[0];
          setUserInfo({ name, provider: "firebase" });
        }
      });

      // 2. Cek Supabase
      const { data } = await supabase.auth.getSession();
      const user = data.session?.user;
      if (user && !userInfo.name) {
        const name = user.email?.split("@")[0];
        setUserInfo({ name, provider: "supabase" });
      }

      return () => unsub();
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    if (userInfo.provider === "firebase") {
      await firebaseSignOut(auth);
    } else if (userInfo.provider === "supabase") {
      await supabase.auth.signOut();
    }

    setUserInfo({ name: "", provider: "" });
    router.push("/");
  };

  // Click luar tutup menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-black text-white py-3 border-b border-zinc-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Kiri: Logo */}
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
        {userInfo.name ? (
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-sm sm:text-base text-gray-300 hover:text-white transition"
            >
              Hi, {userInfo.name} ▼
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg w-40 z-50">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-zinc-800 transition hover:rounded-xl"
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
            Coaching Gratis
          </Link>
        )}
      </div>
    </header>
  );
};

export default BrandBar;
