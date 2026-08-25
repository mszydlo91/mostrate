/**
 * Contenido del template "Gastronomía" (restaurantes, cantinas, cafés).
 *
 * Cliente de ejemplo: "Cantina Sorrento" — cantina ítalo-argentina de barrio.
 * A diferencia de Profesional y Comercio (lenguaje "SaaS": hero de dos
 * columnas, botones pill, tarjetas con sombra), este template usa un
 * lenguaje editorial/carta impresa: tipografía serif grande, menú con
 * líneas de puntos, navegación mínima sin botones sólidos, mucho espacio
 * negativo. Referencia: sitios reales de restaurantes (Fabric Sushi, Kansas
 * Grill & Bar) priorizan tipografía y fotografía por sobre componentes de UI.
 */
import type { TemplateTheme } from "@/components/templates/theme";
import type { TemplateFont } from "@/components/templates/font";

/**
 * Mismas 4 tipografías que el resto de los templates, pero con Playfair
 * Display (serif editorial) primera — es la que mejor transmite "carta de
 * restaurante". El visitante puede seguir cambiándola desde el FontSwitcher.
 */
export const gastronomiaFonts: TemplateFont[] = [
  { id: "playfair", name: "Playfair — editorial", heading: "var(--font-playfair)" },
  { id: "syne", name: "Syne — geométrica", heading: "var(--font-syne)" },
  { id: "space-grotesk", name: "Space Grotesk — técnica", heading: "var(--font-space-grotesk)" },
  { id: "poppins", name: "Poppins — amigable", heading: "var(--font-poppins)" },
];

/* ── Temas de color (cálidos, de cocina) ── */
export const gastronomiaThemes: TemplateTheme[] = [
  {
    id: "terracota",
    name: "Terracota",
    accent: "#E67E22",
    accentStrong: "#C2650F",
    accentSoft: "rgba(230,126,34,0.16)",
    accentContrast: "#FFFFFF",
  },
  {
    id: "vino",
    name: "Vino",
    accent: "#7A2035",
    accentStrong: "#5C1727",
    accentSoft: "rgba(122,32,53,0.22)",
    accentContrast: "#FFFFFF",
  },
  {
    id: "oliva",
    name: "Oliva",
    accent: "#6B7A3F",
    accentStrong: "#545F30",
    accentSoft: "rgba(107,122,63,0.2)",
    accentContrast: "#FFFFFF",
  },
];

export const gastronomia = {
  business: { name: "Cantina Sorrento", initials: "CS" },

  nav: {
    links: [
      { label: "Menú", href: "#menu" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Ubicación", href: "#ubicacion" },
      { label: "Contacto", href: "#contacto" },
    ],
    cta: { label: "Reservar mesa", href: "#contacto" },
  },

  hero: {
    eyebrow: "Cantina ítalo-argentina · San Telmo, CABA",
    title: {
      before: "Cocina de barrio, ",
      highlight: "sabor de siempre",
      after: ".",
    },
    subtitle:
      "Pastas caseras, parrilla y pescados del día en un salón que no cambió lo esencial desde 1998. Reservá tu mesa o pedí para retirar.",
    primary: { label: "Ver el menú", href: "#menu" },
    secondary: { label: "Reservar mesa", href: "#contacto" },
    highlights: ["Desde 1998", "Pastas caseras", "Retiro y delivery"],
    // Datos del mini panel decorativo del hero
    card: {
      label: "Plato del día",
      dish: "Sorrentinos de jamón y muzzarella",
      note: "Martes y jueves · salsa a elección",
      price: "$ 8.900",
    },
  },

  nosotros: {
    label: "Nosotros",
    text: "Pasta amasada a mano, salsas que hierven horas y una mesa siempre lista para compartir.",
    detail: "Fundada en 1998 · misma cocina, misma familia.",
  },

  menu: {
    label: "Menú",
    title: "Nuestra carta",
    subtitle:
      "Precios de referencia — mostralos u ocultalos con el botón de al lado para ver la carta de las dos formas.",
    categories: [
      {
        id: "entradas",
        label: "Entradas",
        items: [
          { name: "Provoleta a la parrilla", desc: "Con orégano y aceite de oliva", price: "$ 6.500" },
          { name: "Empanadas de carne (x2)", desc: "Cortadas a cuchillo, horno de barro", price: "$ 3.200" },
          { name: "Tabla de fiambres y quesos", desc: "Para compartir", price: "$ 9.800" },
        ],
      },
      {
        id: "pastas",
        label: "Pastas",
        items: [
          { name: "Sorrentinos de jamón y muzzarella", desc: "Salsa rosa, bolognesa o manteca y salvia", price: "$ 8.900" },
          { name: "Ravioles de ricota y nuez", desc: "Con salsa fileto casera", price: "$ 8.500" },
          { name: "Tallarines al pesto", desc: "Pesto genovés y parmesano", price: "$ 7.900" },
          { name: "Ñoquis de papa", desc: "Los 29 de cada mes, receta de la casa", price: "$ 7.200" },
        ],
      },
      {
        id: "carnes",
        label: "Carnes",
        items: [
          { name: "Bife de chorizo", desc: "400g a la parrilla, con guarnición", price: "$ 12.900" },
          { name: "Matambrito a la pizza", desc: "Con muzzarella y salsa", price: "$ 10.500" },
          { name: "Milanesa napolitana", desc: "Con papas fritas o puré", price: "$ 9.800" },
        ],
      },
      {
        id: "pescados",
        label: "Pescados",
        items: [
          { name: "Merluza a la romana", desc: "Con papas al natural", price: "$ 10.200" },
          { name: "Salmón grillé", desc: "Con vegetales salteados", price: "$ 13.500" },
        ],
      },
      {
        id: "minutas",
        label: "Minutas",
        items: [
          { name: "Milanesa a caballo", desc: "Con dos huevos fritos", price: "$ 8.900" },
          { name: "Suprema a la Maryland", desc: "Con banana y puré", price: "$ 9.200" },
          { name: "Hamburguesa de la casa", desc: "Doble carne, cheddar y panceta", price: "$ 8.500" },
        ],
      },
      {
        id: "postres",
        label: "Postres",
        items: [
          { name: "Flan casero", desc: "Con dulce de leche y crema", price: "$ 4.200" },
          { name: "Tiramisú", desc: "Receta de la nonna", price: "$ 4.800" },
          { name: "Volcán de chocolate", desc: "Con helado de vainilla", price: "$ 5.200" },
        ],
      },
      {
        id: "vinos",
        label: "Vinos",
        items: [
          { name: "Malbec de la casa (copa)", desc: "", price: "$ 3.500" },
          { name: "Malbec de la casa (botella)", desc: "", price: "$ 14.000" },
          { name: "Cabernet Sauvignon (botella)", desc: "", price: "$ 16.500" },
          { name: "Espumante extra brut (botella)", desc: "", price: "$ 13.000" },
        ],
      },
    ],
  },

  ubicacion: {
    label: "Ubicación y delivery",
    title: "Visitanos o pedí desde casa",
    subtitle: "Salón, retiro en el local o delivery propio en la zona.",
    address: "Bolívar 1234, San Telmo, CABA",
    hours: [
      { day: "Martes a domingo", time: "12 a 16 hs y 20 a 00 hs" },
      { day: "Lunes", time: "Cerrado" },
    ],
    options: [
      {
        icon: "🍽️",
        title: "Salón y reservas",
        desc: "Mesas para 2 a 12 personas. Reservá con anticipación los fines de semana.",
      },
      {
        icon: "🥡",
        title: "Retiro en el local",
        desc: "Pedidos listos en 20-30 minutos. Avisamos por WhatsApp cuando está listo.",
      },
      {
        icon: "🛵",
        title: "Delivery propio",
        desc: "Cobertura en San Telmo, Monserrat y Barrio Sur. Consultá otras zonas.",
      },
    ],
    whatsapp: {
      // Número internacional sin "+" ni espacios (ej: "5491122334455"). Vacío = sin link.
      number: "",
      label: "Pedir por WhatsApp",
    },
  },

  contacto: {
    label: "Contacto",
    title: "Reservá tu mesa",
    subtitle: "Contanos día, horario y cuántos son — te confirmamos por WhatsApp o email.",
    email: "hola@cantinasorrento.com.ar",
    phone: "+54 9 11 4444-5555",
    form: {
      name: { label: "Nombre", placeholder: "Tu nombre" },
      email: { label: "Email", placeholder: "tucorreo@ejemplo.com" },
      message: {
        label: "Día, horario y cantidad de personas",
        placeholder: "Ej: Sábado 21 hs, 4 personas",
      },
      submit: "Enviar reserva",
    },
  },

  footer: {
    tagline: "Cantina ítalo-argentina · San Telmo, CABA",
  },
};
