import { bienestar } from "@/lib/templates/bienestar";
import Counter from "./Counter";

const { hero } = bienestar;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0A0A0A]">
      {/* Bloque angular de acento, decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] bg-[var(--accent)] opacity-[0.12] blur-3xl [clip-path:polygon(20%_0,100%_0,100%_100%,0_80%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-20 lg:pb-20 lg:pt-24">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
          <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
          {hero.eyebrow}
        </span>

        <h1 className="mt-6 max-w-3xl font-[family-name:var(--tpl-font-heading)] text-[clamp(2.6rem,7vw,5.2rem)] font-extrabold uppercase leading-[0.98] tracking-tight text-[#F5F5F5]">
          {hero.title.before}
          <span className="text-[var(--accent)]">{hero.title.highlight}</span>
          {hero.title.after}
        </h1>

        <p className="mt-6 max-w-lg text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed text-[#F5F5F5]/60">
          {hero.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={hero.primary.href}
            className="bg-[var(--accent)] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.04em] text-[var(--accent-contrast)] transition-opacity hover:opacity-85 [clip-path:polygon(0_0,100%_0,100%_100%,12px_100%)]"
          >
            {hero.primary.label}
          </a>
          <a
            href={hero.secondary.href}
            className="border-2 border-[#F5F5F5]/20 px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.04em] text-[#F5F5F5] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {hero.secondary.label}
          </a>
        </div>

        {/* Stats animados */}
        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-[family-name:var(--tpl-font-heading)] text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold text-[#F5F5F5]">
                <Counter value={stat.num} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-[0.06em] text-[#F5F5F5]/45">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
