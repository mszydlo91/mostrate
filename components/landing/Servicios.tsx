import { servicios } from "@/lib/config";
import SectionHeader from "./SectionHeader";

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="mx-auto max-w-shell border-t border-line px-[clamp(20px,4vw,60px)] py-[clamp(60px,8vw,110px)]"
    >
      <SectionHeader
        label={servicios.label}
        title={servicios.title}
        subtitle={servicios.subtitle}
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-[clamp(16px,2vw,24px)]">
        {servicios.items.map((item) => (
          <div
            key={item.title}
            className="rounded border border-line bg-surface p-[clamp(24px,2.5vw,32px)] transition hover:-translate-y-1 hover:border-[rgba(79,127,255,0.3)]"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] bg-accent-dim text-xl">
              {item.icon}
            </div>
            <h3 className="mb-2.5 font-syne text-[clamp(0.95rem,1.2vw,1.1rem)] font-bold">
              {item.title}
            </h3>
            <p className="text-[clamp(0.85rem,1vw,0.9rem)] leading-[1.6] text-muted">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
