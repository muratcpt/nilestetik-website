"use client";
import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0, id = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };
    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      id = requestAnimationFrame(animate);
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button")) {
        ring.style.width = "50px";
        ring.style.height = "50px";
        ring.style.opacity = "0.5";
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button")) {
        ring.style.width = "32px";
        ring.style.height = "32px";
        ring.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    id = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ left: -100, top: -100 }} />
      <div ref={ringRef} className="cursor-ring" style={{ left: -100, top: -100 }} />
    </>
  );
}
