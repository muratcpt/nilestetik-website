"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { SALON } from "@/lib/data";

export default function AppointmentCTA() {
  const waMsg = encodeURIComponent("Merhaba, Nil Estetik'ten randevu almak istiyorum 😊");
  const options = [
    {
      icon: <CalendarCheck size={26} />,
      title: "Online Randevu",
      desc: "3 adımda hızlıca yerinizi ayırtın",
      href: "/randevu",
      cta: "Randevu Al",
      bg: "rgba(255,255,255,.16)",
      external: false,
    },
    {
      icon: <MessageCircle size={26} />,
      title: "WhatsApp",
      desc: "Genellikle kısa sürede yanıt veriyoruz",
      href: `${SALON.whatsapp}?text=${waMsg}`,
      cta: "Mesaj Gönder",
      bg: "rgba(37,211,102,.92)",
      external: true,
    },
    {
      icon: <Phone size={26} />,
      title: "Telefon",
      desc: SALON.phone,
      href: `tel:${SALON.phoneRaw}`,
      cta: "Hemen Ara",
      bg: "rgba(255,255,255,.16)",
      external: false,
    },
  ];

  return (
    <section className="section-pad" style={{ padding: "16px 32px" }}>
      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          borderRadius: 32,
          overflow: "hidden",
          background: "linear-gradient(135deg, #9E6446 0%, #B07A55 45%, #C9A35B 100%)",
          padding: "64px 40px",
        }}
      >
        {/* doku */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.18) 1px, transparent 1px)", backgroundSize: "34px 34px", opacity: 0.5 }} />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "-30%", right: "-10%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,.3), transparent 70%)" }}
        />

        <div style={{ position: "relative", textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
          <p className="script" style={{ fontSize: "clamp(26px,4vw,38px)", color: "rgba(255,255,255,.95)", lineHeight: 1, marginBottom: 8 }}>
            Güzellik yolculuğunuz başlıyor
          </p>
          <h2 className="h-display" style={{ fontSize: "clamp(28px,4vw,46px)", color: "#fff", marginBottom: 14 }}>
            Yerinizi Hemen Ayırtın
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.85)", lineHeight: 1.6 }}>
            Ücretsiz saç & cilt analizi için size en uygun yöntemi seçin.
          </p>
        </div>

        <div className="action-grid" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, maxWidth: 880, margin: "0 auto" }}>
          {options.map((o, i) => (
            <motion.a
              key={i}
              href={o.href}
              target={o.external ? "_blank" : undefined}
              rel={o.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 8,
                padding: "26px 24px",
                borderRadius: 20,
                background: o.bg,
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,.25)",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              <div style={{ width: 54, height: 54, borderRadius: 15, background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 6 }}>
                {o.icon}
              </div>
              <div className="h-display" style={{ fontSize: 21, fontWeight: 600 }}>{o.title}</div>
              <div style={{ fontSize: 13.5, color: "rgba(255,255,255,.85)", lineHeight: 1.5 }}>{o.desc}</div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, fontSize: 14, fontWeight: 700 }}>
                {o.cta} <ArrowRight size={16} />
              </span>
            </motion.a>
          ))}
        </div>

        <div className="contact-pills" style={{ position: "relative", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginTop: 36 }}>
          {["⭐ 5.0 Google Puanı", "🔬 Ücretsiz Analiz", "🧼 Hijyenik Ortam", "📍 Çanakkale Merkez"].map((p) => (
            <span key={p} style={{ fontSize: 13, fontWeight: 600, color: "#fff", background: "rgba(255,255,255,.16)", border: "1px solid rgba(255,255,255,.25)", padding: "8px 16px", borderRadius: 100 }}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
