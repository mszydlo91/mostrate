import { hero } from "@/lib/config";
import LiveStage from "./LiveStage";
import Button from "./Button";

export default function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="mx-auto max-w-shell px-[clamp(20px,4vw,60px)] pb-[clamp(56px,7vw,100px)] pt-[clamp(110px,12vw,150px)]">
        {/* Eyebrow con dot pulsante */}
        <div className="mb-[clamp(24px,3vw,40px)] flex items-center gap-2.5">
          <span className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-accent" />
          <span className="text-[0.78rem] font-medium uppercase tracking-[0.14em] text-muted">
            {hero.eyebrow}
          </span>
        </div>

        {/* Titular a todo el ancho */}
        <h1 className="text-balance font-syne text-[clamp(2.1rem,7.6vw,8rem)] font-extrabold leading-[0.92] tracking-[-0.045em]">
          {hero.title.before}
          <span className="underline-animated relative inline-block whitespace-nowrap pr-[0.08em] font-serif text-[1.08em] font-normal italic tracking-[-0.02em] text-accent after:absolute after:bottom-[0.02em] after:left-0 after:h-[0.06em] after:w-full after:origin-left after:scale-x-0 after:animate-underline-in after:bg-accent after:content-['']">
            {hero.title.highlight}
          </span>
          {hero.title.after}
        </h1>

        {/* Bajada + acciones | stats */}
        <div className="mt-[clamp(32px,4vw,56px)] grid gap-10 border-t border-line pt-[clamp(28px,3vw,40px)] lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <p className="max-w-[520px] text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-muted">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={hero.actions.primary.href} className="max-[400px]:w-full">
                {hero.actions.primary.label}
              </Button>
              <Button
                href={hero.actions.secondary.href}
                variant="outline"
                arrow={false}
                className="max-[400px]:w-full"
              >
                {hero.actions.secondary.label}
              </Button>
            </div>
          </div>

          <dl className="grid grid-cols-3 gap-4 self-end max-sm:grid-cols-1 max-sm:gap-5">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="border-l border-line pl-4">
                <dt className="font-syne text-[clamp(1.2rem,1.7vw,1.65rem)] font-extrabold leading-tight tracking-[-0.03em]">
                  {stat.num}
                </dt>
                <dd className="mt-1 text-[0.8rem] leading-snug text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Vidriera en vivo */}
        <div className="mt-[clamp(56px,7vw,96px)]">
          <LiveStage />
        </div>
      </div>
    </section>
  );
}
