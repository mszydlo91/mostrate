import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
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
    <html lang="es" className={`${syne.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
