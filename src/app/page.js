import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import Results from "./components/Results";
import TrackRecord from "./components/TrackRecord";
import EmpowerSection from "./components/EmpowerSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Results
        sectionTitle="Real Results"
        mainTitle="Proven by data, not promises"
        description="We help small and growing businesses achieve measurable results with Facebook & Instagram ad strategies designed to increase sales."
        highlightTitle="Increased revenue by $2,400 in 30 days 🎯"
        highlightImage="/images/ads2.png"
        bottomlightTitle="Maintained a 4.69x ROAS in just one month"
        bottomlightImage="/images/ads3.png"
        subTitle="Consistent results every month—without burning ad spend"
        results={[
          { src: "/images/sep.png", alt: "Sales in September" },
          { src: "/images/oct.png", alt: "Sales in October" },
        ]}
      />

      <TrackRecord />
      <EmpowerSection />
    </main>
  );
}
