import { comercio } from "@/lib/templates/comercio";

const { categorias } = comercio;

export default function Categorias() {
  return (
    <section id="categorias" className="border-y border-[#E7DECF] bg-[#FBF7F0]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              {categorias.label}
            </span>
            <h2 className="mt-2 font-syne text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold tracking-[-0.02em] text-[#2A211A]">
              {categorias.title}
            </h2>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categorias.items.map((cat) => (
            <a
              key={cat.name}
              href="#productos"
              className="group flex flex-col items-center gap-2 rounded-2xl border border-[#E7DECF] bg-white px-4 py-6 text-center transition-all hover:-translate-y-1 hover:border-[var(--accent)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)] text-2xl transition-transform group-hover:scale-110">
                {cat.emoji}
              </span>
              <span className="text-sm font-semibold text-[#2A211A]">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
