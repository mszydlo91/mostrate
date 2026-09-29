import type { Metadata } from "next";
import {
  Syne,
  Inter,
  Instrument_Serif,
  Playfair_Display,
  Space_Grotesk,
  Poppins,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Bricolage_Grotesque,
  Cormorant_Garamond,
  Oswald,
  DM_Sans,
  Barlow_Condensed,
} from "next/font/google";
import localFont from "next/font/local";
import { site } from "@/lib/config";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// Serif itálica de acento de la landing (palabras destacadas en títulos).
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

// Fuentes de título alternativas para el selector de tipografías de los
// templates de clientes (ver components/templates/font.ts).
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Fuentes del template Profesional (sus 3 diseños): serif editorial,
// sans de texto y mono para los rótulos del diseño "Técnico".
// Newsreader se sirve desde el repo (woff2 variable del subset latin, tal como
// lo entrega Google Fonts v26): Google a veces responde con URLs sin extensión
// para esta fuente y next/font/google rompe el build (ver DOCS.md).
const newsreader = localFont({
  src: [
    { path: "./fonts/newsreader-latin.woff2", style: "normal" },
    { path: "./fonts/newsreader-latin-italic.woff2", style: "italic" },
  ],
  weight: "400 600",
  variable: "--font-newsreader",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Fuentes del template Comercio: grotesca "pop" y serif de galería.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-dmsans",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Presencia digital para tu negocio`,
  description: site.description,
  openGraph: {
    title: `${site.name} — Presencia digital para tu negocio`,
    description: site.description,
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${inter.variable} ${instrument.variable} ${playfair.variable} ${spaceGrotesk.variable} ${poppins.variable} ${newsreader.variable} ${jakarta.variable} ${jetbrains.variable} ${bricolage.variable} ${cormorant.variable} ${oswald.variable} ${dmSans.variable} ${barlow.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
