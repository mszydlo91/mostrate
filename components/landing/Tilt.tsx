"use client";

import { useRef, type ReactNode } from "react";

/**
 * Inclina su contenido en 3D siguiendo el mouse. Sin efecto en pantallas
 * táctiles ni con reduced-motion (se controla desde CSS con `motion-safe`).
 */
export default function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const el = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !el.current) return;
    const r = el.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.current.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
    el.current.style.setProperty("--ry", `${(x * 9).toFixed(2)}deg`);
  }

  function onLeave() {
    el.current?.style.setProperty("--rx", "0deg");
    el.current?.style.setProperty("--ry", "0deg");
  }

  return (
    <div className="[perspective:1200px]">
      <div
        ref={el}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className={`transition-transform duration-300 ease-out motion-safe:[transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
