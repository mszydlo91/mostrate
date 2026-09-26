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

/**
 * Color primario: la base de la identidad del template, definida como par
 * fondo + tinta. Lo que más se ve cambiar es el fondo (claro en Profesional y
 * Comercio, oscuro en Gastronomía y Bienestar). Se combina libremente con los
 * temas de acento (secundario); cada template define 3 primarios propios.
 */
export type TemplatePrimary = {
  id: string;
  /** Nombre visible en la barra de demo */
  name: string;
  /** Color de fondo del sitio (hex) */
  color: string;
  /** Color de tinta: textos y bloques de contraste sobre ese fondo (hex) */
  ink: string;
};

/** Transparencias disponibles como `var(--primary-a<N>)` y `var(--ink-a<N>)`. */
export const PRIMARY_ALPHAS = [5, 10, 20, 40, 50, 60, 70, 80, 90] as const;

const mix = (a: string, pct: number, b: string) => `color-mix(in srgb, ${a} ${pct}%, ${b})`;

/**
 * Convierte un primario en variables CSS:
 * - `--primary` (fondo), `--primary-alt` (superficie alternativa, un poco
 *   hacia la tinta) y `--primary-light` (un poco hacia el blanco).
 * - `--ink` (tinta).
 * - `--card` (cards y formularios: el fondo muy aclarado), `--card-alt` (cajas
 *   internas, etiquetas, inputs) y `--line` (bordes y divisores).
 * - Transparencias `--primary-a<N>` y `--ink-a<N>`, porque Tailwind no puede
 *   aplicar `/70` sobre un color que viene de una variable.
 */
export function primaryVars(primary: TemplatePrimary): React.CSSProperties {
  const vars: Record<string, string> = {
    "--primary": primary.color,
    "--primary-alt": mix(primary.color, 94, primary.ink),
    "--primary-light": mix(primary.color, 55, "#FFFFFF"),
    "--ink": primary.ink,
    // Superficies que acompañan al fondo (cards, cajas internas, bordes).
    "--card": mix(primary.color, 25, "#FFFFFF"),
    "--card-alt": mix(mix(primary.color, 25, "#FFFFFF"), 95, primary.ink),
    "--line": mix(primary.color, 86, primary.ink),
  };
  for (const a of PRIMARY_ALPHAS) {
    vars[`--primary-a${a}`] = mix(primary.color, a, "transparent");
    vars[`--ink-a${a}`] = mix(primary.ink, a, "transparent");
  }
  return vars as React.CSSProperties;
}
