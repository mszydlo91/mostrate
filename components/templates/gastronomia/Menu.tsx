"use client";

import { gastronomia } from "@/lib/templates/gastronomia";
import { ALL, EyeIcon, menuTabs, useCarta } from "./shared";

const { menu, hero } = gastronomia;

type Item = (typeof menu.categories)[number]["items"][number];

function Dish({ item, showPrices }: { item: Item; showPrices: boolean }) {
  return (
    <li className="break-inside-avoid py-3">
      <div className="flex items-baseline gap-3">
        <span className="font-[family-name:var(--tpl-font-heading)] text-lg text-[var(--ink)]">{item.name}</span>
        <span aria-hidden className="mb-1.5 flex-1 border-b border-dotted border-[var(--ink-a25)]" />
        {showPrices && (
          <span className="shrink-0 font-[family-name:var(--tpl-font-heading)] text-base text-[var(--accent)]">
            {item.price}
          </span>
        )}
      </div>
      {item.desc && <p className="mt-0.5 text-sm italic text-[var(--ink-a45)]">{item.desc}</p>}
    </li>
  );
}

/**
 * Sección central del template: carta por categorías con presentación tipo
 * menú impreso (línea de puntos entre el nombre del plato y el precio). Arranca
 * mostrando toda la carta; el índice filtra por categoría.
 */
export default function Menu() {
  const { active: activeCategory, setActive: setActiveCategory, showPrices, togglePrices, visible } = useCarta();

  return (
    <section id="menu" className="border-b border-[var(--ink-a10)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-4 border-b border-[var(--ink-a15)] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              {menu.label}
            </span>
            <h2 className="mt-2 font-[family-name:var(--tpl-font-heading)] text-[clamp(2rem,4vw,3rem)] font-bold italic text-[var(--ink)]">
              {menu.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={togglePrices}
            aria-pressed={showPrices}
            className="flex items-center gap-2 self-start border border-[var(--ink-a25)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink-a70)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:self-auto"
          >
            <EyeIcon off={!showPrices} />
            {showPrices ? "Ocultar precios" : "Mostrar precios"}
          </button>
        </div>

        <p className="mt-6 max-w-md text-sm text-[var(--ink-a50)]">{menu.subtitle}</p>

        {/* Índice numerado de categorías (00 = toda la carta) */}
        <div className="mt-10 flex flex-wrap gap-2 md:gap-3">
          {menuTabs.map((c, i) => {
            const active = c.id === activeCategory;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                aria-pressed={active}
                className={`flex items-baseline gap-1.5 border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
                  active
                    ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                    : "border-[var(--ink-a15)] text-[var(--ink-a50)] hover:border-[var(--ink-a40)] hover:text-[var(--ink)]"
                }`}
              >
                <span className="text-[0.65rem] font-normal">{String(i).padStart(2, "0")}</span>
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Destacado: plato del día, con el mismo dato del Hero */}
        <div className="mt-10 flex flex-col gap-3 border border-[var(--accent)] bg-[var(--accent-soft)] p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="border border-[var(--accent)] px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                {hero.card.label}
              </span>
              <span className="text-xs text-[var(--ink-a50)]">{hero.card.note}</span>
            </div>
            <p className="mt-3 font-[family-name:var(--tpl-font-heading)] text-2xl text-[var(--ink)]">{hero.card.dish}</p>
          </div>
          {showPrices && (
            <span className="shrink-0 font-[family-name:var(--tpl-font-heading)] text-xl font-bold text-[var(--accent)]">
              {hero.card.price}
            </span>
          )}
        </div>

        {/* Platos, agrupados por categoría con línea de puntos al precio */}
        <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-2">
          {visible.map((c) => (
            <div key={c.id} className={activeCategory === ALL ? "" : "md:col-span-2"}>
              {activeCategory === ALL && (
                <h3 className="border-b border-[var(--ink-a15)] pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  {c.label}
                </h3>
              )}
              <ul className={activeCategory === ALL ? "mt-2" : "md:columns-2 md:gap-14"}>
                {c.items.map((item) => (
                  <Dish key={item.name} item={item} showPrices={showPrices} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
