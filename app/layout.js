import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google"; // ganti dari Inter ke Poppins
import Footer from "./components/Footer";
import { Julius_Sans_One } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import BrandBar from "./components/BrandBar";
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"], // sesuaikan dengan kebutuhan
// });
const julius = Julius_Sans_One({
  weight: "400", // hanya 400 tersedia
  subsets: ["latin"],
});

export const metadata = {
  title: "Lucrum Launch",
  description: "1-1 Program Dropship",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/lucrum.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/lucrum-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <title>Lucrum Launch - Coaching Dropship Pecah Telur 7 Hari</title>
        <meta
          name="description"
          content="Program coaching dropship 1-on-1, bantu kamu pecah telur dalam 7 hari lewat Meta Ads. Termasuk SOP riset produk, winning ads, retargeting, dan pendampingan langsung. Mulai dari Rp400.000 saja."
        />
      </head>
      <body className={inter.className}>
				<BrandBar/>
        {children}

        <Footer />
      </body>
    </html>
  );
}
