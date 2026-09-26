/**
 * Gastronomía — Diseño 1 "Carta". Lenguaje de carta impresa sobre fondo
 * oscuro: serif grande en itálica, menú con líneas de puntos, navegación
 * mínima sin botones sólidos. Refinado en Stitch (foto del salón, destacados
 * numerados, modalidades en módulos).
 */
import Nav from "./Nav";
import Hero from "./Hero";
import Nosotros from "./Nosotros";
import Menu from "./Menu";
import Ubicacion from "./Ubicacion";
import Contacto from "./Contacto";
import Footer from "./Footer";
import GrainOverlay from "./GrainOverlay";

export default function DisenoCarta() {
  return (
    <div className="relative min-h-screen bg-[var(--primary)] font-inter text-[var(--ink)]">
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
  );
}
