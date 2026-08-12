import { comercio } from "@/lib/templates/comercio";

const { beneficios } = comercio;

export default function Beneficios() {
  return (
    <section className="bg-[#FBF7F0]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-14 sm:px-8 lg:grid-cols-4">
        {beneficios.items.map((b) => (
          <div key={b.title} className="flex flex-col items-center gap-2 text-center lg:flex-row lg:items-start lg:gap-4 lg:text-left">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-2xl">
              {b.icon}
            </span>
            <div>
              <h3 className="font-syne text-sm font-bold text-[#2A211A]">{b.title}</h3>
              <p className="mt-0.5 text-sm text-[#6E6152]">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
