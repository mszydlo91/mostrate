"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";
import { portfolio } from "@/lib/config";
import Button from "./Button";
import SectionHeader from "./SectionHeader";

type Item = (typeof portfolio.items)[number];

function BrowserFrame({ item, priority = false }: { item: Item; priority?: boolean }) {
  return (
    <div className="overflow-hidden border border-content/25 bg-paper shadow-[0_35px_80px_-48px_rgba(17,19,24,.6)]">
      <div className="flex h-8 items-center border-b border-content/10 px-3">
        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-content/20" /><span className="mr-3 h-1.5 w-1.5 rounded-full bg-content/20" />
        <span className="h-1.5 w-28 bg-content/10" />
      </div>
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image key={item.desktop} src={item.desktop} alt={`Vista desktop del template ${item.name}`} fill priority={priority} sizes="(min-width: 1024px) 54vw, 92vw" className="animate-reveal-in object-cover object-top" />
      </div>
    </div>
  );
}

function LiveBrowserFrame({ item, onExit, exitRef }: { item: Item; onExit: () => void; exitRef: RefObject<HTMLButtonElement | null> }) {
  return (
    <div className="overflow-hidden border border-content/25 bg-paper shadow-[0_35px_80px_-48px_rgba(17,19,24,.6)]">
      <div className="flex h-8 items-center border-b border-content/10 bg-paper px-3">
        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-content/20" /><span className="mr-3 h-1.5 w-1.5 rounded-full bg-content/20" />
        <span className="h-1.5 w-28 bg-content/10" />
      </div>
      <div className="flex aspect-[16/9] flex-col bg-white">
        <div className="flex min-h-11 items-center justify-between gap-4 bg-content px-4 text-bg">
          <p role="status" className="truncate text-xs font-semibold uppercase tracking-[.1em]">Vista previa en vivo · {item.name}</p>
          <button ref={exitRef} type="button" onClick={onExit} className="min-h-9 shrink-0 border border-white/35 px-3 text-xs font-semibold transition-colors hover:bg-white hover:text-content">
            {portfolio.liveExit}
          </button>
        </div>
        <iframe src={`/templates/${item.slug}`} title={`Vista previa interactiva del template ${item.name}`} className="min-h-0 w-full flex-1 bg-white" />
      </div>
    </div>
  );
}

function PhoneFrame({ item, priority = false }: { item: Item; priority?: boolean }) {
  return (
    <div className="overflow-hidden border-[5px] border-content bg-content shadow-[0_25px_60px_-35px_rgba(17,19,24,.7)]">
      <div className="relative aspect-[390/700] bg-paper">
        <Image key={item.mobile} src={item.mobile} alt={`Vista mobile del template ${item.name}`} fill priority={priority} sizes="(min-width: 1024px) 180px, 30vw" className="animate-reveal-in object-cover object-top" />
      </div>
    </div>
  );
}

function WorkActions({ item }: { item: Item }) {
  return (
    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
      <Button href={`/templates/${item.slug}`} variant="text">{portfolio.demoCta}</Button>
      <Button href={`/?template=${item.slug}#contacto`} variant="text">{portfolio.contactCta}</Button>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [live, setLive] = useState(false);
  const articleRefs = useRef<Array<HTMLElement | null>>([]);
  const activeRef = useRef(0);
  const exploreRef = useRef<HTMLButtonElement>(null);
  const exitRef = useRef<HTMLButtonElement>(null);
  const activeItem = portfolio.items[active];

  const activate = useCallback((index: number) => {
    if (activeRef.current === index) return;
    activeRef.current = index;
    setLive(false);
    setActive(index);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) activate(Number((visible.target as HTMLElement).dataset.index));
    }, { rootMargin: "-28% 0px -42%", threshold: [0, 0.25, 0.6] });
    articleRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, [activate]);

  function select(index: number) {
    activate(index);
    const article = articleRefs.current[index];
    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (article?.scrollIntoView) article.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
  }

  function enterLive() {
    setLive(true);
  }

  function leaveLive() {
    setLive(false);
    requestAnimationFrame(() => exploreRef.current?.focus());
  }

  useEffect(() => {
    if (live) exitRef.current?.focus();
  }, [live]);

  return (
    <section id="trabajos" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-shell px-[clamp(20px,4vw,60px)] py-[clamp(80px,10vw,150px)]">
        <SectionHeader label={portfolio.label} title={portfolio.title} subtitle={portfolio.subtitle} className="mb-[clamp(56px,8vw,110px)]" />

        <div className="hidden lg:grid lg:grid-cols-[minmax(0,1.55fr)_minmax(310px,.65fr)] lg:gap-[clamp(48px,6vw,100px)]">
          <div>
            <div className="sticky top-28">
              <div className="grid grid-cols-[110px_minmax(0,1fr)] gap-6">
                <nav aria-label="Seleccionar template" className="border-t border-content/20">
                  {portfolio.items.map((item, index) => (
                    <button key={item.slug} type="button" aria-pressed={active === index} onClick={() => select(index)} className={`flex min-h-14 w-full items-center gap-3 border-b border-content/20 text-left text-xs font-semibold uppercase tracking-[.08em] transition-colors ${active === index ? "text-content" : "text-muted hover:text-content"}`}>
                      <span style={{ color: active === index ? item.signal : undefined }}>{String(index + 1).padStart(2, "0")}</span><span>{item.name}</span>
                    </button>
                  ))}
                </nav>
                <div className="relative pb-[7%] pr-[9%]" style={{ "--work-accent": activeItem.signal } as CSSProperties}>
                  <div className="absolute -inset-4 bottom-[4%] right-[5%] bg-[var(--work-accent)] opacity-[.09] transition-colors duration-500" />
                  <div className="relative">{live ? <LiveBrowserFrame item={activeItem} onExit={leaveLive} exitRef={exitRef} /> : <BrowserFrame item={activeItem} priority />}</div>
                  <div className="absolute bottom-0 right-0 w-[24%]"><PhoneFrame item={activeItem} priority /></div>
                </div>
              </div>
              <div className="ml-[134px] mt-4 flex min-h-11 items-center justify-between gap-5">
                <p className="text-[0.68rem] uppercase tracking-[.14em] text-muted">{live ? "La demo interactiva está activa" : "Scroll para recorrer · las capturas son páginas reales"}</p>
                {!live && <button ref={exploreRef} type="button" onClick={enterLive} className="min-h-11 border-b border-content text-sm font-semibold transition-colors hover:border-accent hover:text-accent">{portfolio.liveCta} ↗</button>}
              </div>
            </div>
          </div>

          <div className="-mt-[18vh]">
            {portfolio.items.map((item, index) => (
              <article key={item.slug} ref={(node) => { articleRefs.current[index] = node; }} data-index={index} className="flex min-h-[72vh] flex-col justify-center border-b border-line py-16 first:border-t">
                <p className="text-xs font-semibold uppercase tracking-[.15em]" style={{ color: item.signal }}>{String(index + 1).padStart(2, "0")} · {item.rubro}</p>
                <h3 className="mt-4 font-display text-[clamp(2.5rem,4vw,4.7rem)] font-semibold leading-none tracking-[-.045em]">{item.name}</h3>
                <p className="mt-5 max-w-[390px] text-lg leading-relaxed text-muted">{item.desc}</p>
                <WorkActions item={item} />
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-20 lg:hidden">
          {portfolio.items.map((item, index) => (
            <article key={item.slug} className="border-t border-content/20 pt-5">
              <div className="mb-6 flex items-baseline justify-between gap-5"><h3 className="font-display text-[clamp(2rem,10vw,3.8rem)] font-semibold tracking-[-.045em]">{item.name}</h3><span className="text-xs font-semibold" style={{ color: item.signal }}>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="relative pb-[8%] pr-[10%]"><BrowserFrame item={item} priority={index === 0} /><div className="absolute bottom-0 right-0 w-[28%]"><PhoneFrame item={item} priority={index === 0} /></div></div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[.14em]" style={{ color: item.signal }}>{item.rubro}</p>
              <p className="mt-3 max-w-xl leading-relaxed text-muted">{item.desc}</p>
              <WorkActions item={item} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
