import type { Metadata } from "next";
import { Hanken_Grotesk, Fraunces, Noto_Sans_Malayalam } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SiteChrome from "@/components/SiteChrome";
import { AuthProvider } from "@/lib/auth";
import { LanguageProvider } from "@/lib/i18n";

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

const malayalam = Noto_Sans_Malayalam({
  variable: "--font-malayalam",
  subsets: ["malayalam"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${hanken.variable} ${fraunces.variable} ${malayalam.variable} antialiased`}>
      <head>
        {/* Progressive enhancement: flag JS before paint so scroll-reveal
            content is hidden-then-animated only when JS runs. Without JS the
            site renders fully (never blank). Failsafe reveals all if the app
            fails to boot within 3s. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');window.__revealFailsafe=setTimeout(function(){document.documentElement.classList.add('reveal-all')},3000);",
          }}
        />
      </head>
      <body>
        <AuthProvider>
          <LanguageProvider>
            <SmoothScroll>
              <SiteChrome>{children}</SiteChrome>
            </SmoothScroll>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
