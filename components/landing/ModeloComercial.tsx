import { modelo } from "@/lib/config";
import SectionHeader from "./SectionHeader";

export default function ModeloComercial() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-shell px-[clamp(20px,4vw,60px)] py-[clamp(80px,10vw,150px)]">
        <SectionHeader label={modelo.label} title={modelo.title} subtitle={modelo.subtitle} />
        <div className="mt-[clamp(50px,7vw,96px)] grid border-y border-content/25 md:grid-cols-2">
          {modelo.stages.map((stage, index) => (
            <article key={stage.number} className={`relative py-9 md:p-[clamp(32px,5vw,72px)] ${index ? "border-t border-content/25 md:border-l md:border-t-0" : "md:pl-0"}`}>
              <span className="absolute right-0 top-4 font-display text-[clamp(4rem,9vw,9rem)] font-semibold leading-none text-content/[.06]">{stage.number}</span>
              <p className="text-xs font-semibold uppercase tracking-[.14em] text-accent">{stage.eyebrow}</p>
              <h3 className="mt-5 font-display text-[clamp(2rem,3.3vw,3.8rem)] font-semibold tracking-[-.045em]">{stage.title}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[.12em] text-muted">{stage.price}</p>
              <p className="mt-8 max-w-[500px] text-lg leading-relaxed text-muted">{stage.desc}</p>
            </article>
          ))}
        </div>
        <p className="mt-7 max-w-2xl border-l-2 border-accent pl-5 text-lg leading-relaxed">{modelo.note}</p>
      </div>
    </section>
  );
}
