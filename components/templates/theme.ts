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
 * Color primario: el tono base de la identidad del template (la "tinta" en
 * templates claros, el fondo en templates oscuros). Se combina libremente con
 * los temas de acento (secundario): cada template define 3 primarios pensados
 * para ir bien con sus 3 acentos.
 */
export type TemplatePrimary = {
  id: string;
  /** Nombre visible en la barra de demo */
  name: string;
  /** Color base (hex) */
  color: string;
};

/** Transparencias disponibles como `var(--primary-a<N>)`. */
export const PRIMARY_ALPHAS = [5, 10, 20, 40, 50, 60, 70, 80, 90] as const;

/**
 * Convierte un primario en variables CSS: `--primary` y sus versiones con
 * transparencia (`--primary-a70`, etc.), porque Tailwind no puede aplicar
 * `/70` sobre un color que viene de una variable.
 */
export function primaryVars(primary: TemplatePrimary): React.CSSProperties {
  const vars: Record<string, string> = { "--primary": primary.color };
  for (const a of PRIMARY_ALPHAS) {
    vars[`--primary-a${a}`] = `color-mix(in srgb, ${primary.color} ${a}%, transparent)`;
  }
  return vars as React.CSSProperties;
}
