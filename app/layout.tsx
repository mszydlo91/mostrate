import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/config";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const syne = localFont({
  src: [
    { path: "./fonts/syne-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/syne-latin.woff2", weight: "600", style: "normal" },
    { path: "./fonts/syne-latin.woff2", weight: "700", style: "normal" },
    { path: "./fonts/syne-latin.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = localFont({
  src: [
    { path: "./fonts/dm-sans-latin.woff2", weight: "300", style: "normal" },
    { path: "./fonts/dm-sans-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/dm-sans-latin.woff2", weight: "500", style: "normal" },
    { path: "./fonts/dm-sans-latin.woff2", weight: "700", style: "normal" },
    { path: "./fonts/dm-sans-latin-italic.woff2", weight: "300", style: "italic" },
    { path: "./fonts/dm-sans-latin-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/dm-sans-latin-italic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/dm-sans-latin-italic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-dmsans",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "./fonts/inter-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

const publicUrl = getSiteUrl();
const title = `${site.name} — Diseño web para pequeños negocios`;

export const metadata: Metadata = {
  metadataBase: publicUrl ? new URL(publicUrl) : undefined,
  title,
  description: site.description,
  alternates: publicUrl ? { canonical: "/" } : undefined,
  openGraph: {
    title,
    description: site.description,
    locale: "es_AR",
    type: "website",
    siteName: site.name,
  },
  twitter: { card: "summary_large_image", title, description: site.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
