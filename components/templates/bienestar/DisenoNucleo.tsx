/**
 * Bienestar — Diseño 1 "Núcleo". Negro con acento neón, bloques cortados en
 * diagonal, mayúsculas bold y números animados. Refinado en Stitch (franja de
 * estadísticas, clases con duración y cupo, horarios con intensidad, sede).
 */
import Nav from "./Nav";
import Hero from "./Hero";
import Clases from "./Clases";
import Horarios from "./Horarios";
import Coaches from "./Coaches";
import Planes from "./Planes";
import Contacto from "./Contacto";
import Footer from "./Footer";

export default function DisenoNucleo() {
  return (
    <div className="min-h-screen bg-[var(--primary)] font-inter text-[var(--ink)]">
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
  );
}
