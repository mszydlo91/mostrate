import { profesional } from "@/lib/templates/profesional";

const { hero } = profesional;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white"
    >
      {/* Halo de color sutil detrás */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "var(--accent)" }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Columna texto */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-3.5 py-1.5 text-xs font-semibold text-[var(--accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-syne text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#16182B]">
            {hero.title.before}
            <span className="text-[var(--accent)]">{hero.title.highlight}</span>
            {hero.title.after}
          </h1>

          <p className="mt-6 max-w-xl text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed text-[#5A5F73]">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={hero.primary.href}
              className="rounded-lg bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]"
            >
              {hero.primary.label}
            </a>
            <a
              href={hero.secondary.href}
              className="rounded-lg border border-[#D7DAE6] px-6 py-3.5 text-sm font-semibold text-[#16182B] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {hero.secondary.label}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {hero.highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-2 text-sm text-[#5A5F73]"
              >
                <span className="font-bold text-[var(--accent)]">✓</span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna visual: mini panel financiero decorativo */}
        <div className="relative">
          <div className="rounded-2xl border border-[#E6E8F0] bg-white p-6 shadow-[0_20px_60px_-20px_rgba(22,24,43,0.25)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                <span className="text-xs font-medium text-[#5A5F73]">
                  Panel del cliente
                </span>
              </div>
              <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[0.7rem] font-semibold text-[var(--accent)]">
                {hero.card.trend}
              </span>
            </div>

            <div className="mt-6">
              <div className="text-xs font-medium text-[#5A5F73]">
                {hero.card.label}
              </div>
              <div className="mt-1 font-syne text-3xl font-extrabold text-[#16182B]">
                {hero.card.amount}
              </div>
            </div>

            {/* Mini gráfico de barras */}
            <div className="mt-6 flex h-24 items-end gap-2">
              {[45, 62, 38, 70, 52, 84, 60].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}%`,
                    background: "var(--accent)",
                    opacity: 0.3 + (i / 10),
                  }}
                />
              ))}
            </div>

            <div className="mt-6 space-y-2 border-t border-[#E6E8F0] pt-4">
              {hero.card.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-[#5A5F73]">{row.label}</span>
                  <span className="flex items-center gap-1.5 font-medium text-[#16182B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
