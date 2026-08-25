import { bienestar } from "@/lib/templates/bienestar";

const { clases } = bienestar;

const intensidadClass: Record<string, string> = {
  Alta: "bg-[var(--accent)] text-[var(--accent-contrast)]",
  Media: "bg-[var(--accent-soft)] text-[var(--accent)]",
  Baja: "border border-white/20 text-[#F5F5F5]/60",
};

export default function Clases() {
  return (
    <section id="clases" className="border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
          {clases.label}
        </span>
        <h2 className="mt-2 font-[family-name:var(--tpl-font-heading)] text-[clamp(1.9rem,3.4vw,2.8rem)] font-extrabold uppercase tracking-tight text-[#F5F5F5]">
          {clases.title}
        </h2>
        <p className="mt-3 max-w-md text-sm text-[#F5F5F5]/50">{clases.subtitle}</p>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {clases.items.map((c) => (
            <div key={c.name} className="flex flex-col gap-3 bg-[#0A0A0A] p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-[family-name:var(--tpl-font-heading)] text-lg font-extrabold uppercase text-[#F5F5F5]">
                  {c.name}
                </h3>
                <span
                  className={`px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.06em] ${intensidadClass[c.intensidad]}`}
                >
                  {c.intensidad}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#F5F5F5]/50">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
