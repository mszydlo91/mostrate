"use client";

import { useState, ReactNode } from "react";
import type { TemplateTheme } from "./theme";
import { themeVars } from "./theme";
import type { TemplateFont } from "./font";
import { fontVars, templateFonts } from "./font";
import ThemeSwitcher from "./ThemeSwitcher";
import FontSwitcher from "./FontSwitcher";
import BackToSite from "./BackToSite";

type Props = {
  themes: TemplateTheme[];
  fonts?: TemplateFont[];
  children: ReactNode;
};

/**
 * Envuelve un template de cliente, aplica el tema y la tipografía activos
 * como variables CSS, y monta los selectores flotantes + el link de vuelta a
 * Mostrate. Las secciones hijas leen los colores vía `var(--accent)` y los
 * títulos vía `font-[family-name:var(--tpl-font-heading)]` — no necesitan
 * saber qué tema o fuente está activa.
 */
export default function ThemeProvider({ themes, fonts = templateFonts, children }: Props) {
  const [activeTheme, setActiveTheme] = useState<TemplateTheme>(themes[0]);
  const [activeFont, setActiveFont] = useState<TemplateFont>(fonts[0]);

  return (
    <div style={{ ...themeVars(activeTheme), ...fontVars(activeFont) }}>
      {children}
      <BackToSite />
      <FontSwitcher fonts={fonts} activeId={activeFont.id} onSelect={setActiveFont} />
      <ThemeSwitcher themes={themes} activeId={activeTheme.id} onSelect={setActiveTheme} />
    </div>
  );
}
