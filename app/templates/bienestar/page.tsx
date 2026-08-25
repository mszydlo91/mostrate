import type { Metadata } from "next";
import ThemeProvider from "@/components/templates/ThemeProvider";
import { bienestarThemes, bienestarFonts, bienestar } from "@/lib/templates/bienestar";
import Nav from "@/components/templates/bienestar/Nav";
import Hero from "@/components/templates/bienestar/Hero";
import Clases from "@/components/templates/bienestar/Clases";
import Horarios from "@/components/templates/bienestar/Horarios";
import Coaches from "@/components/templates/bienestar/Coaches";
import Planes from "@/components/templates/bienestar/Planes";
import Contacto from "@/components/templates/bienestar/Contacto";
import Footer from "@/components/templates/bienestar/Footer";

export const metadata: Metadata = {
  title: `${bienestar.business.name} — ${bienestar.footer.tagline}`,
  description: bienestar.hero.subtitle,
};

export default function BienestarTemplatePage() {
  return (
    <ThemeProvider themes={bienestarThemes} fonts={bienestarFonts}>
      <div className="min-h-screen bg-[#0A0A0A] font-inter text-[#F5F5F5]">
        <Nav />
        <main>
          <Hero />
          <Clases />
          <Horarios />
          <Coaches />
          <Planes />
        </main>
        <Contacto />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
