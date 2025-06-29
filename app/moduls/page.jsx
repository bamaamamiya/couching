import Link from "next/link";
import { moduls } from "@/app/libs/moduls";

export default function ModulList() {
  return (
    <div className="bg-black min-h-screen text-white px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            📚 Modul Edukasi Keuangan
          </h1>
          <p className="text-gray-400 text-lg">
            Belajar finansial dari dasar hingga bisa atur duit sendiri — tanpa teori ribet.
          </p>
        </div>

        <ul className="space-y-6">
          {moduls.map((m) => (
            <li
              key={m.id}
              className="border border-white/10 bg-zinc-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-2xl font-bold mb-2">{m.title}</h2>
              <p className="text-gray-400 mb-4">{m.description}</p>
              <Link
                href={`/moduls/${m.id}`}
                className="inline-block px-5 py-2 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
              >
                Mulai Belajar →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
