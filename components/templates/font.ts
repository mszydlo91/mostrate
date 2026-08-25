/**
 * Sistema de tipografías para los templates de clientes.
 *
 * Funciona igual que el sistema de temas de color (`theme.ts`): el ThemeProvider
 * inyecta la fuente activa como variable CSS (`--tpl-font-heading`) sobre el
 * wrapper del template, y los títulos la consumen con
 * `font-[family-name:var(--tpl-font-heading)]`. Cambiar de tipografía solo
 * reescribe esa variable — no hace falta recompilar ni tocar los componentes.
 */
export type TemplateFont = {
  id: string;
  /** Nombre visible en el selector de tipografías */
  name: string;
  /** Variable CSS de next/font ya cargada en app/layout.tsx (ej. "var(--font-syne)") */
  heading: string;
};

/** Convierte una fuente en el objeto de variables CSS listo para `style={}`. */
export function fontVars(font: TemplateFont): React.CSSProperties {
  return {
    ["--tpl-font-heading" as string]: font.heading,
  };
}

/**
 * Opciones de tipografía disponibles para cualquier template. A diferencia de
 * los colores (que sí varían por rubro), la tipografía es una preferencia de
 * estilo general — se comparte la misma lista entre templates.
 */
export const templateFonts: TemplateFont[] = [
  { id: "syne", name: "Syne — geométrica", heading: "var(--font-syne)" },
  { id: "playfair", name: "Playfair — editorial", heading: "var(--font-playfair)" },
  { id: "space-grotesk", name: "Space Grotesk — técnica", heading: "var(--font-space-grotesk)" },
  { id: "poppins", name: "Poppins — amigable", heading: "var(--font-poppins)" },
];
