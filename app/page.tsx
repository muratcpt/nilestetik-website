import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import FeatureHair from "@/components/home/FeatureHair";
import AboutPreview from "@/components/home/AboutPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import ContactMap from "@/components/home/ContactMap";
import { SALON, SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nil Estetik | Çanakkale Saç Çoğaltma, Cilt Bakımı & Lazer",
  description:
    "Çanakkale Merkez Nil Estetik: saç çoğaltma, saç kıran tedavisi, cilt bakımı ve lazer epilasyon. Ücretsiz saç & cilt analizi. ⭐ 5.0 Google. Randevu: 0551 531 00 17.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: SALON.fullName,
  image: "/images/og-cover.jpg",
  url: "https://nilestetik.vercel.app",
  description:
    "Çanakkale Merkez'de saç çoğaltma, saç kıran tedavisi, cilt bakımı ve lazer epilasyon hizmeti veren güzellik merkezi.",
  telephone: SALON.phoneRaw,
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kemal Paşa Mah., Kemalyeri Sok. No:61, Perçin Apt. Kat 2 D:2",
    addressLocality: "Çanakkale Merkez",
    addressRegion: "Çanakkale",
    postalCode: "17000",
    addressCountry: "TR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(SALON.reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Güzellik & Saç Hizmetleri",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
  },
  sameAs: [SALON.instagram],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <FeatureHair />
      <AboutPreview />
      <GalleryPreview />
      <Testimonials />
      <AppointmentCTA />
      <ContactMap />
    </>
  );
}
