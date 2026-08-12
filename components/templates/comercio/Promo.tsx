import { comercio } from "@/lib/templates/comercio";

const { promo, whatsapp } = comercio;

const waHref = whatsapp.number ? `https://wa.me/${whatsapp.number}` : promo.cta.href;

export default function Promo() {
  return (
    <section className="bg-[var(--accent)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-14 text-center sm:px-8 lg:flex-row lg:justify-between lg:text-left">
        <div>
          <span className="inline-block rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-[var(--accent-contrast)]">
            {promo.badge}
          </span>
          <h2 className="mt-3 font-syne text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold leading-tight text-[var(--accent-contrast)]">
            {promo.title}
          </h2>
          <p className="mt-2 max-w-xl text-[var(--accent-contrast)] opacity-90">
            {promo.subtitle}
          </p>
        </div>

        <a
          href={waHref}
          target={whatsapp.number ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-white px-8 py-4 text-sm font-bold text-[var(--accent-strong)] transition-transform hover:-translate-y-0.5"
        >
          {promo.cta.label}
        </a>
      </div>
    </section>
  );
}
