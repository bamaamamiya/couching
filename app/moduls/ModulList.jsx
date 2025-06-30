import Link from "next/link";
import { moduls } from "../libs/moduls";

export default function ModulList() {
  return (
    <div className="bg-black min-h-screen text-white px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            📚 Modul Edukasi Dropship
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Belajar strategi dropship dari nol — tanpa teori ribet. Langsung
            praktik, langsung paham.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {moduls.map((m) => (
            <div
              key={m.id}
              className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.2)] transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-10 transition pointer-events-none" />

              {/* Judul */}
              <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                <span>{m.icon}</span> {m.title}
              </h2>

              {/* Deskripsi */}
              <p className="text-gray-400 text-sm mb-6">{m.description}</p>

              {/* Tombol CTA */}
              <Link
                href={`/moduls/${m.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl text-sm font-semibold hover:bg-gray-200 transition"
              >
                Mulai Belajar
                <span className="text-lg">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
