import { bienestar } from "@/lib/templates/bienestar";

const { horarios, clases } = bienestar;

const intensidadDe = (name: string) => clases.items.find((c) => c.name === name)?.intensidad;
const intensidadColor: Record<string, string> = {
  Alta: "text-[var(--accent)]",
  Media: "text-[var(--ink-a70)]",
  Baja: "text-[var(--ink-a40)]",
};

export default function Horarios() {
  return (
    <section id="horarios" className="border-t border-[var(--ink-a10)] bg-[var(--primary)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
          {horarios.label}
        </span>
        <h2 className="mt-2 font-[family-name:var(--tpl-font-heading)] text-[clamp(1.9rem,3.4vw,2.8rem)] font-extrabold uppercase tracking-tight text-[var(--ink)]">
          {horarios.title}
        </h2>
        <p className="mt-3 max-w-md text-sm text-[var(--ink-a50)]">{horarios.subtitle}</p>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {horarios.days.map((d) => (
            <div key={d.day} className="border border-[var(--ink-a10)] bg-[var(--ink-a5)] p-4">
              <div className="flex items-center justify-between border-b border-[var(--ink-a10)] pb-2">
                <span className="font-[family-name:var(--tpl-font-heading)] text-sm font-extrabold uppercase text-[var(--ink)]">{d.day}</span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.06em] text-[var(--accent)]">{d.clases.length} turnos</span>
              </div>
              <ul className="mt-3 space-y-2.5">
                {d.clases.map((c) => (
                  <li key={c.time} className="grid grid-cols-[3.5rem_1fr_auto] items-center gap-2 border border-[var(--ink-a10)] px-3 py-2 text-xs">
                    <span className="font-[family-name:var(--tpl-font-heading)] font-bold text-[var(--ink)]">{c.time}</span>
                    <span className="uppercase text-[var(--ink-a70)]">{c.name}</span>
                    <span className={`text-[0.65rem] font-extrabold uppercase ${intensidadColor[intensidadDe(c.name) ?? "Baja"]}`}>{intensidadDe(c.name)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.06em] text-[var(--ink-a35)]">
          {horarios.closed}
        </p>
      </div>
    </section>
  );
}
