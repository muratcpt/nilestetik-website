import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetlerimiz — Saç Çoğaltma, Cilt Bakımı, Lazer",
  description:
    "Nil Estetik Çanakkale hizmetleri: saç çoğaltma, saç kıran tedavisi, saç mezoterapisi, cilt bakımı, AquaGlow, lazer epilasyon ve daha fazlası. Ücretsiz analiz.",
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    title: "Hizmetlerimiz | Nil Estetik Çanakkale",
    description: "Saç ve cilt için kişiye özel uygulamalar. Ücretsiz analiz.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
