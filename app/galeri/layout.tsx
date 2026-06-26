import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri — Uygulamalarımız ve Merkezimiz",
  description:
    "Nil Estetik Çanakkale galerisi: saç çoğaltma sonuçları, cilt bakımı, lazer epilasyon ve merkezimizden kareler.",
  alternates: { canonical: "/galeri" },
  openGraph: {
    title: "Galeri | Nil Estetik Çanakkale",
    description: "Uygulamalarımızdan ve merkezimizden kareler.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
