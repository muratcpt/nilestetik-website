"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { GALLERY, SALON } from "@/lib/data";

function IgGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GalleryCell({ item, big, i }: { item: (typeof GALLERY)[number]; big: boolean; i: number }) {
  const [hover, setHover] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        gridRow: big ? "span 2" : "span 1",
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        background: "linear-gradient(135deg,var(--accent),var(--secondary))",
      }}
    >
      {!failed ? (
        <motion.div animate={{ scale: hover ? 1.08 : 1 }} transition={{ duration: 0.5 }} style={{ position: "absolute", inset: 0 }}>
          <Image src={item.image} alt={item.title} fill sizes="(max-width:767px) 50vw, 33vw" style={{ objectFit: "cover" }} onError={() => setFailed(true)} />
        </motion.div>
      ) : (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44 }}>📸</div>
      )}
      <motion.div animate={{ opacity: hover ? 1 : 0 }} style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(41,33,30,.78), rgba(41,33,30,.1) 60%)" }} />
      <div style={{ position: "absolute", left: 14, bottom: 14, right: 14 }}>
        <motion.span animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : 8 }} style={{ display: "inline-block", fontSize: 11, fontWeight: 700, color: "var(--text)", background: "var(--gold)", padding: "3px 10px", borderRadius: 100, marginBottom: 8 }}>
          {item.tag}
        </motion.span>
        <motion.div animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : 8 }} className="h-display" style={{ fontSize: 17, color: "#fff", fontWeight: 600 }}>
          {item.title}
        </motion.div>
      </div>
      <motion.div animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.8 }} style={{ position: "absolute", top: 12, right: 12, width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Search size={16} style={{ color: "var(--text)" }} />
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPreview() {
  return (
    <section className="section-pad" style={{ background: "var(--bg)", padding: "92px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44 }}>
          <div style={{ maxWidth: 560 }}>
            <span className="eyebrow">Galeri</span>
            <h2 className="h-display" style={{ fontSize: "clamp(27px,3.6vw,44px)", color: "var(--text)", margin: "16px 0 12px" }}>
              Sonuçlar <em className="gold-text" style={{ fontStyle: "italic" }}>kendini</em> gösteriyor
            </h2>
            <p style={{ fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.7 }}>
              Merkezimizden ve uygulamalarımızdan kareler. Daha fazlası için Instagram'ı takip edin.
            </p>
          </div>
          <Link href="/galeri" className="btn-outline">
            Tüm Galeri <ArrowRight size={17} />
          </Link>
        </div>

        <div
          className="gallery-preview-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridAutoRows: 232, gap: 16 }}
        >
          {GALLERY.map((item, i) => (
            <GalleryCell key={i} item={item} big={i === 0 || i === 3} i={i} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href={SALON.instagram} target="_blank" rel="noopener noreferrer" className="btn-pill" style={{ padding: "11px 22px" }}>
            <IgGlyph size={16} /> {SALON.instagramHandle} · Takip Et
          </a>
        </div>
      </div>
    </section>
  );
}
