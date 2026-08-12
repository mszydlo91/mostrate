"use client";

import { useState } from "react";
import type { TemplateTheme } from "./theme";

type Props = {
  themes: TemplateTheme[];
  activeId: string;
  onSelect: (theme: TemplateTheme) => void;
};

/**
 * Control flotante para previsualizar el template con distintos temas de color.
 * Pensado como herramienta de demo de Mostrate (el cliente final decide su color).
 */
export default function ThemeSwitcher({ themes, activeId, onSelect }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[120] flex items-center gap-2 rounded-full border border-black/10 bg-white/95 px-3 py-2 shadow-lg backdrop-blur">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-xs font-semibold text-[#5A5F73]"
        aria-expanded={open}
      >
        <span aria-hidden>🎨</span>
        <span className="hidden sm:inline">Tema</span>
      </button>

      <div className="flex items-center gap-1.5">
        {themes.map((theme) => {
          const active = theme.id === activeId;
          return (
            <button
              key={theme.id}
              type="button"
              title={theme.name}
              aria-label={`Tema ${theme.name}`}
              aria-pressed={active}
              onClick={() => onSelect(theme)}
              className={`h-6 w-6 rounded-full transition-transform hover:scale-110 ${
                active ? "ring-2 ring-offset-2 ring-offset-white" : ""
              }`}
              style={{
                background: theme.accent,
                boxShadow: active ? `0 0 0 2px ${theme.accent}` : undefined,
              }}
            />
          );
        })}
      </div>

      {/* Etiqueta contextual opcional */}
      <span
        className={`overflow-hidden whitespace-nowrap text-xs text-[#5A5F73] transition-all ${
          open ? "ml-1 max-w-[140px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        {themes.find((t) => t.id === activeId)?.name} · muestra
      </span>
    </div>
  );
}
