"use client";

import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import OfferBreakdown from "./components/OfferBreakdown";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import WhoIsThisFor from "./components/WhoIsThisFor";
import Navbar from "./components/Navbar";

export default function Home() {
  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT;
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
    // render midtrans snap token
  }, []);

  return (
    <>
      <main className="bg-black text-white">
				<Navbar/>
        <HeroSection />
				<WhoIsThisFor/>
        <OfferBreakdown />
        <Testimonials />
        <CallToAction />
        <FAQ />
      </main>
    </>
  );
}
