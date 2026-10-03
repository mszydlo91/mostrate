import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Portfolio from "@/components/landing/Portfolio";
import ComoTrabajamos from "@/components/landing/ComoTrabajamos";
import ModeloComercial from "@/components/landing/ModeloComercial";
import FAQ from "@/components/landing/FAQ";
import Contacto from "@/components/landing/Contacto";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return <><Nav /><main><Hero /><Portfolio /><ComoTrabajamos /><ModeloComercial /><FAQ /><Contacto /></main><Footer /></>;
}
