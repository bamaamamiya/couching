import Link from "next/link";
import Image from "next/image";
import { montserrat } from "../layout";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO + BRAND NAME */}
        <Link
          href="/"
          className="flex items-center space-x-3 select-none"
        >
          <Image
            src="/lucrum.png"
            alt="Lucrum Launch Logo"
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

        {/* CTA BUTTON */}
        <Link
          href="/apply"
          className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-black hover:text-white border border-white transition-colors"
        >
          Apply Now
        </Link>
      </div>
    </nav>
  );
}
