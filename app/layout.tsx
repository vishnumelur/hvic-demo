import type { Metadata } from "next";
import { Hanken_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hvic-demo.vercel.app"),
  title: {
    default: "Kerala HVIC Foundation — Powering Hydrogen Innovation",
    template: "%s | Kerala HVIC Foundation",
  },
  description:
    "Kerala HVIC Foundation, established under ANERT, is architecting a zero-carbon economy through precision engineering and world-scale green-hydrogen infrastructure.",
  keywords: [
    "Kerala HVIC",
    "Hydrogen Valley Innovation Cluster",
    "green hydrogen Kerala",
    "ANERT",
    "National Green Hydrogen Mission",
  ],
  openGraph: {
    title: "Kerala HVIC Foundation",
    description: "Powering Hydrogen Innovation — Kerala's gateway to clean energy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${hanken.variable} ${fraunces.variable} antialiased`}>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
