/**
 * Contenido del template "Comercio" (tiendas, locales, productos físicos).
 *
 * Cliente de ejemplo: "Casa Bonita — Deco & Hogar". Orientado a catálogo de
 * productos y venta por WhatsApp. Todo el copy lo comparten los 3 diseños.
 */
import type { TemplatePrimary, TemplateTheme } from "@/components/templates/theme";
import type { TemplateFont } from "@/components/templates/font";
import type { TemplateDesign } from "@/components/templates/design";

/* ── Colores primarios (fondo crema + tinta); se combinan con los temas de acento ── */
export const comercioPrimaries: TemplatePrimary[] = [
  { id: "crema", name: "Crema", color: "#F5EEE3", ink: "#2A211A" },
  { id: "rubor", name: "Rubor", color: "#F8EAE6", ink: "#3A1A22" },
  { id: "salvia", name: "Salvia", color: "#ECEFE3", ink: "#26301F" },
];

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

/* ── Tipografías de títulos para el selector ── */
export const comercioFonts: TemplateFont[] = [
  { id: "playfair", name: "Playfair — editorial", heading: "var(--font-playfair)" },
  { id: "bricolage", name: "Bricolage — pop", heading: "var(--font-bricolage)" },
  { id: "cormorant", name: "Cormorant — galería", heading: "var(--font-cormorant)" },
  { id: "jakarta", name: "Plus Jakarta — moderna", heading: "var(--font-jakarta)" },
];

/* ── Diseños disponibles (mismo contenido, distinta composición) ── */
export const comercioDesigns: TemplateDesign[] = [
  { id: "1", name: "Editorial", theme: "mandarina", primary: "crema", font: "playfair" },
  { id: "2", name: "Pop", theme: "mandarina", primary: "crema", font: "bricolage" },
  { id: "3", name: "Galería", theme: "mandarina", primary: "crema", font: "cormorant" },
];

/** Íconos disponibles para categorías y beneficios (ver comercio/shared.tsx). */
export type ComercioIcon =
  | "vase" | "sofa" | "lamp" | "utensils" | "plant" | "gift"
  | "truck" | "card" | "refresh" | "chat";

export const comercio = {
  business: { name: "Casa Bonita", initials: "CB", tagline: "Deco & Hogar · Palermo" },

  announcement: "Envíos a todo el país · 3 cuotas sin interés · Cambios sin cargo",

  whatsapp: {
    // Número internacional sin "+" ni espacios (ej: "5491122334455"). Vacío = sin link.
    number: "",
    label: "Comprar por WhatsApp",
    // Mensaje precargado al consultar un producto ({producto} se reemplaza).
    productMessage: "Hola! Quiero consultar por: {producto}",
  },

  nav: {
    links: [
      { label: "Productos", href: "#productos" },
      { label: "Categorías", href: "#categorias" },
      { label: "Cómo comprar", href: "#como-comprar" },
      { label: "El local", href: "#local" },
    ],
    cta: { label: "WhatsApp", href: "#local" },
  },

  hero: {
    badge: "Nueva colección primavera",
    sticker: "Hecho a mano",
    title: {
      before: "Objetos lindos para una ",
      highlight: "casa con alma",
      after: ".",
    },
    subtitle:
      "Decoración, textiles y regalos elegidos a mano. Comprá online o pasá por el local — te ayudamos a que todo combine.",
    primary: { label: "Ver productos", href: "#productos" },
    secondary: { label: "Escribinos", href: "#local" },
    trust: [
      { icon: "truck" as ComercioIcon, title: "Envío en 48 hs", desc: "A todo el país" },
      { icon: "refresh" as ComercioIcon, title: "Cambios sin cargo", desc: "30 días de garantía" },
      { icon: "card" as ComercioIcon, title: "Cuotas sin interés", desc: "Con todas las tarjetas" },
    ],
    image: { src: "/templates/comercio/local.jpg", alt: "Interior del local de Casa Bonita en Palermo" },
    imageCaption: "El local · Av. Siempreviva 742, Palermo",
  },

  categorias: {
    label: "Categorías",
    title: "Encontrá lo que buscás",
    subtitle: "Piezas elegidas una por una para que cada rincón de tu casa hable de vos.",
    items: [
      { name: "Decoración", desc: "Floreros y objetos", icon: "vase" as ComercioIcon },
      { name: "Textil & Hogar", desc: "Mantas y almohadones", icon: "sofa" as ComercioIcon },
      { name: "Iluminación", desc: "Luz cálida y suave", icon: "lamp" as ComercioIcon },
      { name: "Cocina", desc: "Gres y vajilla", icon: "utensils" as ComercioIcon },
      { name: "Plantas", desc: "Macetas de barro", icon: "plant" as ComercioIcon },
      { name: "Regalos", desc: "Sets armados", icon: "gift" as ComercioIcon },
    ],
  },

  productos: {
    label: "Destacados",
    title: "Lo más elegido de la temporada",
    subtitle: "Precios de referencia. Escribinos por WhatsApp para comprar o consultar stock.",
    priceLabel: "Precio de referencia",
    items: [
      { name: "Jarrón de cerámica artesanal", category: "Cerámica", desc: "Gres mate con textura arenada, ideal para follaje seco.", price: "$ 18.900", tag: "Nuevo", image: "/templates/comercio/jarron.jpg" },
      { name: "Manta de algodón tejida", category: "Textil", desc: "Algodón en telar manual con flecos peinados.", price: "$ 24.500", tag: "", image: "/templates/comercio/manta.jpg" },
      { name: "Set de velas aromáticas", category: "Aromas", desc: "Cera de soja en frascos ámbar reutilizables.", price: "$ 9.800", tag: "Oferta", image: "/templates/comercio/velas.jpg" },
      { name: "Lámpara de mesa minimal", category: "Iluminación", desc: "Pantalla de lino y base de madera maciza.", price: "$ 32.000", tag: "", image: "/templates/comercio/lampara.jpg" },
      { name: "Espejo de ratán redondo", category: "Deco de pared", desc: "Fibras naturales trenzadas a mano, 65 cm.", price: "$ 27.400", tag: "Nuevo", image: "/templates/comercio/espejo.jpg" },
      { name: "Vajilla de gres (6 piezas)", category: "Mesa", desc: "Esmalte moteado, apta microondas.", price: "$ 41.900", tag: "", image: "/templates/comercio/vajilla.jpg" },
    ],
  },

  promo: {
    badge: "Solo por esta semana",
    title: "20% OFF en tu primera compra",
    code: "BIENVENIDA",
    subtitle: "Usá el código BIENVENIDA al escribirnos y arrancá tu casa nueva con onda.",
    cta: { label: "Aprovechar ahora", href: "#local" },
  },

  beneficios: {
    label: "Comprar es simple",
    title: "Todo pensado para que compres tranquilo",
    items: [
      { icon: "truck" as ComercioIcon, title: "Envíos a todo el país", desc: "Despachamos en 48 hs hábiles." },
      { icon: "card" as ComercioIcon, title: "Todos los medios", desc: "Tarjetas, transferencia y cuotas." },
      { icon: "refresh" as ComercioIcon, title: "Cambios fáciles", desc: "Tenés 30 días para cambiar." },
      { icon: "chat" as ComercioIcon, title: "Atención cercana", desc: "Te asesoramos por WhatsApp." },
    ],
  },

  comoComprar: {
    label: "Cómo comprar",
    title: "Comprar en Casa Bonita es así de fácil",
    steps: [
      { num: "01", title: "Elegí tus piezas", desc: "Mirá el catálogo o pasá por el local y anotá lo que te guste." },
      { num: "02", title: "Escribinos por WhatsApp", desc: "Te confirmamos stock, medidas y te mandamos fotos reales." },
      { num: "03", title: "Pagá y recibí", desc: "Con tarjeta o transferencia. Retirás en el local o te lo enviamos." },
    ],
  },

  comunidad: {
    title: "Casa Bonita en casas reales",
    subtitle: "Etiquetanos con #MiCasaBonita",
    images: [
      { src: "/templates/comercio/espejo.jpg", alt: "Espejo de ratán en un living" },
      { src: "/templates/comercio/lampara.jpg", alt: "Lámpara en un rincón de lectura" },
      { src: "/templates/comercio/manta.jpg", alt: "Manta tejida sobre un sillón" },
      { src: "/templates/comercio/vajilla.jpg", alt: "Vajilla de gres en una mesa" },
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
    labels: { address: "Dirección", hours: "Horarios", contact: "Contacto" },
    mapsLabel: "Cómo llegar",
    image: { src: "/templates/comercio/fachada.jpg", alt: "Fachada de Casa Bonita desde la vereda" },
  },

  footer: {
    tagline: "Deco & Hogar · CABA, Argentina",
    description: "Objetos, textiles y regalos elegidos a mano para casas con alma.",
  },
};
