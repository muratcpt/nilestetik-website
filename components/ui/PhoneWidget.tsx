"use client";
import { motion } from "framer-motion";
import { SALON } from "@/lib/data";

function PhoneIcon({ size = 22, color = "#fff" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

export default function PhoneWidget({
  variant = "dark",
  size = "md",
}: {
  variant?: "dark" | "light";
  size?: "sm" | "md";
}) {
  const isDark = variant === "dark";
  const isSm = size === "sm";
  return (
    <motion.a
      href={`tel:${SALON.phoneRaw}`}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: isSm ? 10 : 13,
        padding: isSm ? "8px 14px" : "11px 18px",
        borderRadius: 13,
        background: isDark ? "rgba(20,15,13,.82)" : "var(--card)",
        backdropFilter: isDark ? "blur(12px)" : "none",
        border: isDark ? "1px solid rgba(255,255,255,.14)" : "1.5px solid var(--border)",
        textDecoration: "none",
        boxShadow: isDark ? "0 6px 22px rgba(0,0,0,.25)" : "0 4px 16px rgba(160,110,80,.12)",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      <div style={{ position: "relative", flexShrink: 0 }}>
        <motion.div
          animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2.2, ease: "easeOut" }}
          style={{ position: "absolute", inset: -6, borderRadius: "50%", background: "rgba(201,163,91,.32)" }}
        />
        <motion.div
          animate={{ rotate: [0, -16, 16, -13, 13, -9, 9, -5, 5, 0] }}
          transition={{ duration: 0.85, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
          style={{
            width: isSm ? 34 : 42,
            height: isSm ? 34 : 42,
            borderRadius: "50%",
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, var(--gold), var(--primary))",
            boxShadow: "0 4px 14px rgba(201,163,91,.45)",
          }}
        >
          <PhoneIcon size={isSm ? 15 : 19} color="#fff" />
        </motion.div>
      </div>
      <div>
        <div
          style={{
            fontSize: isSm ? 9.5 : 10.5,
            fontWeight: 700,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: isDark ? "rgba(255,255,255,.6)" : "var(--text-muted)",
            marginBottom: 2,
          }}
        >
          Hemen Arayın
        </div>
        <div style={{ fontSize: isSm ? 14 : 16, fontWeight: 800, color: isDark ? "#fff" : "var(--text)" }}>
          {SALON.phone}
        </div>
      </div>
    </motion.a>
  );
}
