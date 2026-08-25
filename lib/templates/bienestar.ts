/**
 * Contenido del template "Bienestar" (gimnasios, estudios de entrenamiento,
 * nutricionistas, coaches).
 *
 * Cliente de ejemplo: "Núcleo Training Club" — estudio boutique de
 * entrenamiento funcional en Palermo, CABA.
 *
 * Cuarto lenguaje visual del proyecto, distinto a los otros tres:
 * - Profesional: claro/corporativo, botones sólidos redondeados.
 * - Comercio: claro/cálido, tarjetas de producto.
 * - Gastronomía: oscuro/editorial, sin botones rellenos, carta impresa.
 * - Bienestar: negro puro + acento neón, bloques angulares (clip-path),
 *   tipografía bold en mayúsculas, números grandes animados — energía de
 *   marketing de gimnasio (inspirado en sitios reales como onfit.com.ar).
 */
import type { TemplateTheme } from "@/components/templates/theme";
import type { TemplateFont } from "@/components/templates/font";

/** Space Grotesk (técnica/bold) primero — es la que mejor transmite "gym". */
export const bienestarFonts: TemplateFont[] = [
  { id: "space-grotesk", name: "Space Grotesk — técnica", heading: "var(--font-space-grotesk)" },
  { id: "poppins", name: "Poppins — amigable", heading: "var(--font-poppins)" },
  { id: "syne", name: "Syne — geométrica", heading: "var(--font-syne)" },
  { id: "playfair", name: "Playfair — editorial", heading: "var(--font-playfair)" },
];

/* ── Temas de color (neón, energía de gimnasio) ── */
export const bienestarThemes: TemplateTheme[] = [
  {
    id: "lima",
    name: "Lima",
    accent: "#C6FF3D",
    accentStrong: "#A6DB1F",
    accentSoft: "rgba(198,255,61,0.15)",
    accentContrast: "#0A0A0A",
  },
  {
    id: "naranja",
    name: "Naranja",
    accent: "#FF5A2B",
    accentStrong: "#E1431A",
    accentSoft: "rgba(255,90,43,0.15)",
    accentContrast: "#FFFFFF",
  },
  {
    id: "cian",
    name: "Cian",
    accent: "#00E0C7",
    accentStrong: "#00B8A3",
    accentSoft: "rgba(0,224,199,0.15)",
    accentContrast: "#0A0A0A",
  },
];

export const bienestar = {
  business: { name: "Núcleo Training Club", initials: "NT" },

  nav: {
    links: [
      { label: "Clases", href: "#clases" },
      { label: "Horarios", href: "#horarios" },
      { label: "Coaches", href: "#coaches" },
      { label: "Planes", href: "#planes" },
    ],
    cta: { label: "Clase de prueba", href: "#contacto" },
  },

  hero: {
    eyebrow: "Entrenamiento funcional · Palermo, CABA",
    title: {
      before: "Tu mejor versión ",
      highlight: "empieza hoy",
      after: ".",
    },
    subtitle:
      "Clases funcionales, fuerza y acompañamiento nutricional en un solo lugar. Primera clase sin cargo, sin vueltas.",
    primary: { label: "Clase de prueba gratis", href: "#contacto" },
    secondary: { label: "Ver horarios", href: "#horarios" },
    stats: [
      { num: "800", suffix: "+", label: "Socios activos" },
      { num: "12", suffix: "", label: "Clases por semana" },
      { num: "15", suffix: "+", label: "Coaches certificados" },
      { num: "4.9", suffix: "★", label: "Calificación promedio" },
    ],
  },

  clases: {
    label: "Clases",
    title: "Elegí tu forma de entrenar",
    subtitle: "Todas las clases están incluidas en cualquier plan — probá las que quieras.",
    items: [
      { name: "Funcional", intensidad: "Alta", desc: "Circuitos de fuerza y resistencia con implementos." },
      { name: "Cross Training", intensidad: "Alta", desc: "Entrenamiento variado de alta intensidad." },
      { name: "Boxeo", intensidad: "Alta", desc: "Técnica de boxeo más acondicionamiento físico." },
      { name: "Spinning", intensidad: "Media", desc: "Cardio en bici fija al ritmo de la música." },
      { name: "Pilates", intensidad: "Baja", desc: "Control, postura y fortalecimiento del core." },
      { name: "Yoga", intensidad: "Baja", desc: "Movilidad, respiración y recuperación activa." },
    ],
  },

  horarios: {
    label: "Horarios",
    title: "Encontrá tu horario",
    subtitle: "Reservá tu lugar desde la app hasta 1 hora antes de cada clase.",
    days: [
      { day: "Lunes", clases: [{ time: "07:00", name: "Funcional" }, { time: "12:00", name: "Yoga" }, { time: "19:00", name: "Boxeo" }] },
      { day: "Martes", clases: [{ time: "08:00", name: "Spinning" }, { time: "18:00", name: "Cross Training" }, { time: "20:00", name: "Pilates" }] },
      { day: "Miércoles", clases: [{ time: "07:00", name: "Funcional" }, { time: "12:00", name: "Yoga" }, { time: "19:00", name: "Boxeo" }] },
      { day: "Jueves", clases: [{ time: "08:00", name: "Spinning" }, { time: "18:00", name: "Cross Training" }, { time: "20:00", name: "Pilates" }] },
      { day: "Viernes", clases: [{ time: "07:00", name: "Funcional" }, { time: "12:00", name: "Boxeo" }, { time: "18:00", name: "Spinning" }] },
      { day: "Sábado", clases: [{ time: "10:00", name: "Cross Training" }, { time: "11:00", name: "Yoga" }] },
    ],
    closed: "Domingo — Cerrado",
  },

  coaches: {
    label: "Coaches",
    title: "El equipo que te acompaña",
    items: [
      { name: "Fede Aranda", specialty: "Funcional y fuerza", initials: "FA" },
      { name: "Kari Suárez", specialty: "Yoga y movilidad", initials: "KS" },
      { name: "Nico Paz", specialty: "Boxeo y HIIT", initials: "NP" },
      { name: "Sole Duarte", specialty: "Nutrición deportiva", initials: "SD" },
    ],
  },

  planes: {
    label: "Planes",
    title: "Invertí en vos",
    subtitle: "Sin letra chica. Cambiás o cancelás cuando quieras.",
    items: [
      {
        name: "Mensual",
        price: "$ 28.000",
        period: "por mes",
        featured: false,
        features: ["Acceso a todas las clases", "Reserva por app", "1 evaluación física"],
      },
      {
        name: "Trimestral",
        price: "$ 75.000",
        period: "cada 3 meses · 10% off",
        featured: true,
        features: ["Todo lo del plan mensual", "1 clase de nutrición incluida", "Congelamiento 15 días"],
      },
      {
        name: "Anual",
        price: "$ 260.000",
        period: "pago único · 20% off",
        featured: false,
        features: ["Todo lo del plan trimestral", "2 clases de nutrición incluidas", "Remera de regalo"],
      },
    ],
  },

  contacto: {
    label: "Empezá hoy",
    title: "Reservá tu clase de prueba",
    subtitle: "Dejanos tus datos y te contactamos para coordinar tu primera clase, sin cargo.",
    email: "hola@nucleotraining.com.ar",
    phone: "+54 9 11 3333-2222",
    form: {
      name: { label: "Nombre", placeholder: "Tu nombre" },
      email: { label: "Email", placeholder: "tucorreo@ejemplo.com" },
      message: { label: "Contanos tu objetivo", placeholder: "Ej: bajar de peso, ganar fuerza, empezar de cero..." },
      submit: "Quiero mi clase gratis",
    },
  },

  footer: {
    tagline: "Entrenamiento funcional · Palermo, CABA",
  },
};
