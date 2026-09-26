"use client";

import { useEffect, useRef } from "react";

/**
 * Fondo vivo de la landing: una luz tenue que sigue al cursor + grano de
 * película. Ambos quedan detrás del contenido y no capturan eventos.
 * En pantallas táctiles o con reduced-motion la luz queda fija arriba.
 */
export default function Ambient() {
  const light = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = light.current;
    if (!el) return;
    const still =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    if (still) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div
        ref={light}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(640px circle at var(--mx, 70%) var(--my, 0px), rgba(79,127,255,0.09), transparent 65%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.06] mix-blend-soft-light">
        <filter id="ambient-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#ambient-grain)" />
      </svg>
    </div>
  );
}
