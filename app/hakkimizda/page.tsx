"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ChevronDown, ArrowRight } from "lucide-react";
import { SALON, VALUES, FAQ } from "@/lib/data";
import PhoneWidget from "@/components/ui/PhoneWidget";

export default function HakkimizdaPage() {
  const [open, setOpen] = useState<number | null>(0);
  const [failed, setFailed] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="section-pad" style={{ background: "linear-gradient(180deg, var(--bg-alt), var(--bg))", padding: "138px 32px 50px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Hakkımızda</span>
          <h1 className="h-display" style={{ fontSize: "clamp(34px,5vw,58px)", color: "var(--text)", margin: "16px 0 14px" }}>
            Güzelliğe <em className="gold-text" style={{ fontStyle: "italic" }}>özenle</em> dokunuyoruz
          </h1>
          <p style={{ fontSize: 16.5, color: "var(--text-muted)", lineHeight: 1.7 }}>
            Çanakkale Merkez'de saç ve cilt sağlığınız için kişiye özel, güven veren bir bakım deneyimi.
          </p>
        </div>
      </section>

      {/* Hikaye */}
      <section className="section-pad" style={{ background: "var(--bg)", padding: "60px 32px" }}>
        <div className="about-grid" style={{ maxWidth: 1150, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 56, alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "5/6", borderRadius: 28, overflow: "hidden", boxShadow: "0 28px 64px var(--shadow)", background: "linear-gradient(135deg,var(--accent),var(--secondary))" }}>
              {!failed ? (
                <Image src="/images/about-clinic.jpg" alt="Nil Estetik merkezi" fill sizes="(max-width:767px) 100vw, 45vw" style={{ objectFit: "cover" }} onError={() => setFailed(true)} />
              ) : (
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 70 }}>🌿</div>
              )}
            </div>
            <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", bottom: 18, left: -14, background: "var(--card)", borderRadius: 18, padding: "13px 18px", boxShadow: "0 16px 40px var(--shadow)", display: "flex", alignItems: "center", gap: 11 }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg,var(--gold),var(--primary))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Star size={20} fill="#fff" color="#fff" />
              </div>
              <div style={{ lineHeight: 1.15 }}>
                <div className="h-display" style={{ fontSize: 19, fontWeight: 700, color: "var(--text)" }}>5.0 Puan</div>
                <div style={{ fontSize: 11.5, color: "var(--text-muted)", fontWeight: 600 }}>{SALON.reviewCount} Google yorumu</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="h-display" style={{ fontSize: "clamp(26px,3.4vw,40px)", color: "var(--text)", marginBottom: 18, lineHeight: 1.12 }}>
              Çanakkale'de ilk ve tek <em className="gold-text" style={{ fontStyle: "italic" }}>saç çoğaltma</em> merkezi
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "var(--text-muted)", marginBottom: 16 }}>
              Nil Estetik olarak kişisel bakım, güzellik ve estetik alanında üstün kalite anlayışı
              ve güncel teknolojiyle hizmet veriyoruz. Kişiye özel uyguladığımız protokollerle
              kaybedilmiş saçı geri kazanıyor; cilt bakımı ve lazer epilasyonda ise konforlu,
              hijyenik ve güvenli bir deneyim sunuyoruz.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "var(--text-muted)", marginBottom: 26 }}>
              Önceliğimiz; her misafirimizi dinlemek, ihtiyacını doğru analiz etmek ve ona en uygun
              çözümü şeffaf bir şekilde sunmak. Bu yüzden süreç her zaman <strong style={{ color: "var(--text)" }}>ücretsiz analizle</strong> başlar.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
              <Link href="/randevu" className="btn-primary">Randevu Al <ArrowRight size={17} /></Link>
              <PhoneWidget variant="light" size="md" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Değerler */}
      <section className="section-pad" style={{ background: "var(--bg-alt)", padding: "84px 32px" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Değerlerimiz</span>
            <h2 className="h-display" style={{ fontSize: "clamp(26px,3.6vw,42px)", color: "var(--text)", margin: "14px 0 12px" }}>
              Bizi <em className="gold-text" style={{ fontStyle: "italic" }}>farklı</em> kılan ne?
            </h2>
          </div>
          <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {VALUES.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 3) * 0.08 }} className="card" style={{ padding: "26px 24px" }}>
                <div style={{ width: 54, height: 54, borderRadius: 15, background: "linear-gradient(135deg,var(--accent),var(--bg-alt))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16 }}>{v.icon}</div>
                <h3 className="h-display" style={{ fontSize: 19, color: "var(--text)", marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="section-pad" style={{ background: "var(--bg)", padding: "84px 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Sıkça Sorulanlar</span>
            <h2 className="h-display" style={{ fontSize: "clamp(26px,3.6vw,42px)", color: "var(--text)", margin: "14px 0 0" }}>
              Merak edilenler
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQ.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="card" style={{ overflow: "hidden", padding: 0 }}>
                  <button onClick={() => setOpen(isOpen ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, padding: "20px 24px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                    <span className="h-display" style={{ fontSize: 17.5, color: "var(--text)", fontWeight: 600 }}>{f.q}</span>
                    <ChevronDown size={20} style={{ color: "var(--primary)", flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform .3s" }} />
                  </button>
                  <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} style={{ overflow: "hidden" }}>
                    <p style={{ padding: "0 24px 22px", fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.7 }}>{f.a}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ padding: "0 32px 90px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", borderRadius: 26, background: "var(--text)", padding: "48px 40px", textAlign: "center" }}>
          <h2 className="h-display" style={{ fontSize: "clamp(24px,3.4vw,38px)", color: "#fff", marginBottom: 12 }}>Tanışmak için sizi bekliyoruz</h2>
          <p style={{ fontSize: 15.5, color: "rgba(255,255,255,.72)", maxWidth: 520, margin: "0 auto 26px", lineHeight: 1.6 }}>Ücretsiz analiz için hemen randevu oluşturun.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/randevu" className="btn-primary">✦ Randevu Al</Link>
            <Link href="/iletisim" className="btn-ghost-light">İletişim</Link>
          </div>
        </div>
      </section>
    </>
  );
}
