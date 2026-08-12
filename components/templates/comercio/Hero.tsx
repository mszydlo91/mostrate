import { comercio } from "@/lib/templates/comercio";

const { hero } = comercio;

export default function Hero() {
  return (
    <section id="top" className="bg-[#F5EEE3]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1fr] lg:py-20">
        {/* Texto */}
        <div>
          <span className="inline-block rounded-full bg-[var(--accent-soft)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)]">
            {hero.badge}
          </span>

          <h1 className="mt-5 font-syne text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-[#2A211A]">
            {hero.title.before}
            <span className="text-[var(--accent)]">{hero.title.highlight}</span>
            {hero.title.after}
          </h1>

          <p className="mt-5 max-w-md text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed text-[#6E6152]">
            {hero.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={hero.primary.href}
              className="rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]"
            >
              {hero.primary.label}
            </a>
            <a
              href={hero.secondary.href}
              className="rounded-full border border-[#D9CDB9] bg-white px-7 py-3.5 text-sm font-semibold text-[#2A211A] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {hero.secondary.label}
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            {hero.trust.map((t) => (
              <li key={t} className="flex items-center gap-1.5 text-sm text-[#6E6152]">
                <span className="text-[var(--accent)]">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Collage de tiles */}
        <div className="grid grid-cols-2 gap-4">
          {hero.tiles.map((tile, i) => (
            <div
              key={tile.name}
              className={`flex flex-col justify-between rounded-3xl p-5 ${
                i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"
              } ${i === 1 ? "mt-8" : ""} ${i === 2 ? "-mt-8" : ""}`}
              style={{ background: tile.gradient }}
            >
              <span className="text-3xl">{tile.emoji}</span>
              <span className="font-syne text-sm font-bold text-[#2A211A]/80">
                {tile.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
