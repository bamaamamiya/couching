import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Footer from "./Footer";

export default function EmpowerSection() {
  return (
    <>
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
        {/* BACKGROUND GRID + BLOOM */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.05,
          }}
        ></div>

        {/* BLOOM GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-blue-800 to-sky-600 opacity-40 mix-blend-soft-light blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl space-y-6 text-white">
          <h2 className="text-4xl md:text-5xl font-bold">
            Helping Brands Grow Faster
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Maximize your brand’s potential with data-driven marketing
            strategies. From analysis to Facebook & Instagram ad optimization,
            we focus on improving conversions and driving long-term, sustainable
            growth.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="/apply"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:text-white border border-white transition-all"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="text-white underline hover:text-gray-300 transition-all"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
