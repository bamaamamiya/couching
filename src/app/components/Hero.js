import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-32 overflow-hidden">
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

      {/* TEXT SIDE */}
      <div className="md:w-1/2 space-y-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Bantu brand lokal tumbuh lebih cepat dengan{" "}
          <span className="text-gray-400">strategi marketing berbasis data</span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
          Kami membantu bisnis lokal tumbuh melalui strategi iklan Facebook dan Instagram
          yang terukur, berfokus pada hasil nyata dan pertumbuhan berkelanjutan.
        </p>

        <Link
          href="/apply"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:text-white border border-white transition-all"
        >
          Apply Now
        </Link>
      </div>

      {/* IMAGE SIDE */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative z-10">
        <Image
          src="/images/ads.png"
          alt="Tampilan hasil iklan Facebook Ads"
          width={600}
          height={400}
          className="rounded-lg shadow-lg border border-gray-800"
        />
      </div>
    </section>
  );
}
