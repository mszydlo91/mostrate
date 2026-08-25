import { profesional } from "@/lib/templates/profesional";

const { servicios } = profesional;

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            {servicios.label}
          </span>
          <h2 className="mt-3 font-[family-name:var(--tpl-font-heading)] text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.02em] text-[#16182B]">
            {servicios.title}
          </h2>
          <p className="mt-4 text-[clamp(0.95rem,1.2vw,1.05rem)] text-[#5A5F73]">
            {servicios.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#E6E8F0] bg-[#E6E8F0] sm:grid-cols-2">
          {servicios.items.map((item) => (
            <div
              key={item.num}
              className="group bg-white p-8 transition-colors hover:bg-[var(--accent-soft)]"
            >
              <span className="font-[family-name:var(--tpl-font-heading)] text-sm font-bold text-[var(--accent)]">
                {item.num}
              </span>
              <h3 className="mt-3 font-[family-name:var(--tpl-font-heading)] text-lg font-bold text-[#16182B]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5A5F73]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
