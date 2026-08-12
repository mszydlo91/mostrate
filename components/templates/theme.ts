/**
 * Sistema de temas para los templates de clientes.
 *
 * Cada template define una lista de `TemplateTheme`. El ThemeProvider inyecta
 * el tema activo como variables CSS (`--accent`, `--accent-strong`, etc.) sobre
 * un wrapper, y las secciones las consumen con `var(--accent)`. Cambiar de tema
 * solo reescribe esas variables — no hace falta recompilar ni tocar los componentes.
 */
export type TemplateTheme = {
  id: string;
  /** Nombre visible en el selector de temas */
  name: string;
  /** Color de acento principal */
  accent: string;
  /** Variante más oscura para hover/estados activos */
  accentStrong: string;
  /** Acento a baja opacidad para fondos sutiles (badges, íconos) */
  accentSoft: string;
  /** Color del texto que va encima del acento (normalmente blanco) */
  accentContrast: string;
};

/** Convierte un tema en el objeto de variables CSS listo para `style={}`. */
export function themeVars(theme: TemplateTheme): React.CSSProperties {
  return {
    ["--accent" as string]: theme.accent,
    ["--accent-strong" as string]: theme.accentStrong,
    ["--accent-soft" as string]: theme.accentSoft,
    ["--accent-contrast" as string]: theme.accentContrast,
  };
}
