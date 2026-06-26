"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/data";

function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const steps = 38;
    const step = to / steps;
    const t = setInterval(() => {
      s += step;
      if (s >= to) {
        setV(to);
        clearInterval(t);
      } else setV(s);
    }, 42);
    return () => clearInterval(t);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString("tr-TR")}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section style={{ background: "var(--card)", borderBottom: "1px solid var(--border)", position: "relative", zIndex: 6 }}>
      <div className="section-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "30px 32px" }}>
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                textAlign: "center",
                padding: "16px 12px",
                borderRadius: 18,
                background: "linear-gradient(180deg, var(--bg-alt), transparent)",
              }}
            >
              <div className="h-display gold-text" style={{ fontSize: "clamp(28px,3.4vw,40px)", fontWeight: 700, lineHeight: 1 }}>
                {"to" in s && typeof s.to === "number" ? (
                  <Counter to={s.to} decimals={s.decimals} suffix={s.suffix} />
                ) : (
                  s.text
                )}
              </div>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text)", marginTop: 8 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
