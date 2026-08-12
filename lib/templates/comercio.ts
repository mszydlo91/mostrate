/**
 * Contenido del template "Comercio" (tiendas, locales, productos físicos).
 *
 * Cliente de ejemplo: "Casa Bonita — Deco & Hogar".
 * Estética deliberadamente distinta al template Profesional:
 * fondo crema cálido, orientado a catálogo de productos y venta por WhatsApp.
 */
import type { TemplateTheme } from "@/components/templates/theme";

/* ── Temas de color (vibrantes, para retail) ── */
export const comercioThemes: TemplateTheme[] = [
  {
    id: "mandarina",
    name: "Mandarina",
    accent: "#F0662C",
    accentStrong: "#D24E1B",
    accentSoft: "rgba(240,102,44,0.12)",
    accentContrast: "#FFFFFF",
  },
  {
    id: "frambuesa",
    name: "Frambuesa",
    accent: "#E23D6D",
    accentStrong: "#C22757",
    accentSoft: "rgba(226,61,109,0.12)",
    accentContrast: "#FFFFFF",
  },
  {
    id: "uva",
    name: "Uva",
    accent: "#8B5CF6",
    accentStrong: "#7242D6",
    accentSoft: "rgba(139,92,246,0.12)",
    accentContrast: "#FFFFFF",
  },
];

export const comercio = {
  business: { name: "Casa Bonita", initials: "CB" },

  announcement: "Envíos a todo el país · 3 cuotas sin interés · Cambios sin cargo",

  whatsapp: {
    // Número internacional sin "+" ni espacios (ej: "5491122334455"). Vacío = sin link.
    number: "",
    label: "Comprar por WhatsApp",
  },

  nav: {
    links: [
      { label: "Productos", href: "#productos" },
      { label: "Categorías", href: "#categorias" },
      { label: "El local", href: "#local" },
    ],
    cta: { label: "WhatsApp", href: "#local" },
  },

  hero: {
    badge: "🌷 Nueva colección primavera",
    title: {
      before: "Objetos lindos para una ",
      highlight: "casa con alma",
      after: ".",
    },
    subtitle:
      "Decoración, textiles y regalos elegidos a mano. Comprá online o pasá por el local — te ayudamos a que todo combine.",
    primary: { label: "Ver productos", href: "#productos" },
    secondary: { label: "Escribinos", href: "#local" },
    trust: ["Envío en 48 hs", "Cambios sin cargo", "Cuotas sin interés"],
    // Collage de tiles del hero
    tiles: [
      { name: "Cerámicas", emoji: "🏺", gradient: "linear-gradient(135deg,#F6D9C4,#EFC3A0)" },
      { name: "Textiles", emoji: "🧺", gradient: "linear-gradient(135deg,#E7DCF2,#D3BEE9)" },
      { name: "Velas", emoji: "🕯️", gradient: "linear-gradient(135deg,#DCEBDD,#BFDCC2)" },
      { name: "Regalos", emoji: "🎁", gradient: "linear-gradient(135deg,#F0D9E0,#E3B9C7)" },
    ],
  },

  categorias: {
    label: "Categorías",
    title: "Encontrá lo que buscás",
    items: [
      { name: "Decoración", emoji: "🪞" },
      { name: "Textil & Hogar", emoji: "🛋️" },
      { name: "Iluminación", emoji: "💡" },
      { name: "Cocina", emoji: "🍽️" },
      { name: "Plantas", emoji: "🪴" },
      { name: "Regalos", emoji: "🎁" },
    ],
  },

  productos: {
    label: "Destacados",
    title: "Lo más elegido de la temporada",
    subtitle: "Precios de referencia. Escribinos por WhatsApp para comprar o consultar stock.",
    items: [
      { name: "Jarrón de cerámica artesanal", price: "$ 18.900", tag: "Nuevo", emoji: "🏺", gradient: "linear-gradient(135deg,#F6D9C4,#EFC3A0)" },
      { name: "Manta de algodón tejida", price: "$ 24.500", tag: "", emoji: "🧶", gradient: "linear-gradient(135deg,#D9E4F0,#B9CDE8)" },
      { name: "Set de velas aromáticas", price: "$ 9.800", tag: "Oferta", emoji: "🕯️", gradient: "linear-gradient(135deg,#DCEBDD,#BFDCC2)" },
      { name: "Lámpara de mesa minimal", price: "$ 32.000", tag: "", emoji: "💡", gradient: "linear-gradient(135deg,#E7DCF2,#D3BEE9)" },
      { name: "Espejo de ratán redondo", price: "$ 27.400", tag: "Nuevo", emoji: "🪞", gradient: "linear-gradient(135deg,#F3E0D0,#E7C9AE)" },
      { name: "Vajilla de gres (6 piezas)", price: "$ 41.900", tag: "", emoji: "🍽️", gradient: "linear-gradient(135deg,#F0D9E0,#E3B9C7)" },
    ],
  },

  promo: {
    badge: "Solo por esta semana",
    title: "20% OFF en tu primera compra",
    subtitle: "Usá el código BIENVENIDA al escribirnos y arrancá tu casa nueva con onda.",
    cta: { label: "Aprovechar ahora", href: "#local" },
  },

  beneficios: {
    items: [
      { icon: "🚚", title: "Envíos a todo el país", desc: "Despachamos en 48 hs hábiles." },
      { icon: "💳", title: "Todos los medios", desc: "Tarjetas, transferencia y cuotas." },
      { icon: "🔄", title: "Cambios fáciles", desc: "Tenés 30 días para cambiar." },
      { icon: "💬", title: "Atención cercana", desc: "Te asesoramos por WhatsApp." },
    ],
  },

  local: {
    label: "El local",
    title: "Vení a conocernos",
    subtitle: "Tocá, mirá y llevate lo que te enamore. Te esperamos con un café.",
    hours: [
      { day: "Lunes a viernes", time: "10 a 19 hs" },
      { day: "Sábados", time: "10 a 14 hs" },
      { day: "Domingos", time: "Cerrado" },
    ],
    address: "Av. Siempreviva 742, Palermo, CABA",
    instagram: "@casabonita.deco",
    email: "hola@casabonita.com.ar",
  },

  footer: {
    tagline: "Deco & Hogar · CABA, Argentina",
  },
};
