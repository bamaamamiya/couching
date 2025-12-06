import "./globals.css";
import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"], // lebih tebal buat logo
});

export const metadata = {
  title: "Lucratus Launch",
  description: "Facebook & Instagram Ads Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/lucrum.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/lucrum-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Program coaching dropship 1-on-1, bantu kamu pecah telur dalam 7 hari lewat Meta Ads. Termasuk SOP riset produk, winning ads, retargeting, dan pendampingan langsung. Mulai dari Rp400.000 saja."
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

export { montserrat };
