// components/TrustedBy.jsx
export default function TrustedBy() {
  return (
    <section className="bg-black text-white py-16 font-montserrat tracking-wide">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-semibold text-lg mb-10">
          Lihat bagaimana brand lokal sukses bersama kami.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-8">
          <span className="text-xl font-semibold opacity-80 hover:opacity-100 transition">Kopi Nusa</span>
          <span className="text-2xl font-bold opacity-80 hover:opacity-100 transition">Santai Goods</span>
          <span className="text-lg font-medium opacity-80 hover:opacity-100 transition">Raw Denim ID</span>
          <span className="text-xl font-semibold opacity-80 hover:opacity-100 transition">PesenAja</span>
          <span className="text-2xl font-bold opacity-80 hover:opacity-100 transition">Hyang Labs</span>
          <span className="text-lg font-medium opacity-80 hover:opacity-100 transition">Batik Urban</span>
          <span className="text-xl font-semibold opacity-80 hover:opacity-100 transition">Rasa Nusantara</span>
          <span className="text-2xl font-bold opacity-80 hover:opacity-100 transition">Seduh Studio</span>
        </div>
        <p className="text-sm text-gray-400">... dan masih banyak lagi</p>
      </div>
    </section>
  )
}
