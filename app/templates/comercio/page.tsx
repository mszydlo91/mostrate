import type { Metadata } from "next";
import ThemeProvider from "@/components/templates/ThemeProvider";
import { comercioPrimaries, comercioThemes, comercio } from "@/lib/templates/comercio";
import Nav from "@/components/templates/comercio/Nav";
import Hero from "@/components/templates/comercio/Hero";
import Categorias from "@/components/templates/comercio/Categorias";
import Productos from "@/components/templates/comercio/Productos";
import Promo from "@/components/templates/comercio/Promo";
import Beneficios from "@/components/templates/comercio/Beneficios";
import Local from "@/components/templates/comercio/Local";
import Footer from "@/components/templates/comercio/Footer";

export const metadata: Metadata = {
  title: `${comercio.business.name} — ${comercio.footer.tagline}`,
  description: comercio.hero.subtitle,
};

export default function ComercioTemplatePage() {
  return (
    <ThemeProvider primaries={comercioPrimaries} themes={comercioThemes}>
      <div className="min-h-screen bg-[#F5EEE3] font-inter text-[var(--primary)]">
        <Nav />
        <main>
          <Hero />
          <Categorias />
          <Productos />
          <Promo />
          <Beneficios />
          <Local />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
