import { profesional } from "@/lib/templates/profesional";

const { stats } = profesional;

export default function Stats() {
  return (
    <section className="bg-[var(--accent)]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 sm:px-8 lg:grid-cols-4 lg:py-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <div className="font-[family-name:var(--tpl-font-heading)] text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold text-[var(--accent-contrast)]">
              {stat.num}
            </div>
            <div className="mt-1 text-sm text-[var(--accent-contrast)] opacity-80">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
