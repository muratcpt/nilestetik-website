"use client";
import { motion } from "framer-motion";

interface Props {
  href?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  style?: React.CSSProperties;
}

export default function AnimatedRandevuBtn({
  href = "/randevu",
  size = "md",
  label = "Randevu Al",
  style: extra,
}: Props) {
  const padding = size === "lg" ? "17px 38px" : size === "sm" ? "11px 22px" : "14px 30px";
  const fontSize = size === "lg" ? 16 : size === "sm" ? 13.5 : 15;
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        padding,
        borderRadius: 14,
        background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
        color: "#fff",
        fontSize,
        fontWeight: 800,
        textDecoration: "none",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 8px 26px rgba(158,100,70,.4)",
        border: "none",
        fontFamily: "inherit",
        ...extra,
      }}
    >
      {/* Nefes alan dış halka */}
      <motion.span
        animate={{ scale: [1, 1.18], opacity: [0.4, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
        }}
      />
      {/* Shimmer ışık süpürme */}
      <motion.span
        animate={{ x: ["-120%", "210%"] }}
        transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          width: "55%",
          skewX: "-18deg",
          pointerEvents: "none",
          borderRadius: "inherit",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,.34) 45%, rgba(255,255,255,.55) 50%, rgba(255,255,255,.34) 55%, transparent)",
        }}
      />
      <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 8 }}>
        <span aria-hidden style={{ fontSize: "1.05em" }}>✦</span>
        {label}
      </span>
    </motion.a>
  );
}
