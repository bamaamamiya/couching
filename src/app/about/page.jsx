// pages/about.jsx
import Image from "next/image";
import Link from "next/link";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutBamadiaPage() {
  return (
    <main className="relative bg-black text-white font-poppins">
      {/* NAVBAR */}
      <Navbar/>

      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.05,
        }}
      ></div>

      {/* ABOUT SECTION */}
      <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center max-w-7xl mx-auto px-6 pt-32 space-y-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Tentang <span className="text-gray-400">Lucrum Launch</span>
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
          Lucrum Launch hadir untuk membantu brand lokal tumbuh di era digital dengan strategi marketing yang <strong>terukur dan fokus pada hasil nyata</strong>. Kami mengkhususkan diri dalam <strong>Facebook & Instagram Ads</strong> untuk menjangkau audiens yang tepat, serta <strong>WhatsApp Marketing</strong> untuk meningkatkan engagement, konversi, dan retensi pelanggan.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
          Dengan menggabungkan <strong>kreativitas, analisis data, dan otomatisasi</strong>, Lucrum Launch membantu brand Anda berkembang secara efisien tanpa membuang-buang biaya iklan. Kami berkomitmen menjadi <strong>partner terpercaya</strong> dalam perjalanan brand Anda menuju pertumbuhan dan kesuksesan.
        </p>

        <Link
          href="/apply"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:text-white border border-white transition-all"
        >
          Daftar Sekarang
        </Link>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-white text-sm md:text-base">
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl">Rp 5M+</span>
            <span>Pendapatan klien</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl">500+</span>
            <span>Kampanye Meta Ads</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl">200+</span>
            <span>Kampanye WhatsApp Marketing</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl">4x+</span>
            <span>ROAS rata-rata</span>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <Services />

      {/* GET STARTED CTA */}
      <section className="relative z-10 max-w-3xl mx-auto text-center py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap untuk memulai?</h2>
        <p className="text-gray-300 mb-6">
          Apa langkah selanjutnya? Maksimalkan potensi brand Anda dan daftarkan diri untuk bekerja sama dengan kami sekarang!
        </p>
        <Link
          href="/apply"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:text-white border border-white transition-all"
        >
          Apply Now
        </Link>
      </section>

      {/* FOOTER */}
      <Footer/>
    </main>
  );
}
