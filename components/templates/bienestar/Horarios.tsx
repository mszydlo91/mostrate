import { bienestar } from "@/lib/templates/bienestar";

const { horarios } = bienestar;

export default function Horarios() {
  return (
    <section id="horarios" className="border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
          {horarios.label}
        </span>
        <h2 className="mt-2 font-[family-name:var(--tpl-font-heading)] text-[clamp(1.9rem,3.4vw,2.8rem)] font-extrabold uppercase tracking-tight text-[#F5F5F5]">
          {horarios.title}
        </h2>
        <p className="mt-3 max-w-md text-sm text-[#F5F5F5]/50">{horarios.subtitle}</p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {horarios.days.map((d) => (
            <div key={d.day} className="border border-white/10 p-4">
              <div className="border-b border-white/10 pb-2 text-xs font-extrabold uppercase tracking-[0.06em] text-[var(--accent)]">
                {d.day}
              </div>
              <ul className="mt-3 space-y-2.5">
                {d.clases.map((c) => (
                  <li key={c.time}>
                    <div className="font-[family-name:var(--tpl-font-heading)] text-sm font-bold text-[#F5F5F5]">
                      {c.time}
                    </div>
                    <div className="text-xs text-[#F5F5F5]/45">{c.name}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.06em] text-[#F5F5F5]/35">
          {horarios.closed}
        </p>
      </div>
    </section>
  );
}
