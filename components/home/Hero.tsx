"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Sparkles, ChevronDown } from "lucide-react";
import { SALON } from "@/lib/data";
import GoldParticles from "@/components/ui/GoldParticles";
import AnimatedRandevuBtn from "@/components/ui/AnimatedRandevuBtn";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const collageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #241C19 0%, #34261F 46%, #4A3327 100%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* İpeksi aurora + parçacıklar */}
      <div className="silk" />
      <GoldParticles count={16} zIndex={2} />
      {/* nokta dokusu */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,.16) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          opacity: 0.18,
          zIndex: 1,
        }}
      />

      <motion.div
        style={{ opacity: fade }}
        className="section-pad"
      >
        <div
          className="hero-grid"
          style={{
            position: "relative",
            zIndex: 5,
            maxWidth: 1280,
            margin: "0 auto",
            padding: "150px 32px 110px",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* SOL — içerik */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 16px",
                borderRadius: 100,
                marginBottom: 22,
              }}
            >
              <span style={{ display: "flex", gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#C9A35B" color="#C9A35B" />
                ))}
              </span>
              <span style={{ fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,.9)", letterSpacing: ".02em" }}>
                5.0 Google Puanı · Çanakkale'de İlk & Tek
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="script"
              style={{ fontSize: "clamp(28px,4vw,40px)", color: "var(--gold)", lineHeight: 1, marginBottom: 6 }}
            >
              Güzelliğin yeni adresi
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="h-display"
              style={{
                fontSize: "clamp(38px,5.4vw,72px)",
                lineHeight: 1.03,
                color: "#fff",
                letterSpacing: "-.02em",
                marginBottom: 20,
                maxWidth: 620,
              }}
            >
              Kaybettiğiniz Saçı,{" "}
              <em className="gold-text" style={{ fontStyle: "italic" }}>
                Özgüveninizi
              </em>{" "}
              Geri Kazanın
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              style={{ fontSize: "clamp(15px,1.5vw,17.5px)", lineHeight: 1.7, color: "rgba(255,255,255,.78)", maxWidth: 520, marginBottom: 32 }}
            >
              Çanakkale Merkez'de <strong style={{ color: "#fff", fontWeight: 600 }}>saç çoğaltma</strong>,
              cilt bakımı ve lazer epilasyonda kişiye özel protokoller. Tedaviye başlamadan önce
              <strong style={{ color: "#fff", fontWeight: 600 }}> ücretsiz saç & cilt analizi</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 30 }}
            >
              <AnimatedRandevuBtn size="lg" label="Ücretsiz Analiz İçin Randevu" />
              <Link href="/hizmetler" className="btn-ghost-light">
                <Sparkles size={17} /> Hizmetlerimiz
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 22, alignItems: "center" }}
            >
              {[
                { big: SALON.followers, small: "Instagram Takipçi" },
                { big: "3–5 yıl", small: "Kalıcı Sonuç" },
                { big: "Ücretsiz", small: "Saç & Cilt Analizi" },
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 22 }}>
                  {i > 0 && <span style={{ width: 1, height: 34, background: "rgba(255,255,255,.18)" }} />}
                  <div>
                    <div className="h-display" style={{ fontSize: 21, color: "#fff", fontWeight: 600 }}>{t.big}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,.6)" }}>{t.small}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* SAĞ — görsel kolaj */}
          <motion.div
            className="hero-collage"
            style={{ y: collageY, position: "relative", height: 540 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            {/* arka altın halka */}
            <div
              style={{
                position: "absolute",
                top: "8%",
                right: "6%",
                width: 320,
                height: 320,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(201,163,91,.4), transparent 65%)",
                filter: "blur(8px)",
              }}
            />
            {/* ana görsel */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 340,
                height: 460,
                borderRadius: 28,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,.18)",
                boxShadow: "0 30px 70px rgba(0,0,0,.4)",
              }}
            >
              <Image src="/images/hero-main.jpg" alt="Nil Estetik — sağlıklı saç ve ışıltılı cilt" fill priority sizes="340px" style={{ objectFit: "cover" }} />
            </div>
            {/* ikincil görsel */}
            <div
              className="animate-float"
              style={{
                position: "absolute",
                bottom: 6,
                left: 0,
                width: 200,
                height: 240,
                borderRadius: 22,
                overflow: "hidden",
                border: "3px solid var(--bg)",
                boxShadow: "0 20px 50px rgba(0,0,0,.35)",
              }}
            >
              <Image src="/images/hero-side.jpg" alt="Sağlıklı parlak saç" fill sizes="200px" style={{ objectFit: "cover" }} />
            </div>
            {/* puan çipi */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: 34,
                left: -6,
                background: "rgba(255,255,255,.96)",
                borderRadius: 16,
                padding: "12px 16px",
                boxShadow: "0 16px 40px rgba(0,0,0,.22)",
                display: "flex",
                alignItems: "center",
                gap: 11,
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,var(--gold),var(--primary))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Star size={20} fill="#fff" color="#fff" />
              </div>
              <div style={{ lineHeight: 1.15 }}>
                <div className="h-display" style={{ fontSize: 19, fontWeight: 700, color: "var(--text)" }}>5.0</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600 }}>{SALON.reviewCount} Google Yorumu</div>
              </div>
            </motion.div>
            {/* ücretsiz analiz kartı */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: 70,
                right: -10,
                background: "var(--text)",
                color: "#fff",
                borderRadius: 16,
                padding: "13px 17px",
                boxShadow: "0 16px 40px rgba(0,0,0,.3)",
                maxWidth: 190,
              }}
            >
              <div style={{ fontSize: 22, marginBottom: 4 }}>🔬</div>
              <div style={{ fontSize: 13.5, fontWeight: 700, lineHeight: 1.3 }}>Ücretsiz Saç & Cilt Analizi</div>
              <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.65)", marginTop: 3 }}>Tedaviden önce net yol haritası</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll göstergesi */}
      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: 26, left: "50%", transform: "translateX(-50%)", zIndex: 5, textAlign: "center", color: "rgba(255,255,255,.6)" }}
      >
        <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 6 }}>Keşfet</div>
        <ChevronDown size={22} style={{ margin: "0 auto" }} />
      </motion.div>
    </section>
  );
}
