"use client";
// ★ İMZA animasyon: yükselen yumuşak altın parçacıklar (CSS keyframe — GPU, JS yok).
// Şablondaki uçuşan yaprakların yerine, roz-gold temaya uygun ışıltılı orblar.

type Props = { count?: number; zIndex?: number };

export default function GoldParticles({ count = 14, zIndex = 4 }: Props) {
  const particles = Array.from({ length: count }, (_, i) => {
    const swayBase = (i % 2 === 0 ? 1 : -1) * (18 + (i % 4) * 12);
    const size = 6 + (i % 5) * 5; // 6–26px
    return {
      id: i,
      left: 3 + (i * 7.1) % 94,
      size,
      dur: `${12 + (i % 6) * 2.2}s`,
      delay: `${(i % 9) * 0.5}s`,
      scale: 0.7 + (i % 4) * 0.22,
      opacity: 0.45 + (i % 3) * 0.18,
      px1: `${swayBase}px`,
      px2: `${Math.round(swayBase * 0.5)}px`,
    };
  });

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex }}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              "--pdur": p.dur,
              "--pdelay": p.delay,
              "--ps": p.scale,
              "--po": p.opacity,
              "--px1": p.px1,
              "--px2": p.px2,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
