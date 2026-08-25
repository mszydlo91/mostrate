import type { Metadata } from "next";
import ThemeProvider from "@/components/templates/ThemeProvider";
import { gastronomiaThemes, gastronomiaFonts, gastronomia } from "@/lib/templates/gastronomia";
import Nav from "@/components/templates/gastronomia/Nav";
import Hero from "@/components/templates/gastronomia/Hero";
import Nosotros from "@/components/templates/gastronomia/Nosotros";
import Menu from "@/components/templates/gastronomia/Menu";
import Ubicacion from "@/components/templates/gastronomia/Ubicacion";
import Contacto from "@/components/templates/gastronomia/Contacto";
import Footer from "@/components/templates/gastronomia/Footer";
import GrainOverlay from "@/components/templates/gastronomia/GrainOverlay";

export const metadata: Metadata = {
  title: `${gastronomia.business.name} — ${gastronomia.footer.tagline}`,
  description: gastronomia.hero.subtitle,
};

export default function GastronomiaTemplatePage() {
  return (
    <ThemeProvider themes={gastronomiaThemes} fonts={gastronomiaFonts}>
      <div className="relative min-h-screen bg-[#0B0906] font-inter text-[#F3ECE1]">
        <GrainOverlay />
        <Nav />
        <main>
          <Hero />
          <Nosotros />
          <Menu />
          <Ubicacion />
        </main>
        <Contacto />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
