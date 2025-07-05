import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Footer from "./components/Footer";
import BrandBar from "./components/BrandBar";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const metadata = {
  title: "Lucrum Launch",
  description: "1-1 Program Dropship",
};

export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

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
        <BrandBar session={session} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
