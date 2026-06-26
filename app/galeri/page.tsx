"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { GALLERY, GALLERY_FILTERS, SALON } from "@/lib/data";

function Cell({ item, i, onOpen }: { item: (typeof GALLERY)[number]; i: number; onOpen: () => void }) {
  const [hover, setHover] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onOpen}
      style={{ position: "relative", aspectRatio: "1", borderRadius: 18, overflow: "hidden", cursor: "pointer", border: "none", padding: 0, background: "linear-gradient(135deg,var(--accent),var(--secondary))" }}
    >
      {!failed ? (
        <motion.div animate={{ scale: hover ? 1.08 : 1 }} transition={{ duration: 0.5 }} style={{ position: "absolute", inset: 0 }}>
          <Image src={item.image} alt={item.title} fill sizes="(max-width:767px) 50vw, 33vw" style={{ objectFit: "cover" }} onError={() => setFailed(true)} />
        </motion.div>
      ) : (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 44 }}>📸</div>
      )}
      <motion.div animate={{ opacity: hover ? 1 : 0 }} style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(41,33,30,.8), rgba(41,33,30,.05) 60%)" }} />
      <div style={{ position: "absolute", left: 14, bottom: 14, right: 14, textAlign: "left" }}>
        <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, color: "var(--text)", background: "var(--gold)", padding: "3px 10px", borderRadius: 100, marginBottom: 8 }}>{item.tag}</span>
        <div className="h-display" style={{ fontSize: 16.5, color: "#fff", fontWeight: 600 }}>{item.title}</div>
      </div>
      <motion.div animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.8 }} style={{ position: "absolute", top: 12, right: 12, width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Search size={16} style={{ color: "var(--text)" }} />
      </motion.div>
    </motion.button>
  );
}

export default function GaleriPage() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const list = filter === "all" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  const close = () => setLightbox(null);
  const prev = () => setLightbox((l) => (l === null ? null : (l - 1 + list.length) % list.length));
  const next = () => setLightbox((l) => (l === null ? null : (l + 1) % list.length));

  return (
    <>
      {/* Hero */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, var(--bg-alt), var(--bg))", padding: "138px 32px 50px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Galeri</span>
          <h1 className="h-display" style={{ fontSize: "clamp(34px,5vw,58px)", color: "var(--text)", margin: "16px 0 14px" }}>
            Çalışmalarımızdan <em className="gold-text" style={{ fontStyle: "italic" }}>kareler</em>
          </h1>
          <p style={{ fontSize: 16.5, color: "var(--text-muted)", lineHeight: 1.7 }}>
            Uygulamalarımızdan ve merkezimizden bir seçki. Güncel paylaşımlar için Instagram'ı takip edin.
          </p>
        </div>
      </section>

      {/* Filtre + grid */}
      <section className="section-pad" style={{ background: "var(--bg)", padding: "8px 32px 70px" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 38 }}>
            {GALLERY_FILTERS.map((f) => (
              <button key={f.key} onClick={() => { setFilter(f.key); setLightbox(null); }} className={`btn-pill${filter === f.key ? " active" : ""}`}>
                {filter === f.key && <Check size={14} />} {f.label}
              </button>
            ))}
          </div>
          <motion.div layout className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {list.map((item, i) => (
              <Cell key={`${item.image}-${filter}`} item={item} i={i} onOpen={() => setLightbox(i)} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ padding: "0 32px 90px", textAlign: "center" }}>
        <a href={SALON.instagram} target="_blank" rel="noopener noreferrer" className="btn-primary">{SALON.instagramHandle} · Instagram'da Takip Et</a>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && list[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(20,15,13,.92)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
          >
            <button onClick={close} aria-label="Kapat" style={{ position: "absolute", top: 22, right: 22, width: 46, height: 46, borderRadius: "50%", background: "rgba(255,255,255,.14)", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={24} /></button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Önceki" style={{ position: "absolute", left: 20, width: 50, height: 50, borderRadius: "50%", background: "rgba(255,255,255,.14)", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><ChevronLeft size={26} /></button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Sonraki" style={{ position: "absolute", right: 20, width: 50, height: 50, borderRadius: "50%", background: "rgba(255,255,255,.14)", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><ChevronRight size={26} /></button>
            <motion.div
              key={lightbox}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: "relative", width: "min(680px, 90vw)", aspectRatio: "1", borderRadius: 20, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,.5)" }}
            >
              <Image src={list[lightbox].image} alt={list[lightbox].title} fill sizes="680px" style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "20px", background: "linear-gradient(to top, rgba(41,33,30,.85), transparent)" }}>
                <span style={{ display: "inline-block", fontSize: 11.5, fontWeight: 700, color: "var(--text)", background: "var(--gold)", padding: "4px 11px", borderRadius: 100, marginBottom: 8 }}>{list[lightbox].tag}</span>
                <div className="h-display" style={{ fontSize: 20, color: "#fff" }}>{list[lightbox].title}</div>
              </div>
            </motion.div>
            <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,.7)", fontSize: 13.5, fontWeight: 600 }}>
              {lightbox + 1} / {list.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
