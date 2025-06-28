"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-sm">
        <div className="text-center sm:text-left">
          <p className="font-semibold tracking-wide">© {new Date().getFullYear()} Lucrum Launch</p>
          <p className="text-zinc-400">All rights reserved. Built by Bama.</p>
        </div>

        <div className="flex gap-6">
          <Link href="#pricing" className="hover:underline">
            Pricing
          </Link>
          <Link href="#faq" className="hover:underline">
            FAQ
          </Link>
          <Link href="https://wa.me/6281234567890" target="_blank" className="hover:underline">
            Kontak
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
