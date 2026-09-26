import Image from "next/image";
import { gastronomia } from "@/lib/templates/gastronomia";

const { hero } = gastronomia;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--ink-a10)]">
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

        <h1 className="mt-6 max-w-4xl font-[family-name:var(--tpl-font-heading)] text-[clamp(2.6rem,7vw,5.6rem)] font-bold italic leading-[1.02] tracking-[-0.02em] text-[var(--ink)]">
          {hero.title.before}
          <span className="text-[var(--accent)]">{hero.title.highlight}</span>
          {hero.title.after}
        </h1>

        {/* Regla horizontal + fila subtítulo/acciones, estilo masthead */}
        <div className="mt-10 border-t border-[var(--ink-a15)] pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-md text-[clamp(0.95rem,1.2vw,1.05rem)] leading-relaxed text-[var(--ink-a60)]">
              {hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href={hero.primary.href}
                className="border border-[var(--ink-a25)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
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
        </div>

        {/* Foto del salón con epígrafe tipo folio */}
        <figure className="relative mt-14 overflow-hidden border border-[var(--ink-a10)]">
          <div className="relative h-72 md:h-96">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="object-cover brightness-90"
            />
          </div>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[var(--primary-a80)] via-transparent to-transparent" />
          <figcaption className="absolute bottom-4 left-6 flex items-center gap-2 text-xs uppercase tracking-[0.14em]">
            <span className="text-[var(--accent)]">Folio I ·</span>
            <span className="text-[var(--ink-a70)]">{hero.imageCaption}</span>
          </figcaption>
        </figure>

        {/* Destacados numerados, en una franja de tres módulos */}
        <ul className="mt-12 grid grid-cols-1 divide-y divide-[var(--ink-a15)] border border-[var(--ink-a15)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {hero.highlights.map((h, i) => (
            <li key={h.title} className="flex items-start gap-4 p-6 md:p-8">
              <span className="whitespace-nowrap text-xs font-bold text-[var(--accent)]">Nº {String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-[family-name:var(--tpl-font-heading)] text-lg font-semibold text-[var(--ink)]">{h.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--ink-a50)]">{h.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
