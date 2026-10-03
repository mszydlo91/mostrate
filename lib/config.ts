/** Fuente única de verdad para el contenido comercial de la landing. */

export const pricing = { inicial: "A consultar", mensual: "A consultar" };

export const contact = {
  email: "hola@mostrate.com.ar",
  whatsapp: { label: "WhatsApp disponible", number: "" },
  location: "Buenos Aires, Argentina",
};

export const site = {
  name: "Mostrate",
  logo: { first: "mos", accent: "trate" },
  description:
    "Diseño y desarrollo de páginas web para pequeños negocios, emprendedores y PyMEs de Argentina.",
};

export const nav = {
  links: [
    { label: "Trabajos", href: "#trabajos" },
    { label: "Cómo trabajamos", href: "#como-trabajamos" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Contacto", href: "#contacto" },
};

export const hero = {
  eyebrow: "Diseño y desarrollo web para pequeños negocios",
  title: { before: "Una web que muestre ", highlight: "lo mejor", after: " de tu negocio." },
  subtitle:
    "Partimos de una base que ya funciona y la adaptamos a tu identidad, tu contenido y la forma en que trabajás.",
  actions: {
    primary: { label: "Contanos tu proyecto", href: "#contacto" },
    secondary: { label: "Ver trabajos", href: "#trabajos" },
  },
  note: "Páginas claras, profesionales y preparadas para verse bien en computadora y celular.",
};

export const portfolio = {
  label: "Trabajo real, en contexto",
  title: ["Cuatro puntos de partida.", "Una web propia."],
  subtitle:
    "Explorá cómo cambia una misma idea de servicio cuando el diseño responde al rubro, el contenido y el carácter de cada negocio.",
  demoCta: "Ver demo",
  contactCta: "Quiero algo de este estilo",
  liveCta: "Explorar en vivo",
  liveExit: "Salir de demo",
  items: [
    {
      slug: "profesional",
      name: "Profesional",
      rubro: "Servicios profesionales",
      desc: "Una presencia clara y confiable para estudios, consultores y profesionales independientes.",
      signal: "#315BFF",
      desktop: "/previews/profesional.webp",
      mobile: "/previews/profesional-mobile.webp",
    },
    {
      slug: "comercio",
      name: "Comercio",
      rubro: "Productos y locales",
      desc: "Catálogo, identidad y datos útiles organizados para que el negocio se entienda rápido.",
      signal: "#D89038",
      desktop: "/previews/comercio.webp",
      mobile: "/previews/comercio-mobile.webp",
    },
    {
      slug: "gastronomia",
      name: "Gastronomía",
      rubro: "Restaurantes y cafés",
      desc: "Una experiencia editorial para mostrar propuesta, carta, ubicación y formas de contacto.",
      signal: "#B84A36",
      desktop: "/previews/gastronomia.webp",
      mobile: "/previews/gastronomia-mobile.webp",
    },
    {
      slug: "bienestar",
      name: "Bienestar",
      rubro: "Salud y entrenamiento",
      desc: "Una dirección enérgica para presentar actividades, horarios, equipo y próximos pasos.",
      signal: "#9BCB32",
      desktop: "/previews/bienestar.webp",
      mobile: "/previews/bienestar-mobile.webp",
    },
  ],
};

export const comoTrabajamos = {
  label: "Cómo trabajamos",
  title: "De tu negocio a una web lista para usar.",
  subtitle:
    "Una base probada nos da un punto de partida claro. A partir de ahí, cada decisión se adapta a tu contenido y al alcance acordado.",
  items: [
    { number: "01", title: "Tu negocio", desc: "Entendemos objetivos, público, servicios, contenido y el material disponible." },
    { number: "02", title: "El punto de partida", desc: "Elegimos una base visual y técnica probada que tenga sentido para tu negocio." },
    { number: "03", title: "La hacemos tuya", desc: "Adaptamos identidad, imágenes, textos, estructura y experiencia responsive." },
    { number: "04", title: "La publicamos", desc: "Preparamos la web para quedar online e integramos dominio y hosting según lo acordado." },
    { number: "05", title: "Seguimos", desc: "Organizamos el mantenimiento y el acompañamiento posterior dentro de la propuesta." },
  ],
};

export const modelo = {
  label: "Modelo comercial",
  title: ["Un servicio,", "dos momentos."],
  subtitle:
    "La propuesta separa el trabajo de creación de la continuidad posterior. Los alcances y valores se detallan antes de empezar.",
  stages: [
    {
      number: "01",
      eyebrow: "Para empezar",
      title: "Inversión inicial",
      price: pricing.inicial,
      desc: "Reúne el trabajo necesario para convertir una base elegida en una web adaptada al negocio y preparada para publicar.",
    },
    {
      number: "02",
      eyebrow: "Después de publicar",
      title: "Abono mensual",
      price: pricing.mensual,
      desc: "Da continuidad a la web y organiza la infraestructura, el mantenimiento y el acompañamiento definidos en la propuesta.",
    },
  ],
  note: "Primero entendemos qué necesitás. Después te presentamos un alcance claro para tu caso.",
};

export const faq = {
  label: "Preguntas frecuentes",
  title: "Antes de empezar",
  items: [
    { question: "¿Tengo que tener un dominio?", answer: "No necesariamente. Si todavía no tenés uno, podemos orientarte y contemplar su puesta en funcionamiento dentro de la propuesta." },
    { question: "¿Qué información necesitan?", answer: "Una descripción del negocio, servicios o productos, datos de contacto y el material que ya tengas. Si algo falta, te ayudamos a ordenar lo necesario para avanzar." },
    { question: "¿La web parte de un template?", answer: "Sí. Trabajamos sobre una base visual y técnica que ya funciona, y la adaptamos a la identidad, el contenido y las necesidades de tu negocio." },
    { question: "¿Funciona bien en celular?", answer: "Sí. La versión para celular forma parte del diseño y se revisa junto con la experiencia en pantallas más grandes." },
    { question: "¿Puedo cambiar textos o fotos?", answer: "Sí. Los cambios posteriores se pueden organizar dentro del mantenimiento o cotizar según el alcance que corresponda." },
    { question: "¿Cuánto demora?", answer: "Depende del alcance y de que el contenido esté disponible. Antes de empezar acordamos un cronograma realista para el proyecto." },
    { question: "¿Qué pasa después de publicar?", answer: "Podemos seguir a cargo de la infraestructura, el mantenimiento y el acompañamiento. El alcance concreto queda definido en la propuesta." },
  ],
};

export const contacto = {
  label: "Contacto",
  title: "¿Arrancamos?",
  subtitle: "Contanos qué hace tu negocio y qué te gustaría mejorar. Te respondemos para entender el proyecto antes de cotizar.",
  transportNote: "Al enviar se abrirá tu aplicación de correo con la consulta preparada. Todavía no almacenamos datos desde este formulario.",
  infoLabels: { email: "Email", location: "Ubicación" },
  form: {
    name: { label: "Nombre", placeholder: "Tu nombre o el de tu negocio" },
    email: { label: "Email", placeholder: "tucorreo@ejemplo.com" },
    rubro: {
      label: "Rubro",
      placeholder: "Seleccioná una opción",
      options: ["Servicios profesionales", "Comercio local", "Gastronomía", "Salud y bienestar", "Otro"],
    },
    message: { label: "¿Qué necesitás?", placeholder: "Contanos brevemente sobre tu negocio y la página que imaginás..." },
    submit: "Preparar consulta",
  },
};

export const footer = {
  text: `© ${new Date().getFullYear()} Mostrate · Diseño y desarrollo web desde Buenos Aires`,
};
