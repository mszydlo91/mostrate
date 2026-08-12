import Link from "next/link";
import { templates } from "@/lib/config";
import SectionHeader from "./SectionHeader";
import TemplatePreview from "./TemplatePreview";

export default function Templates() {
  return (
    <section
      id="templates"
      className="mx-auto max-w-shell border-t border-line px-[clamp(20px,4vw,60px)] py-[clamp(60px,8vw,110px)]"
    >
      <SectionHeader
        label={templates.label}
        title={templates.title}
        subtitle={templates.subtitle}
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))] gap-[clamp(16px,2vw,24px)]">
        {templates.items.map((tpl) => (
          <Link
            key={tpl.slug}
            href={`/templates/${tpl.slug}`}
            className="group flex flex-col overflow-hidden rounded border border-line transition hover:-translate-y-1 hover:border-[rgba(79,127,255,0.4)]"
          >
            <TemplatePreview gradient={tpl.gradient} accent={tpl.accent} />
            <div className="flex flex-1 flex-col bg-surface p-[clamp(16px,2vw,20px)] px-[clamp(18px,2.2vw,24px)]">
              <h3 className="mb-1 font-syne text-[clamp(0.9rem,1.1vw,1rem)] font-bold">
                {tpl.name}
              </h3>
              <p className="flex-1 text-[clamp(0.8rem,0.95vw,0.85rem)] text-muted">
                {tpl.desc}
              </p>
              <span
                className="mt-3 inline-block self-start rounded-full bg-accent-dim px-2.5 py-[3px] text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-accent"
                style={{
                  backgroundColor: `${tpl.accent}22`,
                  color: tpl.accent,
                }}
              >
                {tpl.tag}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
