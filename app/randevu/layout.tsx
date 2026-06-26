import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Randevu Al",
  description:
    "Nil Estetik Çanakkale online randevu: saç çoğaltma, cilt bakımı ve lazer epilasyon için 3 adımda yerinizi ayırtın. Ücretsiz saç & cilt analizi.",
  alternates: { canonical: "/randevu" },
  openGraph: {
    title: "Online Randevu Al | Nil Estetik Çanakkale",
    description: "3 adımda hızlıca randevunuzu oluşturun. Ücretsiz analiz.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
