"use client";

import { useState, useEffect, ReactNode } from "react";
import type { TemplatePrimary, TemplateTheme } from "./theme";
import { primaryVars, themeVars } from "./theme";
import type { TemplateFont } from "./font";
import { fontVars, templateFonts } from "./font";
import type { TemplateDesign } from "./design";
import DemoToolbar from "./DemoToolbar";

type Props = {
  /** Colores primarios (base de la identidad); se combinan con los temas. */
  primaries: TemplatePrimary[];
  /** Temas de acento (color secundario). */
  themes: TemplateTheme[];
  fonts?: TemplateFont[];
  /** Diseños del template; si hay más de uno se muestra el selector de diseño. */
  designs?: TemplateDesign[];
  /** Diseño activo: define el tema y la tipografía con los que arranca. */
  design?: TemplateDesign;
  children: ReactNode;
};

/**
 * Envuelve un template de cliente, aplica el tema y la tipografía activos
 * como variables CSS, y monta la barra de demo de Mostrate (volver, diseño,
 * tipografía, color). Las secciones hijas leen los colores vía `var(--accent)` y los
 * títulos vía `font-[family-name:var(--tpl-font-heading)]` — no necesitan
 * saber qué tema o fuente está activa.
 *
 * Si el template tiene varios diseños, la página pasa el activo y usa
 * `key={design.id}` para que el tema y la fuente se reinicien al cambiarlo.
 *
 * Si la página se muestra embebida en un iframe (la vidriera en vivo de la
 * landing de Mostrate), no monta los controles de demo. Arrancan ocultos
 * (`embedded` = null) para que el HTML del servidor no los muestre un
 * instante dentro del iframe antes de hidratar.
 */
export default function ThemeProvider({
  primaries,
  themes,
  fonts = templateFonts,
  designs,
  design,
  children,
}: Props) {
  const [activeTheme, setActiveTheme] = useState<TemplateTheme>(
    themes.find((t) => t.id === design?.theme) ?? themes[0]
  );
  const [activePrimary, setActivePrimary] = useState<TemplatePrimary>(
    primaries.find((p) => p.id === design?.primary) ?? primaries[0]
  );
  const [activeFont, setActiveFont] = useState<TemplateFont>(
    fonts.find((f) => f.id === design?.font) ?? fonts[0]
  );
  const [embedded, setEmbedded] = useState<boolean | null>(null);

  useEffect(() => {
    const requestedEmbed = new URLSearchParams(window.location.search).has("embed");
    setEmbedded(window.self !== window.top || requestedEmbed);
  }, []);

  return (
    <div style={{ ...primaryVars(activePrimary), ...themeVars(activeTheme), ...fontVars(activeFont) }}>
      {children}
      {embedded === false && (
        <DemoToolbar
          primaries={primaries}
          activePrimaryId={activePrimary.id}
          onPrimary={setActivePrimary}
          themes={themes}
          activeThemeId={activeTheme.id}
          onTheme={setActiveTheme}
          fonts={fonts}
          activeFontId={activeFont.id}
          onFont={setActiveFont}
          designs={designs}
          activeDesignId={design?.id}
        />
      )}
    </div>
  );
}
