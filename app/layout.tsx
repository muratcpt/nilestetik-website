import type { Metadata } from "next";
import { Fraunces, Manrope, Pinyon_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorFollower from "@/components/ui/CursorFollower";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
const pinyon = Pinyon_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const BASE_URL = "https://nil-estetik.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Nil Estetik | Çanakkale Saç Çoğaltma & Güzellik Merkezi",
    template: "%s | Nil Estetik Çanakkale",
  },
  description:
    "Çanakkale Merkez'de Nil Estetik: saç çoğaltma, saç kıran tedavisi, cilt bakımı ve lazer epilasyon. Ücretsiz saç & cilt analizi. Randevu: 0551 531 00 17.",
  keywords: [
    "saç çoğaltma Çanakkale",
    "Çanakkale güzellik salonu",
    "saç kıran tedavisi Çanakkale",
    "cilt bakımı Çanakkale",
    "lazer epilasyon Çanakkale",
    "Nil Estetik",
    "saç mezoterapisi",
    "ücretsiz saç analizi",
  ],
  authors: [{ name: "Nil Estetik" }],
  creator: "Nil Estetik",
  publisher: "Nil Estetik",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Nil Estetik",
    title: "Nil Estetik | Çanakkale Saç Çoğaltma & Güzellik Merkezi",
    description:
      "Saç çoğaltma, cilt bakımı ve lazer epilasyonda Çanakkale'nin tercih edilen merkezi. Ücretsiz analiz ve kişiye özel protokoller.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "Nil Estetik Çanakkale" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nil Estetik | Çanakkale Saç Çoğaltma & Güzellik Merkezi",
    description: "Saç çoğaltma, cilt bakımı ve lazer epilasyonda Çanakkale. Ücretsiz analiz.",
    images: ["/images/og-cover.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${manrope.variable} ${pinyon.variable}`}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "var(--font-body)" }}>
        <ScrollProgress />
        <CursorFollower />
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
