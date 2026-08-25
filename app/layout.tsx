import type { Metadata } from "next";
import { Syne, Inter, Playfair_Display, Space_Grotesk, Poppins } from "next/font/google";
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
      className={`${syne.variable} ${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
