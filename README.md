# Mostrate

Landing page del servicio **Mostrate** — desarrollo de landing pages para
emprendedores, pequeños negocios y monotributistas en Argentina.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- Deploy en [Vercel](https://vercel.com/)

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/
  layout.tsx              → fuentes (Syne + Inter), metadata, estilos globales
  page.tsx                → landing principal de Mostrate
  globals.css             → base Tailwind + reduced-motion
  templates/              → páginas independientes de templates de clientes
    profesional/
    comercio/
    gastronomia/
    bienestar/
components/
  landing/                → componentes de la landing (Nav, Hero, Servicios, ...)
  templates/              → componentes reutilizables para templates de clientes
lib/
  config.ts               → precios, textos y datos de contacto (ÚNICO lugar a editar)
```

## Editar contenido y precios

Todo el copy editable, los precios y los datos de contacto viven en
[`lib/config.ts`](lib/config.ts). Ningún componente hardcodea estos valores.

- **Precios:** objeto `pricing` (`inicial` / `mensual`).
- **Contacto:** objeto `contact` (email, WhatsApp, ubicación).
- **Secciones:** `hero`, `servicios`, `templates`, `precios`, `contacto`, `footer`.

## Deploy en Vercel

1. Subir el repo a GitHub.
2. Importar el proyecto en Vercel (detecta Next.js automáticamente).
3. Deploy — sin variables de entorno requeridas.
