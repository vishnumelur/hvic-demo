import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hvic-demo.vercel.app"),
  title: {
    default: "Kerala HVIC Foundation — Hydrogen Valley Innovation Cluster",
    template: "%s | Kerala HVIC Foundation",
  },
  description:
    "Kerala HVIC Foundation, established under ANERT, is building India's first complete green-hydrogen value chain — powering Kerala's clean-energy future.",
  keywords: [
    "Kerala HVIC",
    "Hydrogen Valley Innovation Cluster",
    "green hydrogen Kerala",
    "ANERT",
    "National Green Hydrogen Mission",
  ],
  openGraph: {
    title: "Kerala HVIC Foundation",
    description: "Powering Kerala's Hydrogen Future.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
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
