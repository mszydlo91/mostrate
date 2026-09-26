import { bienestar } from "@/lib/templates/bienestar";
import { ClockIcon } from "../common";

const { clases } = bienestar;

const intensidadClass: Record<string, string> = {
  Alta: "bg-[var(--accent)] text-[var(--accent-contrast)]",
  Media: "bg-[var(--accent-soft)] text-[var(--accent)]",
  Baja: "border border-[var(--ink-a20)] text-[var(--ink-a60)]",
};

export default function Clases() {
  return (
    <section id="clases" className="border-t border-[var(--ink-a10)] bg-[var(--primary)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
          {clases.label}
        </span>
        <h2 className="mt-2 font-[family-name:var(--tpl-font-heading)] text-[clamp(1.9rem,3.4vw,2.8rem)] font-extrabold uppercase tracking-tight text-[var(--ink)]">
          {clases.title}
        </h2>
        <p className="mt-3 max-w-md text-sm text-[var(--ink-a50)]">{clases.subtitle}</p>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-[var(--ink-a10)] bg-[var(--ink-a10)] sm:grid-cols-2 lg:grid-cols-3">
          {clases.items.map((c) => (
            <div key={c.name} className="flex flex-col gap-3 bg-[var(--primary)] p-6 transition-colors hover:bg-[var(--ink-a5)]">
              <div className="flex items-center justify-between">
                <h3 className="font-[family-name:var(--tpl-font-heading)] text-lg font-extrabold uppercase text-[var(--ink)]">
                  {c.name}
                </h3>
                <span
                  className={`px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.06em] ${intensidadClass[c.intensidad]}`}
                >
                  {c.intensidad}
                </span>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-[var(--ink-a50)]">{c.desc}</p>
              <div className="flex items-center justify-between border-t border-[var(--ink-a10)] pt-3 text-[0.7rem] font-bold uppercase tracking-[0.06em] text-[var(--ink-a45)]">
                <span className="flex items-center gap-1.5">
                  <ClockIcon className="h-3.5 w-3.5" /> {c.duracion}
                </span>
                <span>Máx. {c.cupo} cupos</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
