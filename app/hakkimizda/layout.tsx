import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda — Çanakkale'nin Saç Çoğaltma Merkezi",
  description:
    "Nil Estetik: Çanakkale Merkez'de saç çoğaltma, cilt bakımı ve lazer epilasyonda kişiye özel, hijyenik ve güven veren bir güzellik merkezi. Değerlerimiz ve sıkça sorulanlar.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: "Hakkımızda | Nil Estetik Çanakkale",
    description: "Kişiye özel protokoller, hijyen ve güven. Çanakkale'de ilk ve tek saç çoğaltma.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
