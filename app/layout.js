import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ujian PWEB",
  description: "Ujian PWEB",
};

export default function RootLayout({ children }) {
  const backgroundImageStyle = {
    backgroundImage: 'url("https://images3.alphacoders.com/133/1338664.png")', // Ubah sesuai path gambar di dalam folder 'public'
    backgroundSize: "cover",
    minHeight: "100vh",
  };

  return (
    <html lang="en">
      <body className={inter.className} style={backgroundImageStyle}>
        <div className="max-w-3xl p-4 mx-auto">
          <Navbar />
          <div className="mt-8">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
