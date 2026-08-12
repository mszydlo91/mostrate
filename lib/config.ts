/**
 * config.ts — Fuente única de verdad para textos, precios y datos de contacto
 * de la landing de Mostrate.
 *
 * Editá SOLO este archivo para actualizar precios, copy, links de contacto,
 * servicios, templates, etc. Ningún componente hardcodea estos valores.
 */

/* ─────────────────────────────  PRECIOS  ───────────────────────────── */
/* Editá acá los precios. Ejemplos: "USD 200", "$150.000", "A consultar". */
export const pricing = {
  inicial: "A consultar",
  mensual: "A consultar",
};

/* ─────────────────────────────  DATOS DE CONTACTO  ─────────────────── */
export const contact = {
  email: "hola@mostrate.com.ar",
  whatsapp: {
    label: "WhatsApp disponible",
    // Número en formato internacional sin "+" ni espacios, ej: "5491122334455".
    // Dejar vacío si todavía no hay número.
    number: "",
  },
  location: "Buenos Aires, Argentina",
};

/* ─────────────────────────────  SITIO / MARCA  ─────────────────────── */
export const site = {
  name: "Mostrate",
  // El logo se pinta como: [first][accent] → "mos" + "trate" (acento en color)
  logo: { first: "mos", accent: "trate" },
  description:
    "Landing pages profesionales para emprendedores, pequeños negocios y monotributistas en Argentina.",
};

/* ─────────────────────────────  NAV  ───────────────────────────────── */
export const nav = {
  links: [
    { label: "Servicios", href: "#servicios" },
    { label: "Templates", href: "#templates" },
    { label: "Precios", href: "#precios" },
  ],
  cta: { label: "Hablemos", href: "#contacto" },
};

/* ─────────────────────────────  HERO  ──────────────────────────────── */
export const hero = {
  eyebrow: "Disponible para nuevos proyectos",
  // El título se arma en 3 partes; "highlight" lleva el subrayado animado.
  title: {
    before: "Tu negocio merece una ",
    highlight: "presencia digital",
    after: " que lo represente.",
  },
  subtitle:
    "Creamos landing pages profesionales para emprendedores y pequeños negocios. Rápido, sin vueltas, a un precio accesible.",
  actions: {
    primary: { label: "Ver templates", href: "#templates" },
    secondary: { label: "Contactar", href: "#contacto" },
  },
  stats: [
    { num: "7 días", label: "Tiempo de entrega" },
    { num: "100%", label: "Personalizado" },
    { num: "Sin sorpresas", label: "Precio fijo desde el día uno" },
  ],
};

/* ─────────────────────────────  SERVICIOS  ─────────────────────────── */
export const servicios = {
  label: "Qué ofrecemos",
  title: ["Todo lo que necesitás", "para estar online"],
  subtitle: "Nos encargamos de todo el proceso, vos solo nos mandás el contenido.",
  items: [
    {
      icon: "🎨",
      title: "Diseño personalizado",
      desc: "Adaptamos el template a la identidad de tu negocio: colores, tipografías, imágenes y textos.",
    },
    {
      icon: "🌐",
      title: "Dominio y hosting",
      desc: "Gestionamos el dominio y el hosting por vos. Tu página disponible en internet, sin complicaciones técnicas.",
    },
    {
      icon: "📱",
      title: "Diseño responsive",
      desc: "Tu página se ve bien en celular, tablet y computadora. Siempre.",
    },
    {
      icon: "🔧",
      title: "Mantenimiento mensual",
      desc: "Cambios de contenido, actualizaciones y soporte incluidos en el abono mensual.",
    },
  ],
};

/* ─────────────────────────────  TEMPLATES  ─────────────────────────── */
export const templates = {
  label: "Templates",
  title: ["Elegís el diseño,", "nosotros lo adaptamos"],
  subtitle:
    "Cuatro diseños pensados para distintos rubros. Mismo proceso, resultado único para cada cliente.",
  items: [
    {
      slug: "profesional",
      name: "Profesional",
      desc: "Ideal para contadores, abogados, consultores.",
      tag: "Servicios profesionales",
      accent: "#4F7FFF",
      gradient: "linear-gradient(135deg, #1a2a4a 0%, #0d1b2e 100%)",
    },
    {
      slug: "comercio",
      name: "Comercio",
      desc: "Para tiendas, locales, productos físicos.",
      tag: "Comercio local",
      accent: "#9B59B6",
      gradient: "linear-gradient(135deg, #2a1a3a 0%, #1b0d2e 100%)",
    },
    {
      slug: "gastronomia",
      name: "Gastronomía",
      desc: "Restaurantes, cafés, deliveries, catering.",
      tag: "Gastronomía",
      accent: "#E67E22",
      gradient: "linear-gradient(135deg, #2a1a10 0%, #1a0d08 100%)",
    },
    {
      slug: "bienestar",
      name: "Bienestar",
      desc: "Gimnasios, nutricionistas, psicólogos, coaches.",
      tag: "Salud y bienestar",
      accent: "#27AE60",
      gradient: "linear-gradient(135deg, #1a2a1a 0%, #0d1e0d 100%)",
    },
  ],
};

/* ─────────────────────────────  PRECIOS (SECCIÓN)  ─────────────────── */
export const precios = {
  label: "Precios",
  title: "Sin letras chicas",
  subtitle:
    "Un pago inicial para arrancar, y un abono mensual para que todo funcione siempre.",
  note: "¿Tenés dudas? Hablemos antes de decidir — sin compromisos.",
  plans: [
    {
      name: "Pago inicial",
      price: pricing.inicial,
      period: "único · incluye diseño y desarrollo",
      featured: false,
      badge: "",
      features: [
        "Template personalizado con tu contenido",
        "Dominio propio (.com.ar o .com)",
        "Hasta 5 secciones",
        "Entrega en 7 días hábiles",
      ],
      cta: { label: "Consultar", href: "#contacto", style: "outline" as const },
    },
    {
      name: "Abono mensual",
      price: pricing.mensual,
      period: "por mes · a partir del segundo mes",
      featured: true,
      badge: "Más elegido",
      features: [
        "Hosting y dominio incluidos",
        "Hasta 2 cambios de contenido por mes",
        "Soporte ante cualquier problema",
        "Página siempre online",
      ],
      cta: { label: "Empezar ahora", href: "#contacto", style: "solid" as const },
    },
  ],
};

/* ─────────────────────────────  CONTACTO (SECCIÓN)  ────────────────── */
export const contacto = {
  label: "Contacto",
  title: "¿Arrancamos?",
  subtitle: "Contanos un poco sobre tu negocio y te respondemos a la brevedad.",
  form: {
    name: { label: "Nombre", placeholder: "Tu nombre o el de tu negocio" },
    email: { label: "Email", placeholder: "tucorreo@ejemplo.com" },
    rubro: {
      label: "Rubro",
      placeholder: "Seleccioná tu rubro",
      options: [
        "Servicios profesionales",
        "Comercio local",
        "Gastronomía",
        "Salud y bienestar",
        "Otro",
      ],
    },
    message: {
      label: "Mensaje (opcional)",
      placeholder: "Contanos brevemente qué necesitás...",
    },
    submit: "Enviar consulta",
  },
};

/* ─────────────────────────────  FOOTER  ────────────────────────────── */
export const footer = {
  text: `© ${new Date().getFullYear()} Mostrate · Hecho con cuidado en Buenos Aires`,
};
