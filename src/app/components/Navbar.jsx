"use client"; // HARUS di baris pertama, tanpa spasi, tanpa komentar di atasnya

import Link from "next/link";
import Image from "next/image";
import { montserrat } from "../fonts";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ikon hamburger & close

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO + BRAND NAME */}
        <Link href="/" className="flex items-center space-x-3 select-none">
          <Image
            src="/lucrum.png"
            alt="lucratus Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span
            className={`${montserrat.className} text-2xl font-bold text-white tracking-tight`}
          >
            Lucrum <span className="text-gray-400">Launch</span>
          </span>
        </Link>

        {/* CTA BUTTON (desktop only) */}
        <div className="hidden md:block">
          <Link
            href="/apply"
            className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-black hover:text-white border border-white transition-colors"
          >
            Apply Now
          </Link>
        </div>

        {/* HAMBURGER ICON (mobile only) */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="px-6 py-4 flex flex-col space-y-3">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-gray-300 font-medium"
            >
              Home
            </Link>
            <Link
              href="/apply"
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-gray-300 font-medium"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
