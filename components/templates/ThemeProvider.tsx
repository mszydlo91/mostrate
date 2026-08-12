"use client";

import { useState, ReactNode } from "react";
import type { TemplateTheme } from "./theme";
import { themeVars } from "./theme";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {
  themes: TemplateTheme[];
  children: ReactNode;
};

/**
 * Envuelve un template de cliente, aplica el tema activo como variables CSS
 * y monta el selector flotante de temas. Las secciones hijas leen los colores
 * vía `var(--accent)` — no necesitan saber qué tema está activo.
 */
export default function ThemeProvider({ themes, children }: Props) {
  const [active, setActive] = useState<TemplateTheme>(themes[0]);

  return (
    <div style={themeVars(active)}>
      {children}
      <ThemeSwitcher themes={themes} activeId={active.id} onSelect={setActive} />
    </div>
  );
}
