# 📘 Documentación — Mostrate

> Documento vivo. Acá va **todo**: qué es el proyecto, cómo está armado técnicamente,
> qué hace cada parte y cómo se extiende. Lo vamos actualizando a medida que crece.

---

## 1. Qué es Mostrate

**Mostrate** es un emprendimiento personal que vende **landing pages** para
pequeños negocios, emprendedores y monotributistas en Argentina que no tienen
presencia online (o tienen una desactualizada).

### Modelo de negocio
- Se ofrecen **3-4 templates reutilizables** que se personalizan por cliente.
- Cada cliente tiene **su propio dominio**.
- **Pago único inicial** por diseño y desarrollo.
- **Abono mensual** que cubre hosting, dominio y mantenimiento.

Este repo contiene **dos cosas distintas**:
1. **La landing de Mostrate** (`/`) → la web que *vende el servicio*.
2. **Los templates de clientes** (`/templates/*`) → los diseños que se le
   entregan a cada cliente.

---

## 2. Stack técnico

| Pieza | Tecnología |
|---|---|
| Framework | **Next.js 14** (App Router) |
| Estilos | **Tailwind CSS** 3 |
| Lenguaje | **TypeScript** (strict) |
| Fuentes | **Syne** (títulos) + **Inter** (texto), vía `next/font/google` |
| Deploy | **Vercel** |

Requisitos: Node 18+. Comandos:

```bash
npm install     # instalar dependencias
npm run dev     # desarrollo → http://localhost:3000
npm run build   # build de producción
npm start       # servir el build
```

---

## 3. Estructura de carpetas

```
app/
  layout.tsx                     → carga fuentes, metadata global, estilos
  globals.css                    → base de Tailwind + reduced-motion + scroll offset
  page.tsx                       → LANDING de Mostrate (ensambla las secciones)
  templates/
    profesional/page.tsx         → template Profesional (¡ya desarrollado!)
    comercio/page.tsx            → placeholder (pendiente)
    gastronomia/page.tsx         → placeholder (pendiente)
    bienestar/page.tsx           → placeholder (pendiente)

components/
  landing/                       → secciones de la landing de Mostrate
    Nav.tsx                      → nav fija con blur + hamburger mobile
    Hero.tsx                     → hero con subrayado animado + stats
    SectionHeader.tsx            → encabezado reutilizable (label + título + sub)
    Servicios.tsx                → grid de 4 servicios
    Templates.tsx                → grid de 4 templates (cards linkeables)
    TemplatePreview.tsx          → mockup "mini browser" de cada card
    Precios.tsx                  → 2 planes (precios desde config)
    Contacto.tsx                 → formulario (mailto) + datos
    Footer.tsx
  templates/                     → motor + piezas reutilizables de los templates
    theme.ts                     → tipo TemplateTheme + helper de variables CSS
    ThemeProvider.tsx            → aplica el tema activo y monta el selector
    ThemeSwitcher.tsx            → control flotante de 3 temas
    TemplateShell.tsx            → wrapper base (setea --tpl-accent)
    PlaceholderTemplate.tsx      → placeholder para templates aún no hechos
    profesional/                 → secciones del template Profesional
      Nav.tsx  Hero.tsx  Stats.tsx  Servicios.tsx
      Proceso.tsx  Sobre.tsx  Contacto.tsx  Footer.tsx

lib/
  config.ts                      → precios, textos y contacto de la LANDING de Mostrate
  templates/
    profesional.ts               → temas + contenido del template Profesional (demo)
```

---

## 4. Sistema de diseño

### Paleta (landing de Mostrate — dark)
Definida en [`tailwind.config.ts`](tailwind.config.ts) como colores custom:

| Token Tailwind | Valor | Uso |
|---|---|---|
| `bg` | `#0F1117` | Fondo |
| `surface` | `#1A1D27` | Cards / superficies |
| `content` | `#F0EEE9` | Texto principal |
| `muted` | `rgba(240,238,233,0.5)` | Texto secundario |
| `accent` | `#4F7FFF` | Acento (azul) |
| `accent-dim` | `rgba(79,127,255,0.13)` | Acento tenue |
| `line` | `rgba(240,238,233,0.1)` | Bordes |

Radio general: **12px** (`rounded` por defecto).

### Tipografías
Cargadas en [`app/layout.tsx`](app/layout.tsx) y expuestas como variables CSS
(`--font-syne`, `--font-inter`) → usables con `font-syne` / `font-inter`.

- **Syne** 700/800 → títulos (`h1`, `h2`, `h3`, logos).
- **Inter** 400/500/600 → texto.

### Responsive
Se usa `clamp()` para tamaños fluidos + breakpoints de Tailwind y arbitrarios
(`max-[767px]`, `max-[400px]`). Cubre: monitor grande (1440+), notebook grande,
notebook chica, tablet, celu grande, celu chico.

### Animaciones
- **Subrayado del hero**: keyframe `underline-in` (definido en Tailwind), se dispara al cargar.
- **Dot pulsante** del eyebrow: keyframe `pulse`.
- Respeta `prefers-reduced-motion` (ver `globals.css`).

---

## 5. La landing de Mostrate (`/`)

Ensamblada en [`app/page.tsx`](app/page.tsx). Secciones en orden:

1. **Nav** — fija, logo `mos·trate`, links, CTA "Hablemos", hamburger en mobile.
2. **Hero** — headline con subrayado animado, subtítulo, 2 botones, stats.
3. **Servicios** — 4 cards (diseño, dominio/hosting, responsive, mantenimiento).
4. **Templates** — 4 cards con preview; cada una linkea a `/templates/<slug>`.
5. **Precios** — 2 planes; los precios salen de `config.ts`.
6. **Contacto** — formulario (abre el mail con los datos precargados) + info.
7. **Footer**.

### 🔧 Config central — `lib/config.ts`
**Todo el contenido editable de la landing vive acá.** Ningún componente
hardcodea textos ni precios. Bloques principales:

- `pricing` → **precios** (`inicial`, `mensual`). *Editá esto para cambiar los precios.*
- `contact` → email, WhatsApp, ubicación.
- `site`, `nav`, `hero`, `servicios`, `templates`, `precios`, `contacto`, `footer`.

---

## 6. Sistema de templates de clientes

Cada template es una **página independiente** en `/app/templates/<slug>/`,
pensada para escalar (a futuro, cada cliente = su dominio).

### Principio
- El **contenido** de cada template vive en `lib/templates/<slug>.ts` (copy + temas).
- Las **secciones visuales** viven en `components/templates/<slug>/`.
- La **página** (`app/templates/<slug>/page.tsx`) solo ensambla y envuelve con el
  `ThemeProvider`.

Cada template es **visualmente distinto** a propósito, para mostrar versatilidad.

### 🎨 Sistema de theming (3 temas por template)
Motor reutilizable en `components/templates/`:

- [`theme.ts`](components/templates/theme.ts) — define el tipo `TemplateTheme`
  (`accent`, `accentStrong`, `accentSoft`, `accentContrast`) y `themeVars()`.
- [`ThemeProvider.tsx`](components/templates/ThemeProvider.tsx) — guarda el tema
  activo, lo inyecta como **variables CSS** sobre un wrapper y monta el selector.
- [`ThemeSwitcher.tsx`](components/templates/ThemeSwitcher.tsx) — control flotante
  (abajo a la derecha) para previsualizar los 3 temas.

**Cómo lo consumen las secciones:** usan `var(--accent)`, `var(--accent-strong)`,
`var(--accent-soft)`, `var(--accent-contrast)` (ej. `bg-[var(--accent)]`).
No saben qué tema está activo → cambiar de tema solo reescribe las variables.

**Para agregar/editar temas:** tocás el array `<template>Themes` en el archivo de
contenido del template (ej. `profesionalThemes` en `lib/templates/profesional.ts`).

### 🔤 Sistema de tipografías (mismo patrón, para títulos)
Igual que el theming de color, pero para la fuente de los títulos:

- [`font.ts`](components/templates/font.ts) — tipo `TemplateFont` (`id`, `name`,
  `heading`), helper `fontVars()`, y `templateFonts` (lista compartida de 4
  opciones: Syne, Playfair Display, Space Grotesk, Poppins). Las 3 fuentes
  extra se cargan como variables CSS en [`app/layout.tsx`](app/layout.tsx)
  junto a Syne/Inter.
- `ThemeProvider` inyecta la fuente activa como `--tpl-font-heading` (usa
  `templateFonts` por defecto si el template no pasa su propio array).
- [`FontSwitcher.tsx`](components/templates/FontSwitcher.tsx) — control
  flotante (arriba del de temas) para previsualizar las 4 tipografías.

**Cómo lo consumen las secciones:** los títulos usan
`font-[family-name:var(--tpl-font-heading)]` en vez de una clase `font-syne`
fija. La landing de Mostrate y `PlaceholderTemplate` no usan esto — mantienen
Syne fijo a propósito, porque no son templates elegibles por el visitante.

### ↩️ Volver a Mostrate
[`BackToSite.tsx`](components/templates/BackToSite.tsx) — link flotante
(abajo a la izquierda) que monta automáticamente `ThemeProvider` en todo
template, para no quedar "encerrado" dentro de la demo.

---

## 7. Templates desarrollados

### 7.1 Profesional (referencia)

Rubro: **servicios profesionales** (contadores, abogados, consultores).
Cliente demo: **"Estudio Rivas — Contador Público"**.

- **Estilo:** fondo claro/corporativo (distinto al dark de Mostrate).
- **Contenido:** [`lib/templates/profesional.ts`](lib/templates/profesional.ts).
- **Secciones** ([`components/templates/profesional/`](components/templates/profesional/)):
  Nav (sticky claro) · Hero (2 columnas + mini-panel financiero) · Stats (barra
  color pleno) · Servicios (grid tipo tabla) · Proceso (3 pasos) · Sobre
  (bio + testimonio superpuesto) · Contacto (form mailto) · Footer.
- **Temas:** Azul ejecutivo · Esmeralda · Bordó.

Sirve de **patrón de referencia** para construir los demás templates.

### 7.2 Comercio

Rubro: **tiendas y locales** (productos físicos, venta por WhatsApp).
Cliente demo: **"Casa Bonita — Deco & Hogar"**.

- **Estilo:** fondo crema cálido, orientado a catálogo de productos y venta
  por WhatsApp (distinto al corporativo de Profesional).
- **Contenido:** [`lib/templates/comercio.ts`](lib/templates/comercio.ts).
- **Secciones** ([`components/templates/comercio/`](components/templates/comercio/)):
  Nav (con barra de anuncio) · Hero (collage de tiles de producto) ·
  Categorías · Productos (grid con precios) · Promo (banner de oferta) ·
  Beneficios (envíos, medios de pago) · Local (horarios + WhatsApp) · Footer.
- **Temas:** Mandarina · Frambuesa · Uva.

### 7.3 Gastronomía

Rubro: **restaurantes, cantinas, cafés**. Cliente demo: **"Cantina Sorrento"**
— cantina ítalo-argentina de barrio (San Telmo, CABA).

- **Estilo:** deliberadamente **NO** es la landing "tipo SaaS" de los otros
  dos templates (hero de 2 columnas + card, botones pill sólidos, grid de
  tarjetas). Usa un lenguaje **editorial / carta de restaurante impresa**,
  inspirado en sitios reales de restaurantes (Fabric Sushi, Kansas Grill &
  Bar): tipografía serif grande, mucho espacio negativo, sin botones
  rellenos (todo bordes finos o texto subrayado), fondo casi negro y cálido
  (`#0B0906`) con una textura de grano sutil (`GrainOverlay.tsx`, SVG
  `feTurbulence`) para que no se sienta "plano".
- **Tipografía por defecto:** Playfair Display (serif), no Syne — es la
  única de las 4 tipografías compartidas (`components/templates/font.ts`)
  que transmite "carta de restaurante". Se define reordenando la lista en
  `gastronomiaFonts` (en `lib/templates/gastronomia.ts`); el visitante
  igual puede cambiarla desde el FontSwitcher.
- **Contenido:** [`lib/templates/gastronomia.ts`](lib/templates/gastronomia.ts).
- **Secciones** ([`components/templates/gastronomia/`](components/templates/gastronomia/)):
  - Nav — minimal, sin botón pill; el CTA es un link con subrayado de acento.
  - Hero — una sola columna, título enorme en itálica, regla horizontal +
    fila subtítulo/acciones estilo masthead de revista (no el hero de 2
    columnas con card de los otros templates).
  - **Nosotros** — deliberadamente mínima: una frase grande en itálica + un
    dato de contexto, sin caja, sin bio ni testimonios (a pedido explícito,
    para no restarle protagonismo al menú).
  - **Menú** ([`Menu.tsx`](components/templates/gastronomia/Menu.tsx)) —
    sección central, con estética de carta impresa: índice numerado de
    categorías (en vez de tabs con pill) y cada plato con una línea de
    puntos entre el nombre y el precio (`border-dotted`), no tarjetas.
    Categorías editables 100% desde `gastronomia.ts` (`menu.categories`) —
    agregar o quitar una no toca el componente. Incluye el **toggle
    "mostrar/ocultar precios"** (estado propio, `useState` local — distinto
    de ThemeSwitcher/FontSwitcher porque es un control de contenido
    específico de este template) y un destacado de "plato del día" que
    reutiliza el dato `hero.card`.
  - **Ubicación** — dirección/horarios en tipografía grande + las 3
    modalidades (salón/reservas, retiro, delivery) como lista numerada
    separada por líneas, sin íconos en badges de color; contenido pensado
    como punto de partida razonable a falta de detalle del cliente real.
  - Contacto — formulario con inputs subrayados (sin caja), orientado a
    reservas · Footer minimal.
- **Temas:** Terracota · Vino · Oliva (paleta cálida, de cocina). A
  diferencia de los otros templates, el acento **nunca se usa como fondo
  sólido de botón** — solo en texto, líneas y el destacado del menú, para
  sostener el lenguaje editorial.

### 7.4 Bienestar

Rubro: **gimnasios, estudios de entrenamiento, nutricionistas, coaches**.
Cliente demo: **"Núcleo Training Club"** — estudio boutique de entrenamiento
funcional en Palermo, CABA. Inspirado en sitios reales de gimnasios (ej.
onfit.com.ar): estadísticas dinámicas, catálogo de clases con intensidad,
horarios y planes.

- **Estilo:** cuarto lenguaje visual del proyecto, deliberadamente **bold y
  atlético** — nada que ver con los otros tres. Negro puro (`#0A0A0A`) +
  acento neón usado como **fondo sólido** de botones (lo opuesto a
  Gastronomía), tipografía en mayúsculas con tracking apretado, y bloques
  angulares con `clip-path` (cortes en diagonal en botones, tarjetas y
  badges) en vez de bordes redondeados o hairlines.
- **Tipografía por defecto:** Space Grotesk (técnica/bold) — reordenada en
  `bienestarFonts`, igual mecanismo que `gastronomiaFonts`.
- **Contenido:** [`lib/templates/bienestar.ts`](lib/templates/bienestar.ts).
- **Secciones** ([`components/templates/bienestar/`](components/templates/bienestar/)):
  - Nav — CTA en botón sólido con corner-cut.
  - Hero — título gigante en mayúsculas + bloque de acento angular
    decorativo de fondo + **stats animados** (`Counter.tsx`, cuentan desde 0
    al montar, respeta `prefers-reduced-motion`).
  - **Clases** — grid de modalidades con badge de intensidad (Alta/Media/Baja,
    codificado por color). Editable 100% desde `bienestar.ts` (`clases.items`).
  - **Horarios** — grilla semanal (día × franjas horarias), la única sección
    de este tipo en todo el proyecto; contenido en `horarios.days`.
  - **Coaches** — grid de entrenadores con iniciales en badge angular.
  - **Planes** — pricing de 3 planes, la tarjeta destacada (`featured`) usa
    fondo sólido de acento + corner-cut; mismo patrón conceptual que la
    sección Precios de la landing de Mostrate pero con esta estética.
  - Contacto (orientado a "clase de prueba gratis") · Footer.
- **Temas:** Lima · Naranja · Cian (paleta neón, energía de gimnasio).

---

## 8. Cómo agregar un nuevo TEMPLATE

> Automatizable con la skill `nuevo-template` (ver sección 10).

1. Crear `lib/templates/<slug>.ts` con:
   - `<slug>Themes: TemplateTheme[]` (3 temas).
   - objeto de contenido (nav, hero, secciones, footer).
2. Crear secciones en `components/templates/<slug>/` (diseño propio del rubro).
3. Reemplazar `app/templates/<slug>/page.tsx` para ensamblar dentro de
   `<ThemeProvider themes={<slug>Themes}>`.
4. (Opcional) Actualizar la card en `lib/config.ts → templates.items`.
5. `npx tsc --noEmit` para verificar.

---

## 9. Cómo agregar un nuevo CLIENTE (a futuro)

> Automatizable con la skill `nuevo-cliente` (ver sección 10).
> La arquitectura definitiva multi-cliente se define cuando salga el primer cliente real.

Idea general: clonar el archivo de contenido de un template con los datos reales
del cliente, elegir su tema, y publicarlo en su propio dominio.

---

## 10. Skills (automatización)

Skills de proyecto en `.claude/skills/`. Se invocan con `/nombre-skill`.

| Skill | Para qué |
|---|---|
| `nuevo-template` | Scaffold completo de un template nuevo siguiendo el patrón de Profesional. |
| `nuevo-cliente` | Generar la instancia de un cliente a partir de un template existente. |

*(Se irán agregando más a medida que aparezcan tareas repetitivas.)*

---

## 11. Deploy en Vercel

1. Subir el repo a GitHub.
2. Importar en Vercel (detecta Next.js solo).
3. Deploy — sin variables de entorno.
4. Para clientes: cada uno con su dominio (config de dominios en Vercel).

---

## 12. Estado actual / pendientes

- [x] Landing de Mostrate completa y responsive.
- [x] Motor de theming reutilizable (3 temas por template).
- [x] Template **Profesional** desarrollado.
- [x] Template **Comercio** desarrollado.
- [x] Template **Gastronomía** desarrollado.
- [x] Template **Bienestar** desarrollado.
- [ ] Backend real del formulario de contacto (hoy abre el cliente de mail).
- [ ] Definir arquitectura multi-cliente (dominio por cliente).

---

## 13. Changelog

- **2026-07-05** — Setup inicial: landing de Mostrate, estructura de carpetas,
  config central, motor de theming, template Profesional con 3 temas, y esta doc.
- **2026-08-25** — Ancho del contenedor (`max-w-shell`) pasado a `clamp()`
  responsivo en vez de un pixel fijo, para que el margen lateral se vea
  proporcional en cualquier ancho de pantalla; alineación del Nav de Mostrate
  corregida al mismo contenedor que el resto de las secciones. Sistema de
  tipografías para templates de clientes (`font.ts` + `FontSwitcher`, 4
  opciones) y link flotante `BackToSite` para volver a Mostrate desde
  cualquier template. Template **Gastronomía** desarrollado completo (cliente
  demo "Cantina Sorrento"): menú por categorías con toggle de precios,
  sección "Nosotros" minimalista, y sección de ubicación/retiro/delivery.
- **2026-08-25 (rediseño)** — Primera versión de Gastronomía reemplazada por
  completo: pasó de reusar el lenguaje visual "SaaS" de Profesional/Comercio
  (recoloreado a oscuro) a un lenguaje editorial propio inspirado en sitios
  reales de restaurantes — tipografía Playfair por defecto, botones sin
  relleno, menú con líneas de puntos en vez de tarjetas, y textura de grano
  (`GrainOverlay.tsx`) sobre el fondo.
- **2026-08-25** — Template **Bienestar** desarrollado (cliente demo "Núcleo
  Training Club"): cuarto lenguaje visual del proyecto — negro puro + acento
  neón en bloques angulares (`clip-path`), stats animados al montar
  (`Counter.tsx`), catálogo de clases con badge de intensidad, grilla de
  horarios semanal, coaches y planes de membresía. Con esto, los 4 templates
  de la landing (Profesional, Comercio, Gastronomía, Bienestar) quedan
  completos.
