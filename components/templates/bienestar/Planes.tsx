import { bienestar } from "@/lib/templates/bienestar";

const { planes } = bienestar;

export default function Planes() {
  return (
    <section id="planes" className="border-t border-white/10 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
          {planes.label}
        </span>
        <h2 className="mt-2 font-[family-name:var(--tpl-font-heading)] text-[clamp(1.9rem,3.4vw,2.8rem)] font-extrabold uppercase tracking-tight text-[#F5F5F5]">
          {planes.title}
        </h2>
        <p className="mt-3 max-w-md text-sm text-[#F5F5F5]/50">{planes.subtitle}</p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {planes.items.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.featured
                  ? "flex flex-col bg-[var(--accent)] p-7 text-[var(--accent-contrast)] [clip-path:polygon(20px_0,100%_0,100%_100%,0_100%,0_20px)]"
                  : "flex flex-col border border-white/10 p-7 text-[#F5F5F5]"
              }
            >
              {plan.featured && (
                <span className="mb-3 text-[0.65rem] font-extrabold uppercase tracking-[0.1em] opacity-70">
                  Más elegido
                </span>
              )}
              <h3 className="font-[family-name:var(--tpl-font-heading)] text-base font-extrabold uppercase tracking-wide">
                {plan.name}
              </h3>
              <div className="mt-4 font-[family-name:var(--tpl-font-heading)] text-3xl font-extrabold">
                {plan.price}
              </div>
              <div className={`mt-1 text-xs ${plan.featured ? "opacity-70" : "text-[#F5F5F5]/45"}`}>
                {plan.period}
              </div>

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="font-extrabold">▸</span>
                    <span className={plan.featured ? "" : "text-[#F5F5F5]/70"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={
                  plan.featured
                    ? "mt-7 border-2 border-[var(--accent-contrast)] py-3 text-center text-sm font-extrabold uppercase tracking-[0.04em] transition-opacity hover:opacity-70"
                    : "mt-7 bg-[var(--accent)] py-3 text-center text-sm font-extrabold uppercase tracking-[0.04em] text-[var(--accent-contrast)] transition-opacity hover:opacity-85"
                }
              >
                Elegir plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
