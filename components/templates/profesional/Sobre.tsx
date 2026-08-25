import { profesional } from "@/lib/templates/profesional";

const { sobre, testimonio, business } = profesional;

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        {/* Visual: iniciales + credenciales */}
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="aspect-square rounded-3xl bg-[var(--accent-soft)] p-10">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[var(--accent)]">
                <span className="font-[family-name:var(--tpl-font-heading)] text-6xl font-extrabold text-[var(--accent-contrast)]">
                  {business.initials}
                </span>
              </div>
            </div>

            {/* Tarjeta de testimonio superpuesta */}
            <figure className="absolute -bottom-8 -right-4 max-w-[280px] rounded-2xl border border-[#E6E8F0] bg-white p-5 shadow-[0_20px_50px_-20px_rgba(22,24,43,0.3)] sm:-right-8">
              <blockquote className="text-sm leading-relaxed text-[#16182B]">
                “{testimonio.quote}”
              </blockquote>
              <figcaption className="mt-3 text-xs text-[#5A5F73]">
                <span className="font-semibold text-[#16182B]">
                  {testimonio.author}
                </span>
                <br />
                {testimonio.role}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            {sobre.label}
          </span>
          <h2 className="mt-3 font-[family-name:var(--tpl-font-heading)] text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.02em] text-[#16182B]">
            {sobre.title}
          </h2>

          {sobre.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mt-4 text-[clamp(0.95rem,1.2vw,1.05rem)] leading-relaxed text-[#5A5F73]"
            >
              {p}
            </p>
          ))}

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {sobre.credentials.map((c) => (
              <li
                key={c}
                className="rounded-full border border-[#E6E8F0] bg-[var(--accent-soft)] px-4 py-2 text-sm font-medium text-[#16182B]"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
