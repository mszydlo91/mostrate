"use client";

import { useState } from "react";
import { gastronomia } from "@/lib/templates/gastronomia";

const { menu, hero } = gastronomia;

/**
 * Sección central del template: carta por categorías con presentación tipo
 * menú impreso (línea de puntos entre el nombre del plato y el precio, en
 * vez del grid de tarjetas que usan Profesional/Comercio).
 */
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menu.categories[0].id);
  const [showPrices, setShowPrices] = useState(true);

  const category = menu.categories.find((c) => c.id === activeCategory)!;

  return (
    <section id="menu">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="flex flex-col gap-2 border-b border-[#F3ECE1]/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
              {menu.label}
            </span>
            <h2 className="mt-2 font-[family-name:var(--tpl-font-heading)] text-[clamp(2rem,4vw,3rem)] font-bold italic text-[#F3ECE1]">
              {menu.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setShowPrices((v) => !v)}
            aria-pressed={showPrices}
            className="self-start border-b border-[#F3ECE1]/30 pb-0.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#F3ECE1]/70 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:self-auto"
          >
            {showPrices ? "Ocultar precios" : "Mostrar precios"}
          </button>
        </div>

        <p className="mt-6 max-w-md text-sm text-[#F3ECE1]/50">{menu.subtitle}</p>

        {/* Destacado: plato del día, aprovechando el mismo dato del Hero */}
        <div className="mt-8 flex items-baseline gap-3 border-y border-[var(--accent)]/25 bg-[var(--accent-soft)] px-5 py-4 text-sm">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
            Plato del día
          </span>
          <span className="italic text-[#F3ECE1]/85">{hero.card.dish}</span>
          {showPrices && (
            <span className="ml-auto shrink-0 font-[family-name:var(--tpl-font-heading)] font-bold text-[var(--accent)]">
              {hero.card.price}
            </span>
          )}
        </div>

        {/* Índice numerado de categorías */}
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {menu.categories.map((c, i) => {
            const active = c.id === activeCategory;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                aria-pressed={active}
                className={`flex items-baseline gap-1.5 text-sm font-semibold uppercase tracking-[0.08em] transition-colors ${
                  active ? "text-[var(--accent)]" : "text-[#F3ECE1]/40 hover:text-[#F3ECE1]/70"
                }`}
              >
                <span className="text-[0.7rem] font-normal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Platos de la categoría activa, con línea de puntos al precio */}
        <ul className="mt-8">
          {category.items.map((item) => (
            <li key={item.name} className="flex items-baseline gap-3 py-4">
              <div className="flex flex-col">
                <span className="font-[family-name:var(--tpl-font-heading)] text-lg text-[#F3ECE1]">
                  {item.name}
                </span>
                {item.desc && (
                  <span className="mt-0.5 text-sm italic text-[#F3ECE1]/45">{item.desc}</span>
                )}
              </div>
              <span
                aria-hidden
                className="mb-1.5 flex-1 border-b border-dotted border-[#F3ECE1]/25"
              />
              {showPrices && (
                <span className="shrink-0 font-[family-name:var(--tpl-font-heading)] text-base text-[var(--accent)]">
                  {item.price}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
