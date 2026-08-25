import { gastronomia } from "@/lib/templates/gastronomia";

const { nosotros } = gastronomia;

/**
 * Sección "quiénes somos" deliberadamente mínima: una frase grande y un dato
 * de contexto, sin caja, sin bio extensa ni testimonios — el foco del
 * template es el menú, no la historia del local.
 */
export default function Nosotros() {
  return (
    <section id="nosotros" className="border-b border-[#F3ECE1]/10">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
        <p className="font-[family-name:var(--tpl-font-heading)] text-[clamp(1.4rem,3vw,2.1rem)] font-normal italic leading-snug text-[#F3ECE1]/90">
          "{nosotros.text}"
        </p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          {nosotros.detail}
        </p>
      </div>
    </section>
  );
}
