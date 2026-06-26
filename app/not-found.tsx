"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const QUICK = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/galeri", label: "Galeri" },
  { href: "/iletisim", label: "İletişim" },
];

export default function NotFound() {
  return (
    <section style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px 80px", background: "linear-gradient(180deg, var(--bg-alt), var(--bg))", textAlign: "center" }}>
      <div style={{ maxWidth: 560 }}>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="h-display gold-text"
          style={{ fontSize: "clamp(90px,18vw,170px)", fontWeight: 700, lineHeight: 1 }}
        >
          404
        </motion.div>
        <p className="script" style={{ fontSize: "clamp(24px,4vw,34px)", color: "var(--primary-dark)", marginBottom: 6 }}>Sayfa bulunamadı</p>
        <h1 className="h-display" style={{ fontSize: "clamp(24px,3.4vw,36px)", color: "var(--text)", marginBottom: 14 }}>
          Aradığınız sayfa burada değil
        </h1>
        <p style={{ fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 28 }}>
          Sayfa taşınmış ya da kaldırılmış olabilir. Aşağıdan devam edebilirsiniz.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 28 }}>
          <Link href="/" className="btn-primary">Ana Sayfaya Dön</Link>
          <Link href="/randevu" className="btn-outline">Randevu Al</Link>
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {QUICK.map((q) => (
            <Link key={q.href} href={q.href} className="btn-pill">{q.label}</Link>
          ))}
        </div>
      </div>
    </section>
  );
}
