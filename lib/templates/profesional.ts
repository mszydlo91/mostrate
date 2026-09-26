/**
 * Contenido del template "Profesional" (servicios profesionales:
 * contadores, abogados, consultores).
 *
 * Este archivo representa el contenido de UN cliente de ejemplo. Cuando se
 * venda este template a un cliente real, se clona este archivo con sus datos.
 * Todo el copy editable vive acá y lo comparten los 3 diseños del template.
 */
import type { TemplatePrimary, TemplateTheme } from "@/components/templates/theme";
import type { TemplateFont } from "@/components/templates/font";
import type { TemplateDesign } from "@/components/templates/design";

/* ── Colores primarios (tinta de textos y bloques oscuros); se combinan con los temas de acento ── */
export const profesionalPrimaries: TemplatePrimary[] = [
  { id: "navy", name: "Navy", color: "#16182B" },
  { id: "grafito", name: "Grafito", color: "#23262D" },
  { id: "petroleo", name: "Petróleo", color: "#0F2A33" },
];

/* ── Temas de color disponibles para este template ── */
export const profesionalThemes: TemplateTheme[] = [
  {
    id: "azul",
    name: "Azul ejecutivo",
    accent: "#2F5FE0",
    accentStrong: "#2149B8",
    accentSoft: "rgba(47,95,224,0.09)",
    accentContrast: "#FFFFFF",
  },
  {
    id: "esmeralda",
    name: "Esmeralda",
    accent: "#0E9F6E",
    accentStrong: "#0B7C56",
    accentSoft: "rgba(14,159,110,0.09)",
    accentContrast: "#FFFFFF",
  },
  {
    id: "bordo",
    name: "Bordó",
    accent: "#B23A54",
    accentStrong: "#8F2C43",
    accentSoft: "rgba(178,58,84,0.09)",
    accentContrast: "#FFFFFF",
  },
];

/* ── Tipografías de títulos para el selector ── */
export const profesionalFonts: TemplateFont[] = [
  { id: "newsreader", name: "Newsreader — editorial", heading: "var(--font-newsreader)" },
  { id: "space-grotesk", name: "Space Grotesk — técnica", heading: "var(--font-space-grotesk)" },
  { id: "playfair", name: "Playfair — clásica", heading: "var(--font-playfair)" },
  { id: "jakarta", name: "Plus Jakarta — moderna", heading: "var(--font-jakarta)" },
];

/* ── Diseños disponibles (mismo contenido, distinta composición) ── */
export const profesionalDesigns: TemplateDesign[] = [
  { id: "1", name: "Clásico", theme: "azul", primary: "navy", font: "newsreader" },
  { id: "2", name: "Técnico", theme: "esmeralda", primary: "petroleo", font: "space-grotesk" },
  { id: "3", name: "Boutique", theme: "bordo", primary: "navy", font: "newsreader" },
];

export const profesional = {
  business: {
    name: "Estudio Rivas",
    initials: "ER",
    owner: "Martín Rivas",
    title: "Contador Público",
    university: "UBA",
    matricula: "CPCECABA T° 392 F° 140",
  },

  nav: {
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Proceso", href: "#proceso" },
      { label: "Sobre mí", href: "#sobre" },
      { label: "Contacto", href: "#contacto" },
    ],
    cta: { label: "Agendar consulta", href: "#contacto" },
  },

  hero: {
    eyebrow: "Contador Público · Matrícula CPCECABA",
    title: {
      before: "Tus números, ordenados y ",
      highlight: "bajo control",
      after: ".",
    },
    subtitle:
      "Asesoría contable e impositiva para monotributistas, PyMEs y profesionales independientes. Claridad, cumplimiento y tranquilidad todo el año.",
    primary: { label: "Agendar una consulta", href: "#contacto" },
    secondary: { label: "Ver servicios", href: "#servicios" },
    highlights: ["+15 años de experiencia", "Respuesta en 24 hs", "100% online"],
    // Panel decorativo del hero: muestra "cómo se ve" tener los números al día.
    panel: {
      title: "Panel del cliente",
      status: "Actualizado hoy",
      label: "Resultado del período",
      amount: "$ 1.240.500",
      trend: "+12,4% vs. mes anterior",
      bars: [
        { month: "Oct", value: 40 },
        { month: "Nov", value: 55 },
        { month: "Dic", value: 48 },
        { month: "Ene", value: 65 },
        { month: "Feb", value: 78 },
        { month: "Mar", value: 92 },
      ],
      obligationsLabel: "Estado de obligaciones",
      obligations: [
        { label: "IVA presentado", status: "Al día" },
        { label: "Ganancias y Bienes Personales", status: "Al día" },
        { label: "Libro de Sueldos Digital", status: "Presentado" },
      ],
      nextDue: "Próximo vencimiento: 18 de este mes (anticipo IIBB)",
    },
  },

  stats: [
    { num: "+15", label: "Años de trayectoria" },
    { num: "+200", label: "Clientes acompañados" },
    { num: "24 hs", label: "Tiempo de respuesta" },
    { num: "100%", label: "Gestión online" },
  ],

  servicios: {
    label: "Servicios",
    title: "En qué te puedo ayudar",
    subtitle:
      "Todo lo contable e impositivo resuelto por una sola persona de confianza.",
    // Agrupación usada por el diseño "Técnico" (catálogo en dos columnas).
    groups: [
      { id: "personas", title: "Personas e independientes", note: "Monotributo y autónomos" },
      { id: "empresas", title: "Sociedades y PyMEs", note: "Empresas y equipos" },
    ],
    cta: "Consultar",
    items: [
      {
        num: "01",
        group: "personas",
        tag: "Profesionales y freelancers",
        title: "Monotributo y autónomos",
        desc: "Altas, recategorizaciones y cumplimiento mensual sin dolores de cabeza.",
        details: ["Alta y CUIT", "Recategorizaciones", "Facturación electrónica"],
      },
      {
        num: "02",
        group: "personas",
        tag: "Cumplimiento fiscal",
        title: "Impuestos y AFIP",
        desc: "IVA, Ganancias y todas las presentaciones que pide el fisco, en tiempo y forma.",
        details: ["DDJJ de IVA", "Ganancias", "Bienes Personales"],
      },
      {
        num: "03",
        group: "empresas",
        tag: "Nómina y laboral",
        title: "Sueldos y cargas sociales",
        desc: "Liquidación de haberes y aportes para vos y tu equipo, mes a mes.",
        details: ["Formulario 931", "Libro de Sueldos Digital", "Altas y bajas"],
      },
      {
        num: "04",
        group: "empresas",
        tag: "Estratégico",
        title: "Asesoría para PyMEs",
        desc: "Balances, análisis de rentabilidad y decisiones con respaldo profesional.",
        details: ["Balances", "Planificación fiscal", "Costos y márgenes"],
      },
    ],
  },

  proceso: {
    label: "Cómo trabajo",
    title: "Simple, claro y sin sorpresas",
    steps: [
      {
        num: "01",
        title: "Diagnóstico",
        desc: "Charlamos sobre tu situación actual y tus objetivos. Sin costo y sin compromiso.",
        meta: "Charla inicial sin cargo",
      },
      {
        num: "02",
        title: "Plan a medida",
        desc: "Definimos qué necesitás, los plazos y un abono claro desde el primer día.",
        meta: "Propuesta transparente",
      },
      {
        num: "03",
        title: "Gestión continua",
        desc: "Me ocupo mes a mes de tus obligaciones para que vos te ocupes de tu negocio.",
        meta: "Tranquilidad todo el año",
      },
    ],
  },

  sobre: {
    label: "Sobre mí",
    title: "Un contador cercano, no un número más",
    paragraphs: [
      "Soy Martín Rivas, Contador Público matriculado con más de 15 años acompañando a emprendedores y PyMEs de todo el país.",
      "Creo en un asesoramiento claro, en tu idioma y sin letra chica. Mi objetivo es que dejes de preocuparte por impuestos y vencimientos, y puedas enfocarte en crecer.",
    ],
    photo: {
      src: "/templates/profesional/retrato.jpg",
      alt: "Martín Rivas, Contador Público",
    },
    // Frase propia del profesional (la usa el diseño "Boutique").
    quote:
      "La tranquilidad no es pagar menos porque sí: es saber que cada peso está justificado y en orden.",
    credentials: [
      { title: "Contador Público", detail: "Universidad de Buenos Aires" },
      { title: "Matrícula CPCECABA", detail: "T° 392 F° 140" },
      { title: "Especialista PyME", detail: "Tributación y sociedades" },
    ],
  },

  testimonio: {
    quote:
      "Desde que trabajo con el Estudio Rivas dejé de vivir pendiente de los vencimientos. Todo claro, a tiempo y explicado en criollo.",
    author: "Laura Gómez",
    role: "Diseñadora independiente · Monotributista",
  },

  contacto: {
    label: "Contacto",
    title: "Agendá tu primera consulta",
    subtitle:
      "Contame en qué estás y coordinamos una charla sin cargo para ver cómo puedo ayudarte.",
    email: "hola@estudiorivas.com.ar",
    phone: "+54 9 11 5555-5555",
    location: "CABA · Atención en todo el país (online)",
    labels: { email: "Email", phone: "Teléfono", location: "Ubicación" },
    privacy: "Tu información está protegida por el secreto profesional.",
    form: {
      title: "Escribime tu consulta",
      note: "Al enviar se abre tu correo con los datos precargados.",
      name: { label: "Nombre", placeholder: "Tu nombre" },
      email: { label: "Email", placeholder: "tucorreo@ejemplo.com" },
      area: {
        label: "¿En qué te ayudo?",
        placeholder: "Elegí un área",
        options: [
          "Monotributo y autónomos",
          "Impuestos y AFIP",
          "Sueldos y cargas sociales",
          "Asesoría para PyMEs",
          "Otra consulta",
        ],
      },
      message: {
        label: "Contame tu situación (opcional)",
        placeholder: "Contame brevemente tu situación...",
      },
      submit: "Enviar consulta",
    },
  },

  footer: {
    tagline: "Contador Público · CABA, Argentina",
    description:
      "Asesoría contable e impositiva para monotributistas, profesionales y PyMEs de todo el país.",
  },
};

export type ProfesionalContent = typeof profesional;
