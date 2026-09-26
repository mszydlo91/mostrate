import Ambient from "@/components/landing/Ambient";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import Servicios from "@/components/landing/Servicios";
import Templates from "@/components/landing/Templates";
import Precios from "@/components/landing/Precios";
import Contacto from "@/components/landing/Contacto";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Ambient />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Servicios />
        <Templates />
        <Precios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
