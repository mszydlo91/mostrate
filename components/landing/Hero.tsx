import Image from "next/image";
import { hero } from "@/lib/config";
import Button from "./Button";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[min(900px,100svh)] overflow-hidden border-b border-line pt-20">
      <div className="mx-auto grid min-h-[calc(min(900px,100svh)-5rem)] max-w-shell grid-rows-[auto_1fr] px-[clamp(20px,4vw,60px)] pb-[clamp(28px,4vw,56px)]">
        <div className="flex items-center justify-between border-b border-line py-4 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-muted">
          <span>{hero.eyebrow}</span>
          <span className="hidden sm:block">Buenos Aires · Argentina</span>
        </div>

        <div className="grid items-center gap-8 py-[clamp(32px,6vh,72px)] lg:grid-cols-[1.02fr_.98fr] lg:gap-[clamp(48px,7vw,112px)]">
          <div className="relative z-10">
            <p className="mb-5 flex items-center gap-3 text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-accent">
              <span className="h-px w-8 bg-accent" /> Estudio web independiente
            </p>
            <h1 className="max-w-[11ch] text-balance font-display text-[clamp(2.7rem,6.2vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
              {hero.title.before}<span className="text-accent">{hero.title.highlight}</span>{hero.title.after}
            </h1>
            <p className="mt-7 max-w-[570px] text-[clamp(1rem,1.35vw,1.2rem)] leading-[1.65] text-muted">{hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={hero.actions.primary.href}>{hero.actions.primary.label}</Button>
              <Button href={hero.actions.secondary.href} variant="outline">{hero.actions.secondary.label}</Button>
            </div>
            <p className="mt-6 max-w-[520px] border-l border-accent pl-4 text-sm leading-relaxed text-muted">{hero.note}</p>
          </div>

          <div className="relative mx-auto w-full max-w-[760px] pb-[8%] pl-[4%] pr-[12%] pt-[5%] lg:-mr-[4vw]">
            <div aria-hidden="true" className="absolute left-0 top-0 font-display text-[clamp(4rem,10vw,10rem)] font-semibold leading-none text-surface">01</div>
            <div className="relative aspect-[16/10] overflow-hidden border border-content/20 bg-paper shadow-[0_32px_80px_-40px_rgba(17,19,24,.45)]">
              <div className="flex h-7 items-center gap-1.5 border-b border-content/10 bg-paper px-3"><span className="h-1.5 w-1.5 rounded-full bg-content/20" /><span className="h-1.5 w-1.5 rounded-full bg-content/20" /><span className="ml-3 h-1.5 w-24 bg-content/10" /></div>
              <div className="relative h-[calc(100%-1.75rem)]"><Image src="/previews/profesional.webp" alt="Vista de una página profesional diseñada por Mostrate" fill priority sizes="(min-width: 1024px) 46vw, 85vw" className="object-cover object-top" /></div>
            </div>
            <div className="absolute bottom-0 right-0 w-[27%] overflow-hidden border-[5px] border-content bg-content shadow-[0_20px_50px_-24px_rgba(17,19,24,.55)]">
              <div className="relative aspect-[390/690] bg-paper"><Image src="/previews/profesional-mobile.webp" alt="La misma página adaptada a celular" fill priority sizes="180px" className="object-cover object-top" /></div>
            </div>
            <span className="absolute bottom-[2%] left-0 -rotate-90 origin-bottom-left text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">Desktop + mobile</span>
          </div>
        </div>
      </div>
    </section>
  );
}
