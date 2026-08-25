"use client";

import { useState } from "react";
import type { TemplateFont } from "./font";

type Props = {
  fonts: TemplateFont[];
  activeId: string;
  onSelect: (font: TemplateFont) => void;
};

/**
 * Control flotante para previsualizar el template con distintas tipografías
 * de título. Mismo patrón que ThemeSwitcher, pero para fuentes en vez de color.
 */
export default function FontSwitcher({ fonts, activeId, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const active = fonts.find((f) => f.id === activeId);

  return (
    <div className="fixed bottom-[68px] right-4 z-[120] flex items-center gap-2 rounded-full border border-black/10 bg-white/95 px-3 py-2 shadow-lg backdrop-blur">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-xs font-semibold text-[#5A5F73]"
        aria-expanded={open}
      >
        <span aria-hidden>🔤</span>
        <span className="hidden sm:inline">Tipografía</span>
      </button>

      <div className="flex items-center gap-1.5">
        {fonts.map((font) => {
          const isActive = font.id === activeId;
          return (
            <button
              key={font.id}
              type="button"
              title={font.name}
              aria-label={`Tipografía ${font.name}`}
              aria-pressed={isActive}
              onClick={() => onSelect(font)}
              style={{ fontFamily: font.heading }}
              className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-[#16182B] transition-transform hover:scale-110 ${
                isActive ? "ring-2 ring-[var(--accent)]" : "bg-black/5"
              }`}
            >
              Aa
            </button>
          );
        })}
      </div>

      <span
        className={`overflow-hidden whitespace-nowrap text-xs text-[#5A5F73] transition-all ${
          open ? "ml-1 max-w-[160px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        {active?.name} · muestra
      </span>
    </div>
  );
}
