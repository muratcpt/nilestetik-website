"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { SALON } from "@/lib/data";
import AnimatedRandevuBtn from "@/components/ui/AnimatedRandevuBtn";
import PhoneWidget from "@/components/ui/PhoneWidget";

const NAV = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/galeri", label: "Galeri" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        transition: "all .35s ease",
        background: transparent ? "transparent" : "rgba(247,241,236,.92)",
        backdropFilter: transparent ? "none" : "blur(18px)",
        borderBottom: transparent ? "1px solid transparent" : "1px solid var(--border)",
        boxShadow: transparent ? "none" : "0 6px 28px rgba(70,45,35,.08)",
      }}
    >
      <div
        className="section-pad"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: scrolled ? "12px 32px" : "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding .35s ease",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <span
            style={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid var(--gold)",
              boxShadow: "0 4px 14px rgba(201,163,91,.3)",
              flexShrink: 0,
            }}
          >
            <Image src="/images/logo.jpg" alt="Nil Estetik logo" width={46} height={46} style={{ objectFit: "cover" }} />
          </span>
          <span style={{ lineHeight: 1.05 }}>
            <span
              className="h-display"
              style={{
                display: "block",
                fontSize: 21,
                fontWeight: 600,
                color: transparent ? "#fff" : "var(--text)",
                textShadow: transparent ? "0 1px 8px rgba(0,0,0,.35)" : "none",
              }}
            >
              {SALON.name}
            </span>
            <span
              style={{
                display: "block",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: transparent ? "rgba(255,255,255,.78)" : "var(--primary-dark)",
              }}
            >
              Çanakkale
            </span>
          </span>
        </Link>

        {/* Masaüstü nav */}
        <nav
          className="header-desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: 4 }}
        >
          {NAV.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                style={{
                  position: "relative",
                  padding: "9px 15px",
                  fontSize: 14.5,
                  fontWeight: active ? 700 : 500,
                  textDecoration: "none",
                  borderRadius: 10,
                  color: transparent
                    ? "rgba(255,255,255,.92)"
                    : active
                    ? "var(--primary-dark)"
                    : "var(--text-soft)",
                  textShadow: transparent ? "0 1px 6px rgba(0,0,0,.3)" : "none",
                  background: active && !transparent ? "var(--bg-alt)" : "transparent",
                  transition: "color .2s, background .2s",
                }}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Masaüstü CTA */}
        <div className="header-desktop-cta" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <PhoneWidget variant={transparent ? "dark" : "light"} size="sm" />
          <AnimatedRandevuBtn size="sm" />
        </div>

        {/* Hamburger */}
        <button
          className="header-hamburger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menü"
          style={{
            display: "none",
            width: 46,
            height: 46,
            borderRadius: 12,
            border: "1.5px solid",
            borderColor: transparent ? "rgba(255,255,255,.4)" : "var(--border)",
            background: transparent ? "rgba(255,255,255,.12)" : "var(--card)",
            color: transparent ? "#fff" : "var(--text)",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobil menü */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
          >
            <div style={{ padding: "12px 20px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
              {NAV.map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={n.href}
                    style={{
                      display: "block",
                      padding: "13px 14px",
                      borderRadius: 12,
                      fontSize: 16,
                      fontWeight: pathname === n.href ? 700 : 500,
                      color: pathname === n.href ? "var(--primary-dark)" : "var(--text)",
                      background: pathname === n.href ? "var(--bg-alt)" : "transparent",
                      textDecoration: "none",
                    }}
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
                <PhoneWidget variant="light" size="md" />
                <Link href="/randevu" className="btn-primary" style={{ width: "100%" }}>
                  ✦ Randevu Al
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
