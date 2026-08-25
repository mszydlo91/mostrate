import { comercio } from "@/lib/templates/comercio";

const { local, whatsapp } = comercio;

const waHref = whatsapp.number ? `https://wa.me/${whatsapp.number}` : "#";

export default function Local() {
  return (
    <section id="local" className="bg-[#F5EEE3]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
        {/* Info */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            {local.label}
          </span>
          <h2 className="mt-2 font-[family-name:var(--tpl-font-heading)] text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.02em] text-[#2A211A]">
            {local.title}
          </h2>
          <p className="mt-3 max-w-md text-[clamp(0.95rem,1.2vw,1.05rem)] text-[#6E6152]">
            {local.subtitle}
          </p>

          <div className="mt-8 space-y-3 text-sm text-[#2A211A]">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">◎</span>
              <span className="pt-1.5">{local.address}</span>
            </div>
            <a href={`mailto:${local.email}`} className="flex items-start gap-3 hover:text-[var(--accent)]">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">✉</span>
              <span className="pt-1.5">{local.email}</span>
            </a>
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">◍</span>
              <span className="pt-1.5">{local.instagram}</span>
            </div>
          </div>

          <a
            href={waHref}
            target={whatsapp.number ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]"
          >
            💬 {whatsapp.label}
          </a>
        </div>

        {/* Horarios */}
        <div className="rounded-3xl border border-[#E7DECF] bg-white p-7 sm:p-9">
          <h3 className="font-[family-name:var(--tpl-font-heading)] text-lg font-bold text-[#2A211A]">Horarios de atención</h3>
          <ul className="mt-5 divide-y divide-[#EFE7DA]">
            {local.hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between py-3.5">
                <span className="text-sm font-medium text-[#2A211A]">{h.day}</span>
                <span className="text-sm text-[#6E6152]">{h.time}</span>
              </li>
            ))}
          </ul>

          {/* "Mapa" decorativo */}
          <div className="mt-6 flex h-40 items-center justify-center rounded-2xl bg-[var(--accent-soft)]">
            <span className="text-4xl">📍</span>
          </div>
        </div>
      </div>
    </section>
  );
}
