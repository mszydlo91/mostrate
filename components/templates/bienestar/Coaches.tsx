import { bienestar } from "@/lib/templates/bienestar";

const { coaches } = bienestar;

export default function Coaches() {
  return (
    <section id="coaches" className="border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
          {coaches.label}
        </span>
        <h2 className="mt-2 font-[family-name:var(--tpl-font-heading)] text-[clamp(1.9rem,3.4vw,2.8rem)] font-extrabold uppercase tracking-tight text-[#F5F5F5]">
          {coaches.title}
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {coaches.items.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-3 border border-white/10 p-6 text-center">
              <span className="flex h-14 w-14 items-center justify-center bg-[var(--accent)] font-[family-name:var(--tpl-font-heading)] text-lg font-extrabold text-[var(--accent-contrast)] [clip-path:polygon(0_0,100%_0,100%_100%,20%_100%)]">
                {c.initials}
              </span>
              <div>
                <div className="font-[family-name:var(--tpl-font-heading)] text-sm font-extrabold uppercase text-[#F5F5F5]">
                  {c.name}
                </div>
                <div className="mt-0.5 text-xs text-[#F5F5F5]/45">{c.specialty}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
