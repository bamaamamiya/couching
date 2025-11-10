// components/Services.jsx
import { MessageCircle, Facebook, Instagram } from "lucide-react"

export default function Services() {
  return (
    <section className="bg-black text-white py-24 font-poppins">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white font-semibold mb-2 tracking-wide uppercase">
          Terhubung dengan pelanggan nyata
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Semua alat yang kamu butuhkan untuk mengembangkan brand-mu
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          Dari strategi hingga analitik, kami menyediakan semua yang dibutuhkan untuk meningkatkan engagement,
          mendorong konversi, dan memperluas jangkauan brand-mu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-900 p-4 rounded-xl mb-4">
              <Facebook size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-3">Facebook Ads</h3>
            <p className="text-gray-400 text-sm max-w-sm">
              Buat kampanye iklan tertarget di Facebook untuk menjangkau audiens yang tepat,
              meningkatkan interaksi, dan menghasilkan penjualan nyata.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-900 p-4 rounded-xl mb-4">
              <Instagram size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-3">Instagram Ads</h3>
            <p className="text-gray-400 text-sm max-w-sm">
              Gunakan kekuatan visual Instagram untuk membangun awareness,
              memperkuat citra brand, dan mendorong pembelian langsung dari feed atau story.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-900 p-4 rounded-xl mb-4">
              <MessageCircle size={28} />
            </div>
            <h3 className="text-lg font-semibold mb-3">WhatsApp Marketing</h3>
            <p className="text-gray-400 text-sm max-w-sm">
              Bangun koneksi langsung dengan pelanggan melalui WhatsApp.
              Kirim pesan personal, follow-up otomatis, dan tingkatkan conversion rate dengan komunikasi real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
