"use client";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import { SALON, SERVICES } from "@/lib/data";

function IgGlyph({ size = 17 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const year = 2026;
  return (
    <footer style={{ background: "var(--text)", color: "rgba(255,255,255,.82)", paddingTop: 72 }}>
      <div className="section-pad" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
        <div
          className="footer-grid"
          style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.3fr", gap: 44, paddingBottom: 52 }}
        >
          {/* Marka */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span style={{ width: 48, height: 48, borderRadius: "50%", overflow: "hidden", border: "2px solid var(--gold)", flexShrink: 0 }}>
                <Image src="/images/logo.jpg" alt="Nil Estetik logo" width={48} height={48} style={{ objectFit: "cover" }} />
              </span>
              <div style={{ lineHeight: 1.1 }}>
                <div className="h-display" style={{ fontSize: 22, color: "#fff" }}>{SALON.name}</div>
                <div style={{ fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--gold)" }}>
                  {SALON.tagline}
                </div>
              </div>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "rgba(255,255,255,.68)", maxWidth: 320 }}>
              Çanakkale Merkez'de saç çoğaltma, cilt bakımı ve lazer epilasyonda kişiye özel,
              hijyenik ve güven veren bir bakım deneyimi.
            </p>
            <a
              href={SALON.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                marginTop: 18,
                padding: "10px 16px",
                borderRadius: 12,
                background: "linear-gradient(135deg, rgba(192,135,107,.25), rgba(201,163,91,.18))",
                border: "1px solid rgba(255,255,255,.14)",
                color: "#fff",
                fontSize: 13.5,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <IgGlyph size={17} /> {SALON.instagramHandle}
            </a>
          </div>

          {/* Sayfalar */}
          <div>
            <h4 className="h-display" style={{ fontSize: 17, color: "#fff", marginBottom: 16 }}>Sayfalar</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/hizmetler", label: "Hizmetler" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/galeri", label: "Galeri" },
                { href: "/iletisim", label: "İletişim" },
                { href: "/randevu", label: "Randevu Al" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link" style={{ fontSize: 14, color: "rgba(255,255,255,.72)", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="h-display" style={{ fontSize: 17, color: "#fff", marginBottom: 16 }}>Hizmetler</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link href="/hizmetler" className="footer-link" style={{ fontSize: 14, color: "rgba(255,255,255,.72)", textDecoration: "none" }}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="h-display" style={{ fontSize: 17, color: "#fff", marginBottom: 16 }}>İletişim</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              <li style={{ display: "flex", gap: 11, fontSize: 14, color: "rgba(255,255,255,.72)", lineHeight: 1.55 }}>
                <MapPin size={18} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                <span>{SALON.address}</span>
              </li>
              <li style={{ display: "flex", gap: 11, fontSize: 14, color: "rgba(255,255,255,.72)" }}>
                <Phone size={18} style={{ color: "var(--gold)", flexShrink: 0 }} />
                <a href={`tel:${SALON.phoneRaw}`} style={{ color: "rgba(255,255,255,.9)", textDecoration: "none", fontWeight: 600 }}>
                  {SALON.phone}
                </a>
              </li>
              <li style={{ display: "flex", gap: 11, fontSize: 14, color: "rgba(255,255,255,.72)", lineHeight: 1.55 }}>
                <Clock size={18} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                <span>
                  Hafta içi & Cmt: {SALON.hours.weekdays}
                  <br />
                  Pazar: {SALON.hours.sunday}
                </span>
              </li>
            </ul>
            <Link href="/randevu" className="btn-primary" style={{ marginTop: 18 }}>
              ✦ Randevu Al
            </Link>
          </div>
        </div>

        {/* Alt bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.12)",
            padding: "22px 0 28px",
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 13,
            color: "rgba(255,255,255,.55)",
          }}
        >
          <span>© {year} {SALON.fullName} · Tüm hakları saklıdır.</span>
          <span>
            Çanakkale Merkez ·{" "}
            <a href={`tel:${SALON.phoneRaw}`} style={{ color: "var(--gold)", textDecoration: "none", fontWeight: 600 }}>
              {SALON.phone}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
