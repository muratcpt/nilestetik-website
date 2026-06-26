"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { SERVICES } from "@/lib/data";

const CAT_LABEL: Record<string, string> = { sac: "Saç", cilt: "Cilt", lazer: "Lazer", erkek: "Erkek" };

function ServiceCard({ s, i }: { s: (typeof SERVICES)[number]; i: number }) {
  const [hover, setHover] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="card"
      style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
    >
      <div style={{ position: "relative", height: 210, overflow: "hidden", background: "linear-gradient(135deg,var(--accent),var(--bg-alt))" }}>
        {!failed ? (
          <motion.div animate={{ scale: hover ? 1.07 : 1 }} transition={{ duration: 0.5 }} style={{ position: "absolute", inset: 0 }}>
            <Image src={s.image} alt={s.name} fill sizes="(max-width:767px) 100vw, 33vw" style={{ objectFit: "cover" }} onError={() => setFailed(true)} />
          </motion.div>
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56 }}>{s.icon}</div>
        )}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(41,33,30,.5), transparent 55%)" }} />
        {/* kategori + rozet */}
        <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 7 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#fff", background: "rgba(41,33,30,.55)", backdropFilter: "blur(6px)", padding: "5px 11px", borderRadius: 100, letterSpacing: ".04em" }}>
            {CAT_LABEL[s.category]}
          </span>
        </div>
        {(s.popular || s.new) && (
          <span style={{ position: "absolute", top: 12, right: 12, fontSize: 11, fontWeight: 800, color: "#fff", background: s.new ? "var(--gold)" : "var(--primary-dark)", padding: "5px 11px", borderRadius: 100 }}>
            {s.new ? "Yeni" : "Popüler"}
          </span>
        )}
        <span style={{ position: "absolute", left: 12, bottom: 12, width: 44, height: 44, borderRadius: 13, background: "rgba(255,255,255,.92)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, boxShadow: "0 6px 16px rgba(0,0,0,.18)" }}>
          {s.icon}
        </span>
      </div>
      <div style={{ padding: "20px 20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 className="h-display" style={{ fontSize: 21, color: "var(--text)", marginBottom: 7 }}>{s.name}</h3>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>{s.shortDesc}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--border)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, color: "var(--text-light)", fontWeight: 600 }}>
            <Clock size={14} /> {s.duration}
          </span>
          <Link
            href="/randevu"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontSize: 13.5,
              fontWeight: 700,
              color: hover ? "var(--primary-dark)" : "var(--primary)",
              textDecoration: "none",
            }}
          >
            Randevu Al <ArrowRight size={15} style={{ transform: hover ? "translateX(3px)" : "none", transition: "transform .2s" }} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  const featured = SERVICES.filter((s) => s.popular || s.new).slice(0, 6);
  return (
    <section className="section-pad" style={{ background: "var(--bg)", padding: "92px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
          <span className="eyebrow">Hizmetlerimiz</span>
          <h2 className="h-display" style={{ fontSize: "clamp(28px,4vw,46px)", color: "var(--text)", margin: "16px 0 14px" }}>
            Saç ve cildiniz için <em className="gold-text" style={{ fontStyle: "italic" }}>özenli</em> çözümler
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7 }}>
            Saç çoğaltmadan cilt bakımına, lazer epilasyondan saç kıran tedavisine kadar
            kişiye özel protokollerle hizmet veriyoruz.
          </p>
        </div>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 26 }}>
          {featured.map((s, i) => (
            <ServiceCard key={s.id} s={s} i={i} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 44 }}>
          <Link href="/hizmetler" className="btn-outline">
            Tüm Hizmetleri Gör <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
