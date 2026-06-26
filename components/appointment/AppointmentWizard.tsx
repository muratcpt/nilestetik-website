"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Calendar as CalIcon, Clock, User, Phone as PhoneI, MessageCircle } from "lucide-react";
import { SALON, SERVICES, TIME_SLOTS } from "@/lib/data";

const MONTHS = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
const DAYS = ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pz"];
const STEP_LABELS = ["Hizmet", "Tarih & Saat", "Bilgiler"];

const daysInMonth = (y: number, m: number) => new Date(y, m + 1, 0).getDate();
const firstDayIdx = (y: number, m: number) => (new Date(y, m, 1).getDay() + 6) % 7; // Pazartesi=0

type Data = { services: string[]; date: string; dateLabel: string; time: string; name: string; phone: string; note: string };

export default function AppointmentWizard() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [viewY, setViewY] = useState(today.getFullYear());
  const [viewM, setViewM] = useState(today.getMonth());
  const [data, setData] = useState<Data>({ services: [], date: "", dateLabel: "", time: "", name: "", phone: "", note: "" });

  const toggleService = (id: string) =>
    setData((d) => ({ ...d, services: d.services.includes(id) ? d.services.filter((s) => s !== id) : [...d.services, id] }));

  const go = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const canNext = step === 0 ? data.services.length > 0 : step === 1 ? !!data.date && !!data.time : true;
  const canSubmit = data.name.trim().length > 1 && data.phone.trim().length >= 10;

  const buildWA = () => {
    const names = data.services.map((id) => SERVICES.find((s) => s.id === id)?.name).filter(Boolean).join(", ");
    const msg =
      `Merhaba, Nil Estetik'ten randevu almak istiyorum 😊\n\n` +
      `📋 Hizmet: ${names}\n📅 Tarih: ${data.dateLabel}\n🕐 Saat: ${data.time}\n` +
      `👤 Ad Soyad: ${data.name}\n📞 Telefon: ${data.phone}` +
      (data.note ? `\n💬 Not: ${data.note}` : "");
    return `${SALON.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  // Takvim hücreleri
  const dim = daysInMonth(viewY, viewM);
  const lead = firstDayIdx(viewY, viewM);
  const cells: (number | null)[] = [...Array(lead).fill(null), ...Array.from({ length: dim }, (_, i) => i + 1)];
  const prevMonth = () => {
    if (viewY === today.getFullYear() && viewM === today.getMonth()) return;
    if (viewM === 0) { setViewM(11); setViewY((y) => y - 1); } else setViewM((m) => m - 1);
  };
  const nextMonth = () => {
    if (viewM === 11) { setViewM(0); setViewY((y) => y + 1); } else setViewM((m) => m + 1);
  };

  const pickDay = (d: number) => {
    const dt = new Date(viewY, viewM, d);
    const isPast = dt < today;
    const isSunday = dt.getDay() === 0;
    if (isPast || isSunday) return;
    const label = `${d} ${MONTHS[viewM]} ${viewY}, ${["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"][dt.getDay()]}`;
    setData((s) => ({ ...s, date: `${viewY}-${viewM + 1}-${d}`, dateLabel: label, time: "" }));
  };

  return (
    <div style={{ background: "var(--card)", borderRadius: 26, border: "1px solid var(--border)", boxShadow: "0 20px 50px var(--shadow)", overflow: "hidden" }}>
      {/* Adım göstergesi */}
      <div style={{ background: "linear-gradient(135deg, var(--text), #3a2a22)", padding: "26px 30px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {STEP_LABELS.map((label, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", flex: i < 2 ? 1 : "0 0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: 15,
                    background: i <= step ? "linear-gradient(135deg,var(--gold),var(--primary))" : "rgba(255,255,255,.12)",
                    color: i <= step ? "#fff" : "rgba(255,255,255,.5)",
                    boxShadow: i === step ? "0 0 0 4px rgba(201,163,91,.3)" : "none",
                    transition: "all .3s",
                  }}
                >
                  {i < step ? <Check size={18} /> : i + 1}
                </div>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: i <= step ? "#fff" : "rgba(255,255,255,.45)", whiteSpace: "nowrap" }} className="wizard-step-label">
                  {label}
                </span>
              </div>
              {i < 2 && (
                <div style={{ flex: 1, height: 2, margin: "0 12px", background: "rgba(255,255,255,.15)", borderRadius: 2, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, width: i < step ? "100%" : "0%", background: "linear-gradient(90deg,var(--gold),var(--primary))", transition: "width .4s" }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "30px" }}>
        <AnimatePresence mode="wait" custom={dir}>
          {/* ADIM 1 — Hizmet */}
          {step === 0 && (
            <motion.div key="s0" custom={dir} initial={{ opacity: 0, x: dir * 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -40 }} transition={{ duration: 0.3 }}>
              <h3 className="h-display" style={{ fontSize: 23, color: "var(--text)", marginBottom: 6 }}>Hangi hizmet(ler)i istiyorsunuz?</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>Birden fazla seçebilirsiniz · {data.services.length} hizmet seçildi</p>
              <div className="service-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                {SERVICES.map((s) => {
                  const sel = data.services.includes(s.id);
                  return (
                    <div key={s.id} className={`service-card${sel ? " selected" : ""}`} onClick={() => toggleService(s.id)}>
                      {sel && <span className="service-card-check"><Check size={13} color="#fff" /></span>}
                      <span className="service-card-icon">{s.icon}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", lineHeight: 1.25 }}>{s.name}</span>
                      <span style={{ fontSize: 11.5, color: "var(--text-muted)" }}>{s.duration}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ADIM 2 — Tarih & Saat */}
          {step === 1 && (
            <motion.div key="s1" custom={dir} initial={{ opacity: 0, x: dir * 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -40 }} transition={{ duration: 0.3 }}>
              <h3 className="h-display" style={{ fontSize: 23, color: "var(--text)", marginBottom: 6 }}>Tarih ve saat seçin</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>Pazar günleri kapalıyız · geçmiş günler seçilemez</p>
              <div className="wizard-date-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                {/* Takvim */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                    <button onClick={prevMonth} aria-label="Önceki ay" style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid var(--border)", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <ChevronLeft size={18} />
                    </button>
                    <div style={{ fontSize: 15.5, fontWeight: 700, color: "var(--text)", display: "flex", alignItems: "center", gap: 8 }}>
                      <CalIcon size={16} style={{ color: "var(--primary)" }} /> {MONTHS[viewM]} {viewY}
                    </div>
                    <button onClick={nextMonth} aria-label="Sonraki ay" style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid var(--border)", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <ChevronRight size={18} />
                    </button>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4, marginBottom: 6 }}>
                    {DAYS.map((d) => (
                      <div key={d} style={{ textAlign: "center", fontSize: 11.5, fontWeight: 700, color: "var(--text-light)", padding: "4px 0" }}>{d}</div>
                    ))}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4 }}>
                    {cells.map((c, idx) => {
                      if (c === null) return <div key={idx} />;
                      const dt = new Date(viewY, viewM, c);
                      const isPast = dt < today;
                      const isSunday = dt.getDay() === 0;
                      const disabled = isPast || isSunday;
                      const selected = data.date === `${viewY}-${viewM + 1}-${c}`;
                      return (
                        <button
                          key={idx}
                          onClick={() => pickDay(c)}
                          disabled={disabled}
                          style={{
                            aspectRatio: "1", borderRadius: 10, border: "none", cursor: disabled ? "not-allowed" : "pointer",
                            fontSize: 13.5, fontWeight: selected ? 800 : 600,
                            background: selected ? "linear-gradient(135deg,var(--primary),var(--primary-dark))" : disabled ? "transparent" : "var(--bg-alt)",
                            color: selected ? "#fff" : disabled ? "var(--text-light)" : "var(--text)",
                            opacity: disabled ? 0.4 : 1,
                            textDecoration: disabled && !isSunday ? "line-through" : "none",
                          }}
                        >
                          {c}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {/* Saatler */}
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                    <Clock size={16} style={{ color: "var(--primary)" }} /> {data.date ? "Uygun saatler" : "Önce tarih seçin"}
                  </div>
                  {data.date ? (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
                      {TIME_SLOTS.map((t) => {
                        const sel = data.time === t;
                        return (
                          <button
                            key={t}
                            onClick={() => setData((s) => ({ ...s, time: t }))}
                            style={{
                              padding: "10px 0", borderRadius: 10, fontSize: 13.5, fontWeight: 600, cursor: "pointer",
                              border: sel ? "1.5px solid var(--primary-dark)" : "1.5px solid var(--border)",
                              background: sel ? "linear-gradient(135deg,var(--primary),var(--primary-dark))" : "#fff",
                              color: sel ? "#fff" : "var(--text)",
                            }}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div style={{ padding: "30px 16px", textAlign: "center", color: "var(--text-light)", fontSize: 13.5, background: "var(--bg-alt)", borderRadius: 14 }}>
                      Saatleri görmek için soldan bir gün seçin.
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* ADIM 3 — Bilgiler */}
          {step === 2 && (
            <motion.div key="s2" custom={dir} initial={{ opacity: 0, x: dir * 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -40 }} transition={{ duration: 0.3 }}>
              <h3 className="h-display" style={{ fontSize: 23, color: "var(--text)", marginBottom: 6 }}>Son adım — bilgileriniz</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>Randevunuz WhatsApp üzerinden onaylanacaktır.</p>

              {/* Özet */}
              <div style={{ background: "var(--bg-alt)", borderRadius: 16, padding: "16px 18px", marginBottom: 22, border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", gap: 10, fontSize: 13.5, color: "var(--text-soft)", marginBottom: 8, flexWrap: "wrap" }}>
                  <span style={{ fontWeight: 700 }}>Hizmet:</span>
                  <span>{data.services.map((id) => SERVICES.find((s) => s.id === id)?.name).join(", ")}</span>
                </div>
                <div style={{ display: "flex", gap: 10, fontSize: 13.5, color: "var(--text-soft)" }}>
                  <span style={{ fontWeight: 700 }}>Tarih & Saat:</span>
                  <span>{data.dateLabel} · {data.time}</span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}><User size={15} /> Ad Soyad</label>
                  <input className="input-field" placeholder="Adınız ve soyadınız" value={data.name} onChange={(e) => setData((s) => ({ ...s, name: e.target.value }))} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}><PhoneI size={15} /> Telefon</label>
                  <input className="input-field" placeholder="05XX XXX XX XX" inputMode="tel" value={data.phone} onChange={(e) => setData((s) => ({ ...s, phone: e.target.value }))} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}><MessageCircle size={15} /> Not (opsiyonel)</label>
                  <textarea className="input-field" rows={3} placeholder="Eklemek istedikleriniz..." value={data.note} onChange={(e) => setData((s) => ({ ...s, note: e.target.value }))} style={{ resize: "vertical" }} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigasyon */}
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 28, paddingTop: 22, borderTop: "1px solid var(--border)" }}>
          <button
            onClick={() => go(Math.max(0, step - 1))}
            disabled={step === 0}
            className="btn-outline"
            style={{ opacity: step === 0 ? 0.4 : 1, pointerEvents: step === 0 ? "none" : "auto" }}
          >
            <ChevronLeft size={17} /> Geri
          </button>
          {step < 2 ? (
            <button onClick={() => canNext && go(step + 1)} disabled={!canNext} className="btn-primary" style={{ opacity: canNext ? 1 : 0.5, pointerEvents: canNext ? "auto" : "none" }}>
              Devam Et <ChevronRight size={17} />
            </button>
          ) : (
            <a
              href={canSubmit ? buildWA() : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ opacity: canSubmit ? 1 : 0.5, pointerEvents: canSubmit ? "auto" : "none" }}
            >
              <MessageCircle size={18} /> WhatsApp ile Onayla
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
