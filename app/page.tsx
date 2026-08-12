import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Servicios from "@/components/landing/Servicios";
import Templates from "@/components/landing/Templates";
import Precios from "@/components/landing/Precios";
import Contacto from "@/components/landing/Contacto";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Servicios />
        <Templates />
        <Precios />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
