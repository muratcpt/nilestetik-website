import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim — Çanakkale Merkez",
  description:
    "Nil Estetik Çanakkale iletişim: Kemal Paşa Mah., Kemalyeri Sok. No:61, Çanakkale Merkez. Telefon 0551 531 00 17, WhatsApp ve harita.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: "İletişim | Nil Estetik Çanakkale",
    description: "Adres, telefon, WhatsApp ve harita. Çanakkale Merkez.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
