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
          About <span className="text-gray-400">Lucrum Launch</span>
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
          Lucrum Launch exists to help local brands grow in the digital era with
          <strong> data-driven and result-focused strategies</strong>. We
          specialize in <strong>Facebook & Instagram Ads</strong> to reach the
          right audience, and <strong>WhatsApp Marketing</strong> to boost
          engagement, conversions, and long-term customer retention.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
          By combining <strong>creativity, data analysis, and automation</strong>,
          Lucrum Launch helps your brand scale efficiently without wasting ad
          spend. We're committed to being a <strong>trusted growth partner</strong>
          on your journey toward long-term success.
        </p>

        <Link
          href="/apply"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:text-white border border-white transition-all"
        >
          Apply Now
        </Link>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-white text-sm md:text-base">
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl">$500K+</span>
            <span>Revenue generated for clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl">2,000+</span>
            <span>Ad campaigns managed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl">100+</span>
            <span>Global brands partnered with us</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-xl">5x+</span>
            <span>Average ROAS across campaigns</span>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <Services />

      {/* GET STARTED CTA */}
      <section className="relative z-10 max-w-3xl mx-auto text-center py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-gray-300 mb-6">
          What’s next? Unlock your brand’s full potential and apply to work with us today.
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
