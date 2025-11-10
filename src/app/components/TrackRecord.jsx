// components/TrackRecord.jsx
export default function TrackRecord() {
  return (
    <section className="bg-black text-white py-24 font-poppins border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <p className="text-white font-semibold mb-2 tracking-wide uppercase">
          Rekam Jejak Kami
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Dipercaya oleh ratusan brand & UMKM di seluruh Indonesia
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          Kami telah membantu berbagai bisnis lokal mencapai target mereka —
          menghasilkan omzet miliaran rupiah melalui strategi digital yang terukur
          dan efisien.
        </p>

        {/* Statistik utama */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Rp7,5JT+</h3>
            <p className="text-gray-400 text-sm mt-2">Omzet yang dihasilkan untuk klien</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">2.000+</h3>
            <p className="text-gray-400 text-sm mt-2">Kampanye iklan dikelola</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">100+</h3>
            <p className="text-gray-400 text-sm mt-2">Brand & UMKM bermitra</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">5x+</h3>
            <p className="text-gray-400 text-sm mt-2">Rata-rata ROAS untuk kampanye klien</p>
          </div>
        </div>

      </div>
    </section>
  )
}
