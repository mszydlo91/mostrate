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
import type { TemplatePrimary, TemplateTheme } from "@/components/templates/theme";
import type { TemplateFont } from "@/components/templates/font";
import type { TemplateDesign } from "@/components/templates/design";

/* ── Tipografías de títulos para el selector ── */
export const bienestarFonts: TemplateFont[] = [
  { id: "space-grotesk", name: "Space Grotesk — técnica", heading: "var(--font-space-grotesk)" },
  { id: "dmsans", name: "DM Sans — calma", heading: "var(--font-dmsans)" },
  { id: "barlow", name: "Barlow Condensed — deportiva", heading: "var(--font-barlow)" },
  { id: "syne", name: "Syne — geométrica", heading: "var(--font-syne)" },
];

/* ── Diseños disponibles (mismo contenido, distinta composición) ── */
export const bienestarDesigns: TemplateDesign[] = [
  { id: "1", name: "Núcleo", theme: "lima", primary: "negro", font: "space-grotesk" },
  { id: "2", name: "Calma", theme: "lima", primary: "niebla", font: "dmsans" },
  { id: "3", name: "Deportivo", theme: "naranja", primary: "medianoche", font: "barlow" },
];

/* ── Colores primarios (fondo + tinta): dos oscuros y uno claro; se combinan con los temas de acento ── */
export const bienestarPrimaries: TemplatePrimary[] = [
  { id: "negro", name: "Negro", color: "#0A0A0A", ink: "#F5F5F5" },
  { id: "medianoche", name: "Medianoche", color: "#0B1226", ink: "#F5F5F5" },
  { id: "niebla", name: "Niebla", color: "#F1F2EC", ink: "#1B1D18" },
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

  /** Fotos que usan los diseños 2 y 3 (generadas por Stitch). */
  fotos: {
    estudio: { src: "/templates/bienestar/estudio.jpg", alt: "Estudio luminoso con una alumna estirando sobre la colchoneta" },
    grupo: { src: "/templates/bienestar/grupo.jpg", alt: "Grupo entrenando funcional en el estudio" },
    boxeo: { src: "/templates/bienestar/boxeo.jpg", alt: "Boxeador golpeando la bolsa con polvo de magnesio en el aire" },
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
      { name: "Funcional", intensidad: "Alta", desc: "Circuitos de fuerza y resistencia con implementos.", duracion: "50 min", cupo: "16" },
      { name: "Cross Training", intensidad: "Alta", desc: "Entrenamiento variado de alta intensidad.", duracion: "60 min", cupo: "14" },
      { name: "Boxeo", intensidad: "Alta", desc: "Técnica de boxeo más acondicionamiento físico.", duracion: "55 min", cupo: "12" },
      { name: "Spinning", intensidad: "Media", desc: "Cardio en bici fija al ritmo de la música.", duracion: "45 min", cupo: "20" },
      { name: "Pilates", intensidad: "Baja", desc: "Control, postura y fortalecimiento del core.", duracion: "50 min", cupo: "10" },
      { name: "Yoga", intensidad: "Baja", desc: "Movilidad, respiración y recuperación activa.", duracion: "60 min", cupo: "15" },
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
      { name: "Fede Aranda", specialty: "Funcional y fuerza", initials: "FA", photo: "/templates/bienestar/coach-fa.jpg" },
      { name: "Kari Suárez", specialty: "Yoga y movilidad", initials: "KS", photo: "/templates/bienestar/coach-ks.jpg" },
      { name: "Nico Paz", specialty: "Boxeo y HIIT", initials: "NP", photo: "/templates/bienestar/coach-np.jpg" },
      { name: "Sole Duarte", specialty: "Nutrición deportiva", initials: "SD", photo: "/templates/bienestar/coach-sd.jpg" },
    ],
  },

  primeraVez: {
    label: "Sin complicaciones",
    title: "Tu primera vez en Núcleo",
    steps: [
      { title: "Elegí clase y horario", desc: "Mirá la grilla y elegí la disciplina que más te tiente." },
      { title: "Completá el formulario", desc: "Te escribimos para confirmar el día y resolver dudas." },
      { title: "Vení 10 minutos antes", desc: "Te prestamos lo que haga falta y te mostramos el club." },
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
    sede: {
      address: "Gorriti 5480, Palermo Soho, CABA",
      hours: "Lunes a viernes 06:30 a 21:30 · Sábados 09:00 a 14:00",
    },
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
