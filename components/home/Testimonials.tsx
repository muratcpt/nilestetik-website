"use client";
import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";
import { TESTIMONIALS, SALON } from "@/lib/data";

const AVATAR_BG = [
  "linear-gradient(135deg,#C0876B,#9E6446)",
  "linear-gradient(135deg,#C9A35B,#A98438)",
  "linear-gradient(135deg,#D9A98C,#B98268)",
];

export default function Testimonials() {
  return (
    <section className="section-pad" style={{ background: "var(--bg-alt)", padding: "92px 32px", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(var(--accent) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.4,
        }}
      />
      <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 50px" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Yorumlar</span>
          <h2 className="h-display" style={{ fontSize: "clamp(27px,3.8vw,44px)", color: "var(--text)", margin: "16px 0 16px" }}>
            Müşterilerimiz <em className="gold-text" style={{ fontStyle: "italic" }}>ne diyor?</em>
          </h2>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "9px 18px", borderRadius: 100, background: "var(--card)", border: "1px solid var(--border)" }}>
            <span style={{ display: "flex", gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="var(--gold)" color="var(--gold)" />
              ))}
            </span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>
              {SALON.rating.toFixed(1)} / 5
            </span>
            <span style={{ fontSize: 13.5, color: "var(--text-muted)" }}>· {SALON.reviewCount} Google yorumu</span>
          </div>
        </div>

        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card"
              style={{ padding: "28px 26px", display: "flex", flexDirection: "column", position: "relative" }}
            >
              <Quote size={42} style={{ color: "var(--accent)", position: "absolute", top: 18, right: 20 }} />
              <span style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} fill="var(--gold)" color="var(--gold)" />
                ))}
              </span>
              <p style={{ fontSize: 15, lineHeight: 1.72, color: "var(--text-soft)", fontStyle: "italic", flex: 1 }}>
                “{t.text}”
              </p>
              <span style={{ display: "inline-block", alignSelf: "flex-start", fontSize: 12, fontWeight: 600, color: "var(--primary-dark)", background: "var(--bg-alt)", padding: "5px 12px", borderRadius: 100, margin: "16px 0 18px" }}>
                {t.services}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: AVATAR_BG[i % 3], display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 17, fontFamily: "var(--font-display)" }}>
                  {t.name.charAt(0)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text)" }}>{t.name}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "var(--text-muted)" }}>
                    <BadgeCheck size={13} style={{ color: "#4285F4" }} /> Google Yorumu · {t.time}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
