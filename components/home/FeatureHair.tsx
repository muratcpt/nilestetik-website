"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PROCESS } from "@/lib/data";
import GoldParticles from "@/components/ui/GoldParticles";
import AnimatedRandevuBtn from "@/components/ui/AnimatedRandevuBtn";

export default function FeatureHair() {
  const [failed, setFailed] = useState(false);
  return (
    <section style={{ position: "relative", background: "var(--text)", overflow: "hidden", padding: "92px 0" }}>
      <GoldParticles count={10} zIndex={1} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(60% 60% at 80% 20%, rgba(192,135,107,.18), transparent 70%)",
          zIndex: 1,
        }}
      />
      <div className="section-pad" style={{ position: "relative", zIndex: 3, maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div className="feature-grid" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "center" }}>
          {/* görsel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ position: "relative" }}
          >
            <div style={{ position: "relative", aspectRatio: "4/4.4", borderRadius: 26, overflow: "hidden", border: "1px solid rgba(255,255,255,.14)", boxShadow: "0 30px 70px rgba(0,0,0,.4)", background: "linear-gradient(135deg,#3a2a22,#4a3327)" }}>
              {!failed ? (
                <Image src="/images/feature-sac.jpg" alt="Saç analizi ve saç çoğaltma" fill sizes="(max-width:767px) 100vw, 45vw" style={{ objectFit: "cover" }} onError={() => setFailed(true)} />
              ) : (
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 70 }}>🌱</div>
              )}
            </div>
            {/* kalıcılık rozeti */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", bottom: -18, right: -10, background: "var(--card)", borderRadius: 18, padding: "14px 18px", boxShadow: "0 18px 44px rgba(0,0,0,.3)", textAlign: "center" }}
            >
              <div className="h-display gold-text" style={{ fontSize: 28, fontWeight: 700, lineHeight: 1 }}>3–5 yıl</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, marginTop: 3 }}>Kalıcı Sonuç</div>
            </motion.div>
          </motion.div>

          {/* içerik */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="eyebrow" style={{ color: "var(--gold)" }}>İmza Hizmetimiz</span>
            <h2 className="h-display" style={{ fontSize: "clamp(28px,4vw,46px)", color: "#fff", margin: "16px 0 16px", lineHeight: 1.08 }}>
              Saç Çoğaltma ile <em className="gold-text" style={{ fontStyle: "italic" }}>dolgun saçlara</em> kavuşun
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,.74)", marginBottom: 30, maxWidth: 540 }}>
              Kişiye özel uyguladığımız protokollerle kaybedilmiş saçı geri kazanıyoruz. Uygulama
              sonrası saatler içinde daha yoğun ve estetik bir saç görünümüne kavuşursunuz. Süreç
              ücretsiz analizle başlar — hiçbir belirsizlik olmadan.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 34 }}>
              {PROCESS.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.12 }}
                  style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 46,
                      height: 46,
                      borderRadius: 13,
                      background: "linear-gradient(135deg, rgba(201,163,91,.25), rgba(192,135,107,.18))",
                      border: "1px solid rgba(201,163,91,.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontSize: 17,
                      fontWeight: 700,
                      color: "var(--gold)",
                    }}
                  >
                    {p.step}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                      <h3 className="h-display" style={{ fontSize: 18.5, color: "#fff" }}>{p.title}</h3>
                      <Check size={15} style={{ color: "var(--gold)" }} />
                    </div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,.66)", lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <AnimatedRandevuBtn size="md" label="Ücretsiz Saç Analizi Al" />
              <Link href="/hizmetler" className="btn-ghost-light">Tüm Saç Hizmetleri</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
