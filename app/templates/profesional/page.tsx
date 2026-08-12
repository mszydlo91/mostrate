import type { Metadata } from "next";
import ThemeProvider from "@/components/templates/ThemeProvider";
import { profesionalThemes, profesional } from "@/lib/templates/profesional";
import Nav from "@/components/templates/profesional/Nav";
import Hero from "@/components/templates/profesional/Hero";
import Stats from "@/components/templates/profesional/Stats";
import Servicios from "@/components/templates/profesional/Servicios";
import Proceso from "@/components/templates/profesional/Proceso";
import Sobre from "@/components/templates/profesional/Sobre";
import Contacto from "@/components/templates/profesional/Contacto";
import Footer from "@/components/templates/profesional/Footer";

export const metadata: Metadata = {
  title: `${profesional.business.name} — ${profesional.footer.tagline}`,
  description: profesional.hero.subtitle,
};

export default function ProfesionalTemplatePage() {
  return (
    <ThemeProvider themes={profesionalThemes}>
      <div className="min-h-screen bg-white font-inter text-[#16182B]">
        <Nav />
        <main>
          <Hero />
          <Stats />
          <Servicios />
          <Proceso />
          <Sobre />
          <Contacto />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
