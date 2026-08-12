---
name: nuevo-template
description: Scaffold completo de un template de cliente nuevo para Mostrate (ej. comercio, gastronomia, bienestar, o uno custom). Usar cuando el usuario pida "crear/armar el template X", "nuevo template", "hacé el template de <rubro>". Sigue el patrón de referencia del template Profesional.
---

# Skill: nuevo-template

Crea un template de cliente nuevo siguiendo la arquitectura ya establecida en el
proyecto (ver `DOCS.md` secciones 6-8). El template **Profesional** es la
referencia canónica.

## Datos que necesito (preguntar si faltan)
- **slug**: identificador en kebab-case (ej. `comercio`). Debe existir ya la ruta
  `app/templates/<slug>/page.tsx` (hoy es un placeholder) o se crea.
- **rubro / público**: para qué negocios es (ej. "tiendas y locales").
- **cliente demo**: nombre ficticio + rubro concreto para poblar el contenido.
- **estilo visual**: cómo diferenciarlo de los otros (¡cada template debe verse
  distinto! — dark vs claro, editorial, visual/producto, minimal, etc.).
- **3 temas de color**: nombres + hex de acento. Si no los dan, proponer 3
  coherentes con el rubro.

## Pasos

1. **Contenido** — Crear `lib/templates/<slug>.ts` copiando la estructura de
   `lib/templates/profesional.ts`:
   - Exportar `<slug>Themes: TemplateTheme[]` con **3** temas
     (`accent`, `accentStrong`, `accentSoft`, `accentContrast`).
   - Exportar el objeto de contenido con todo el copy (nav, hero, secciones,
     footer). Todo el texto editable va acá, nada hardcodeado en componentes.

2. **Secciones** — Crear `components/templates/<slug>/` con las secciones del
   template. **Diseño propio del rubro** (no copiar el layout de Profesional;
   variar estructura, densidad, tratamiento visual). Reglas:
   - Consumir colores SOLO vía `var(--accent)`, `var(--accent-strong)`,
     `var(--accent-soft)`, `var(--accent-contrast)` (nunca hex de acento hardcodeado).
   - Títulos con `font-syne`, texto con `font-inter`.
   - Componentes con interacción (nav mobile, forms) llevan `"use client"`.
   - Secciones navegables con `id` para el scroll ancla.

3. **Página** — Reemplazar `app/templates/<slug>/page.tsx`:
   - Envolver todo en `<ThemeProvider themes={<slug>Themes}>`.
   - Wrapper con el fondo/tipografía base del template.
   - Exportar `metadata` (title/description desde el contenido).

4. **Card en la landing** — Verificar/ajustar la entrada del template en
   `lib/config.ts → templates.items` (name, desc, tag, accent, gradient, slug).

5. **Verificar** — Correr `npx tsc --noEmit`. Si hay un dev server corriendo,
   revisar su log; si no, `npm run build`.

6. **Documentar** — Agregar una sección del template en `DOCS.md` (como la
   sección 7 de Profesional) y actualizar el checklist de la sección 12 +
   changelog (sección 13). Usar la fecha real del sistema, no inventarla.

## Checklist de calidad
- [ ] Se ve claramente distinto a los otros templates.
- [ ] Los 3 temas cambian todo el acento en vivo (probar el ThemeSwitcher).
- [ ] Responsive en mobile/tablet/desktop.
- [ ] `tsc --noEmit` sin errores.
- [ ] Contenido 100% en `lib/templates/<slug>.ts`.
- [ ] DOCS.md actualizado.
