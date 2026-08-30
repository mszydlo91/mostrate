import { precios } from "@/lib/config";
import SectionHeader from "./SectionHeader";

export default function Precios() {
  return (
    <section
      id="precios"
      className="mx-auto max-w-shell border-t border-line px-[clamp(20px,4vw,60px)] py-[clamp(60px,8vw,110px)]"
    >
      <SectionHeader
        label={precios.label}
        title={precios.title}
        subtitle={precios.subtitle}
      />

      <div className="grid max-w-[760px] grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-[clamp(16px,2vw,24px)]">
        {precios.plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex h-full flex-col rounded border bg-surface p-[clamp(28px,3vw,36px)] ${
              plan.featured ? "border-accent" : "border-line"
            }`}
          >
            {plan.featured && plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3.5 py-1 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-white">
                {plan.badge}
              </span>
            )}

            <div className="mb-3 font-syne text-[clamp(0.85rem,1vw,1rem)] font-bold text-muted">
              {plan.name}
            </div>
            <div className="mb-1 font-syne text-[clamp(2rem,3vw,2.8rem)] font-extrabold leading-[1.15]">
              {plan.price}
            </div>
            <div className="mb-7 text-[clamp(0.78rem,0.9vw,0.85rem)] text-muted">
              {plan.period}
            </div>

            <ul className="mb-8 flex flex-1 list-none flex-col gap-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-[clamp(0.85rem,1vw,0.9rem)] text-content"
                >
                  <span className="mt-px flex-shrink-0 font-bold text-accent">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={plan.cta.href}
              className={`block rounded-lg py-[13px] text-center text-[clamp(0.85rem,1vw,0.9rem)] font-semibold transition hover:-translate-y-px hover:opacity-85 ${
                plan.cta.style === "solid"
                  ? "bg-accent text-white"
                  : "border border-line text-content"
              }`}
            >
              {plan.cta.label}
            </a>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-[clamp(0.82rem,1vw,0.85rem)] text-muted">
        {precios.note}
      </p>
    </section>
  );
}
