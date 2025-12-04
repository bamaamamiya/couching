import Link from "next/link";

// components/Results.jsx
export default function Results({
  sectionTitle = "Semua yang bisnis Anda butuhkan",
  mainTitle = "Pertumbuhan nyata dan konsisten",
  description = "Bantu bisnis lokal berkembang dengan strategi pemasaran digital yang terbukti meningkatkan penjualan, engagement, dan brand awareness.",
  highlightTitle = "Tambah omzet Rp89 juta? Itu keahlian kami.",
  highlightImage = "/results/result1.png",
  bottomlightTitle = "Maintaining a 12.5x ROAS in the span of a month…",
  bottomlightImage = "/results/result1.png",
  subTitle = "Konsisten hasil tiap bulan 🚀",
  results = [
    { src: "/results/result2.png", alt: "Hasil penjualan bulan Juni" },
    { src: "/results/result3.png", alt: "Hasil penjualan bulan Mei" },
  ],
}) {
  return (
    <section className="bg-black text-white py-24 font-poppins">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <p className="text-white font-semibold mb-2 tracking-wide uppercase">
          {sectionTitle}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{mainTitle}</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          {description}
        </p>

        {/* Gambar hasil utama */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">{highlightTitle}</h3>
          <div className="flex justify-center">
            <img
              src={highlightImage}
              alt="Hasil kampanye utama"
              className="rounded-2xl shadow-lg border border-gray-800 w-full max-w-4xl object-contain"
            />
          </div>
        </div>

        {/* Gambar hasil tambahan */}
        <div>
          <h3 className="text-2xl font-semibold mb-10">{subTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <div key={index} className=" rounded-2xl  border shadow-lg">
                <img
                  src={result.src}
                  alt={result.alt}
                  className="rounded-lg w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gambar hasil utama */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">{bottomlightTitle}</h3>
          <div className="flex justify-center">
            <img
              src={bottomlightImage}
              alt="Hasil kampanye utama"
              className="rounded-2xl shadow-lg border w-full max-w-4xl object-contain"
            />
          </div>
        </div>
        <div className="mt-16">
          <h1 className="text-2xl font-semibold mb-6">Ready to get started?</h1>
          <Link
            href="/apply"
            className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:text-white border border-white transition-all"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
