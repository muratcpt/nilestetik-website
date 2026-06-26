"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Check } from "lucide-react";
import { SERVICES, SALON } from "@/lib/data";

const FILTERS = [
  { key: "all", label: "Tümü" },
  { key: "sac", label: "Saç" },
  { key: "cilt", label: "Cilt" },
  { key: "lazer", label: "Lazer" },
  { key: "erkek", label: "Erkek" },
];

function Card({ s, i }: { s: (typeof SERVICES)[number]; i: number }) {
  const [hover, setHover] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="card"
      style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
    >
      <div style={{ position: "relative", height: 200, overflow: "hidden", background: "linear-gradient(135deg,var(--accent),var(--bg-alt))" }}>
        {!failed ? (
          <motion.div animate={{ scale: hover ? 1.07 : 1 }} transition={{ duration: 0.5 }} style={{ position: "absolute", inset: 0 }}>
            <Image src={s.image} alt={s.name} fill sizes="(max-width:767px) 100vw, 33vw" style={{ objectFit: "cover" }} onError={() => setFailed(true)} />
          </motion.div>
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52 }}>{s.icon}</div>
        )}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(41,33,30,.45), transparent 55%)" }} />
        {(s.popular || s.new) && (
          <span style={{ position: "absolute", top: 12, right: 12, fontSize: 11, fontWeight: 800, color: "#fff", background: s.new ? "var(--gold)" : "var(--primary-dark)", padding: "5px 11px", borderRadius: 100 }}>
            {s.new ? "Yeni" : "Popüler"}
          </span>
        )}
        <span style={{ position: "absolute", left: 12, bottom: 12, width: 44, height: 44, borderRadius: 13, background: "rgba(255,255,255,.92)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>{s.icon}</span>
      </div>
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 className="h-display" style={{ fontSize: 21, color: "var(--text)", marginBottom: 8 }}>{s.name}</h3>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65, flex: 1 }}>{s.desc}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--border)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12.5, color: "var(--text-light)", fontWeight: 600 }}>
            <Clock size={14} /> {s.duration}
          </span>
          <Link href="/randevu" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 13.5, fontWeight: 700, color: hover ? "var(--primary-dark)" : "var(--primary)", textDecoration: "none" }}>
            Randevu Al <ArrowRight size={15} style={{ transform: hover ? "translateX(3px)" : "none", transition: "transform .2s" }} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function HizmetlerPage() {
  const [filter, setFilter] = useState("all");
  const list = filter === "all" ? SERVICES : SERVICES.filter((s) => s.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, var(--bg-alt), var(--bg))", padding: "138px 32px 56px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Hizmetlerimiz</span>
          <h1 className="h-display" style={{ fontSize: "clamp(34px,5vw,58px)", color: "var(--text)", margin: "16px 0 14px" }}>
            Saç ve cildiniz için <em className="gold-text" style={{ fontStyle: "italic" }}>tüm çözümler</em>
          </h1>
          <p style={{ fontSize: 16.5, color: "var(--text-muted)", lineHeight: 1.7 }}>
            Saç çoğaltmadan lazer epilasyona, kişiye özel protokollerle uyguladığımız
            tüm hizmetlerimiz. Tedaviden önce saç & cilt analiziniz ücretsiz.
          </p>
        </div>
      </section>

      {/* Filtre + grid */}
      <section className="section-pad" style={{ background: "var(--bg)", padding: "8px 32px 90px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 40 }}>
            {FILTERS.map((f) => (
              <button key={f.key} onClick={() => setFilter(f.key)} className={`btn-pill${filter === f.key ? " active" : ""}`}>
                {filter === f.key && <Check size={14} />} {f.label}
              </button>
            ))}
          </div>
          <motion.div layout className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 26 }}>
            {list.map((s, i) => (
              <Card key={s.id} s={s} i={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ padding: "0 32px 90px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", borderRadius: 26, background: "var(--text)", padding: "48px 40px", textAlign: "center" }}>
          <h2 className="h-display" style={{ fontSize: "clamp(24px,3.4vw,38px)", color: "#fff", marginBottom: 12 }}>
            Size en uygun uygulamayı birlikte belirleyelim
          </h2>
          <p style={{ fontSize: 15.5, color: "rgba(255,255,255,.72)", maxWidth: 540, margin: "0 auto 26px", lineHeight: 1.6 }}>
            Ücretsiz saç & cilt analizi ile başlayın; hiçbir belirsizlik olmadan net bir yol haritası çıkaralım.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/randevu" className="btn-primary">✦ Randevu Al</Link>
            <a href={`tel:${SALON.phoneRaw}`} className="btn-ghost-light">{SALON.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
