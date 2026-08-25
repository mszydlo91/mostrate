"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  suffix?: string;
  className?: string;
};

/**
 * Número que "cuenta" desde 0 hasta su valor al montarse — el detalle
 * dinámico que en onfit.com.ar aparece como estadísticas que cargan.
 * Solo anima valores numéricos; si `value` no es un número (ej. "4.9" con
 * coma, o texto), lo muestra directo sin animar.
 */
export default function Counter({ value, suffix = "", className }: Props) {
  const target = Number(value);
  const isNumeric = !Number.isNaN(target) && Number.isFinite(target);
  const [display, setDisplay] = useState(isNumeric ? 0 : target);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isNumeric) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(target);
      return;
    }
    const duration = 900;
    const start = performance.now();
    let frame: number;
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased * 10) / 10);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, isNumeric]);

  return (
    <span ref={ref} className={className}>
      {isNumeric ? display : value}
      {suffix}
    </span>
  );
}
