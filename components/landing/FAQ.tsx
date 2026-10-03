import { faq } from "@/lib/config";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  return (
    <section id="faq" className="border-b border-line">
      <div className="mx-auto grid max-w-shell gap-12 px-[clamp(20px,4vw,60px)] py-[clamp(80px,10vw,150px)] lg:grid-cols-[.65fr_1.35fr] lg:gap-[clamp(60px,10vw,160px)]">
        <SectionHeader label={faq.label} title={faq.title} />
        <div className="border-t border-content/25">
          {faq.items.map((item, index) => (
            <details key={item.question} className="group border-b border-content/25">
              <summary className="flex min-h-[72px] cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-[clamp(1.05rem,1.6vw,1.35rem)] font-semibold tracking-[-.025em] marker:hidden">
                <span><span className="mr-4 font-body text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>{item.question}</span>
                <span aria-hidden="true" className="text-2xl font-light transition-transform group-open:rotate-45 motion-reduce:transition-none">+</span>
              </summary>
              <p className="max-w-2xl pb-7 pl-10 leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
