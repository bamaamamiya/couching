import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google"; // ganti dari Inter ke Poppins
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"], // sesuaikan dengan kebutuhan
// });

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
      </head>
      <body className={inter.className}>{children}

			<Footer/>
			</body>
    </html>
  );
}
