import { gastronomia } from "@/lib/templates/gastronomia";

const { hero } = gastronomia;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-[#F3ECE1]/10">
      {/* Vignette cálida de fondo, en vez de una foto */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 85% 0%, var(--accent-soft), transparent 60%), radial-gradient(80% 60% at 10% 100%, var(--accent-soft), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:pb-28 lg:pt-24">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
          {hero.eyebrow}
        </span>

        <h1 className="mt-6 max-w-4xl font-[family-name:var(--tpl-font-heading)] text-[clamp(2.6rem,7vw,5.6rem)] font-bold italic leading-[1.02] tracking-[-0.02em] text-[#F3ECE1]">
          {hero.title.before}
          <span className="text-[var(--accent)]">{hero.title.highlight}</span>
          {hero.title.after}
        </h1>

        {/* Regla horizontal + fila subtítulo/acciones, estilo masthead */}
        <div className="mt-10 border-t border-[#F3ECE1]/15 pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-md text-[clamp(0.95rem,1.2vw,1.05rem)] leading-relaxed text-[#F3ECE1]/60">
              {hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href={hero.primary.href}
                className="border border-[#F3ECE1]/25 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#F3ECE1] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {hero.primary.label}
              </a>
              <a
                href={hero.secondary.href}
                className="border-b border-[var(--accent)] pb-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] transition-opacity hover:opacity-70"
              >
                {hero.secondary.label}
              </a>
            </div>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-2 border-t border-[#F3ECE1]/10 pt-6">
            {hero.highlights.map((h) => (
              <li
                key={h}
                className="text-xs font-medium uppercase tracking-[0.1em] text-[#F3ECE1]/45"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
