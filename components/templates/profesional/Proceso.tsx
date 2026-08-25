import { profesional } from "@/lib/templates/profesional";

const { proceso } = profesional;

export default function Proceso() {
  return (
    <section id="proceso" className="bg-[#F7F8FA]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            {proceso.label}
          </span>
          <h2 className="mt-3 font-[family-name:var(--tpl-font-heading)] text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.02em] text-[#16182B]">
            {proceso.title}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {proceso.steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Conector */}
              {i < proceso.steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[52px] top-6 hidden h-px w-full bg-[#D7DAE6] md:block"
                />
              )}
              <div className="relative rounded-2xl border border-[#E6E8F0] bg-white p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] font-[family-name:var(--tpl-font-heading)] text-lg font-extrabold text-[var(--accent-contrast)]">
                  {step.num}
                </span>
                <h3 className="mt-5 font-[family-name:var(--tpl-font-heading)] text-lg font-bold text-[#16182B]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A5F73]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
