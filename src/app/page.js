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
        sectionTitle="Hasil Nyata"
        mainTitle="Buktikan dengan data, bukan janji"
        description="Kami bantu UMKM lokal mencapai hasil nyata lewat strategi iklan Facebook & Instagram yang terbukti meningkatkan penjualan."
        highlightTitle="Naik omzet Rp38 juta dalam 30 hari 🎯"
        highlightImage="/images/ads2.png"
        bottomlightTitle="Mempertahankan ROAS sebesar 4,69x hanya dalam satu bulan"
        bottomlightImage="/images/ads3.png"
        subTitle="Konsisten tiap bulan, tanpa bakar uang iklan"
        results={[
          { src: "/images/sep.png", alt: "Penjualan bulan September" },
          { src: "/images/oct.png", alt: "Penjualan bulan Oktober" },
        ]}
      />
			<TrackRecord/>
			<EmpowerSection/>
    </main>
  );
}
