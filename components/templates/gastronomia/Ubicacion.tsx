import { gastronomia } from "@/lib/templates/gastronomia";

const { ubicacion } = gastronomia;

const waHref = ubicacion.whatsapp.number
  ? `https://wa.me/${ubicacion.whatsapp.number}`
  : "#contacto";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="border-b border-[#F3ECE1]/10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20">
        {/* Dirección + horarios, en tipografía grande */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            {ubicacion.label}
          </span>
          <h2 className="mt-2 font-[family-name:var(--tpl-font-heading)] text-[clamp(2rem,4vw,3rem)] font-bold italic text-[#F3ECE1]">
            {ubicacion.title}
          </h2>
          <p className="mt-4 max-w-sm text-sm text-[#F3ECE1]/50">{ubicacion.subtitle}</p>

          <p className="mt-10 font-[family-name:var(--tpl-font-heading)] text-2xl text-[#F3ECE1]">
            {ubicacion.address}
          </p>

          <ul className="mt-6 space-y-1.5 border-t border-[#F3ECE1]/10 pt-6">
            {ubicacion.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-6 text-sm text-[#F3ECE1]/60">
                <span>{h.day}</span>
                <span className="text-[#F3ECE1]/85">{h.time}</span>
              </li>
            ))}
          </ul>

          <a
            href={waHref}
            target={ubicacion.whatsapp.number ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="mt-9 inline-block border-b border-[var(--accent)] pb-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] transition-opacity hover:opacity-70"
          >
            {ubicacion.whatsapp.label} ↗
          </a>
        </div>

        {/* Modalidades, como lista separada por líneas — sin íconos en badge */}
        <div className="divide-y divide-[#F3ECE1]/10 border-t border-[#F3ECE1]/10 lg:border-t-0">
          {ubicacion.options.map((opt, i) => (
            <div key={opt.title} className="flex gap-5 py-6 first:pt-0">
              <span className="text-xs font-normal text-[#F3ECE1]/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-[family-name:var(--tpl-font-heading)] text-base font-semibold text-[#F3ECE1]">
                  {opt.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#F3ECE1]/50">{opt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
