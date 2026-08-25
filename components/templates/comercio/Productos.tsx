import { comercio } from "@/lib/templates/comercio";

const { productos, whatsapp } = comercio;

const waHref = whatsapp.number ? `https://wa.me/${whatsapp.number}` : "#local";

export default function Productos() {
  return (
    <section id="productos" className="bg-[#F5EEE3]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            {productos.label}
          </span>
          <h2 className="mt-2 font-[family-name:var(--tpl-font-heading)] text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-[-0.02em] text-[#2A211A]">
            {productos.title}
          </h2>
          <p className="mt-3 text-[clamp(0.95rem,1.2vw,1.05rem)] text-[#6E6152]">
            {productos.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productos.items.map((prod) => (
            <div
              key={prod.name}
              className="group overflow-hidden rounded-3xl border border-[#E7DECF] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(42,33,26,0.35)]"
            >
              {/* Imagen (tile) */}
              <div
                className="relative flex aspect-[4/3] items-center justify-center"
                style={{ background: prod.gradient }}
              >
                <span className="text-5xl transition-transform group-hover:scale-110">
                  {prod.emoji}
                </span>
                {prod.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold text-[var(--accent-contrast)]">
                    {prod.tag}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-[family-name:var(--tpl-font-heading)] text-base font-bold leading-snug text-[#2A211A]">
                  {prod.name}
                </h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-[var(--accent)]">
                    {prod.price}
                  </span>
                  <a
                    href={waHref}
                    target={whatsapp.number ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#E7DECF] px-4 py-2 text-xs font-semibold text-[#2A211A] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
