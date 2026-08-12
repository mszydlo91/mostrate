/**
 * Contenido del template "Profesional" (servicios profesionales:
 * contadores, abogados, consultores).
 *
 * Este archivo representa el contenido de UN cliente de ejemplo. Cuando se
 * venda este template a un cliente real, se clona este archivo con sus datos.
 * Todo el copy editable vive acá.
 */
import type { TemplateTheme } from "@/components/templates/theme";

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

export const profesional = {
  business: {
    name: "Estudio Rivas",
    initials: "ER",
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
    // Datos del "mini panel" decorativo del hero
    card: {
      label: "Resultado del período",
      amount: "$ 1.240.500",
      trend: "+12,4% vs. mes anterior",
      rows: [
        { label: "IVA presentado", value: "Al día" },
        { label: "Ganancias", value: "Al día" },
      ],
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
    items: [
      {
        num: "01",
        title: "Monotributo y autónomos",
        desc: "Altas, recategorizaciones y cumplimiento mensual sin dolores de cabeza.",
      },
      {
        num: "02",
        title: "Impuestos y AFIP",
        desc: "IVA, Ganancias y todas las presentaciones que pide el fisco, en tiempo y forma.",
      },
      {
        num: "03",
        title: "Sueldos y cargas sociales",
        desc: "Liquidación de haberes y aportes para vos y tu equipo, mes a mes.",
      },
      {
        num: "04",
        title: "Asesoría para PyMEs",
        desc: "Balances, análisis de rentabilidad y decisiones con respaldo profesional.",
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
      },
      {
        num: "02",
        title: "Plan a medida",
        desc: "Definimos qué necesitás, los plazos y un abono claro desde el primer día.",
      },
      {
        num: "03",
        title: "Gestión continua",
        desc: "Me ocupo mes a mes de tus obligaciones para que vos te ocupes de tu negocio.",
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
    credentials: [
      "Contador Público (UBA)",
      "Matrícula CPCECABA",
      "Especialista en tributación PyME",
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
    form: {
      name: { label: "Nombre", placeholder: "Tu nombre" },
      email: { label: "Email", placeholder: "tucorreo@ejemplo.com" },
      message: {
        label: "¿En qué te ayudo?",
        placeholder: "Contame brevemente tu situación...",
      },
      submit: "Enviar consulta",
    },
  },

  footer: {
    tagline: "Contador Público · CABA, Argentina",
  },
};
