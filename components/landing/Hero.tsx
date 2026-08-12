import { hero } from "@/lib/config";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen max-w-shell flex-col justify-center px-[clamp(20px,4vw,60px)] pb-16 pt-[clamp(100px,12vw,140px)] xl:max-w-shell 2xl:max-w-shell"
    >
      {/* Eyebrow con dot pulsante */}
      <div className="mb-7 flex items-center gap-2.5">
        <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-accent" />
        <span className="text-[clamp(0.78rem,1vw,0.85rem)] font-medium tracking-[0.04em] text-muted">
          {hero.eyebrow}
        </span>
      </div>

      {/* Headline con subrayado animado */}
      <h1 className="mb-7 max-w-[900px] font-syne text-[clamp(2rem,3.4vw,3.6rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
        {hero.title.before}
        <span className="underline-animated relative inline-block text-content after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:origin-left after:scale-x-0 after:animate-underline-in after:rounded-sm after:bg-accent after:content-['']">
          {hero.title.highlight}
        </span>
        {hero.title.after}
      </h1>

      <p className="mb-10 max-w-[540px] text-[clamp(0.95rem,1.3vw,1.15rem)] leading-[1.7] text-muted">
        {hero.subtitle}
      </p>

      {/* Botones */}
      <div className="flex flex-wrap gap-4">
        <a
          href={hero.actions.primary.href}
          className="inline-block rounded-lg bg-accent px-[clamp(22px,2vw,28px)] py-[clamp(11px,1.2vw,14px)] text-[clamp(0.88rem,1vw,0.95rem)] font-semibold text-white transition hover:-translate-y-px hover:opacity-90 max-[400px]:w-full max-[400px]:text-center"
        >
          {hero.actions.primary.label}
        </a>
        <a
          href={hero.actions.secondary.href}
          className="inline-block rounded-lg border border-line px-[clamp(22px,2vw,28px)] py-[clamp(11px,1.2vw,14px)] text-[clamp(0.88rem,1vw,0.95rem)] font-medium text-content transition hover:-translate-y-px hover:border-[rgba(240,238,233,0.3)] max-[400px]:w-full max-[400px]:text-center"
        >
          {hero.actions.secondary.label}
        </a>
      </div>

      {/* Stats */}
      <div className="mt-[clamp(48px,6vw,72px)] flex flex-wrap gap-[clamp(24px,4vw,48px)] border-t border-line pt-[clamp(28px,3vw,40px)] max-[767px]:flex-col max-[767px]:gap-5">
        {hero.stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-syne text-[clamp(1.4rem,2vw,2rem)] font-extrabold text-content max-[767px]:text-2xl">
              {stat.num}
            </div>
            <div className="mt-0.5 text-[clamp(0.78rem,1vw,0.85rem)] text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
