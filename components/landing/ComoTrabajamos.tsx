import { comoTrabajamos } from "@/lib/config";
import { labelClass } from "./SectionHeader";

export default function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="overflow-hidden border-b border-line bg-bg">
      <div className="mx-auto max-w-shell px-[clamp(20px,4vw,60px)] py-[clamp(80px,9vw,132px)]">
        <div className="grid gap-8 border-b border-content/25 pb-[clamp(36px,5vw,64px)] lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div>
            <span className={`${labelClass} mb-5`}><span className="h-px w-6 bg-accent" />{comoTrabajamos.label}</span>
            <h2 className="max-w-[15ch] text-balance font-display text-[clamp(2.4rem,5vw,5.8rem)] font-semibold leading-[.96] tracking-[-.055em]">
              {comoTrabajamos.title}
            </h2>
          </div>
          <p className="max-w-[530px] text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-muted lg:justify-self-end">
            {comoTrabajamos.subtitle}
          </p>
        </div>

        <ol className="relative mt-10 grid gap-0 before:absolute before:left-0 before:right-0 before:top-[4.25rem] before:hidden before:h-px before:bg-content/25 before:content-[''] md:grid-cols-5 md:pt-10 md:before:block">
          {comoTrabajamos.items.map((item, index) => (
            <li key={item.number} className="relative grid grid-cols-[58px_1fr] gap-4 border-b border-content/20 py-7 last:border-b-0 md:block md:border-b-0 md:border-l md:border-content/20 md:px-[clamp(14px,2vw,28px)] md:py-0 md:first:border-l-0 md:first:pl-0 md:last:pr-0">
              <span className={`relative z-10 flex h-11 w-11 items-center justify-center bg-bg text-xs font-semibold text-accent md:mb-[clamp(54px,7vw,100px)] md:h-14 md:w-14 md:-translate-x-[calc(50%+1px)] md:border md:border-content/25 ${index === 0 ? "md:translate-x-0" : ""}`}>
                {item.number}
              </span>
              <div className={index % 2 ? "md:translate-y-8" : ""}>
                <h3 className="font-display text-[clamp(1.2rem,1.75vw,1.65rem)] font-semibold leading-tight tracking-[-.03em]">{item.title}</h3>
                <p className="mt-3 max-w-[260px] leading-relaxed text-muted">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
