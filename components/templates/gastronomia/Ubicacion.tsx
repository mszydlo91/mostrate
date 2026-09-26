"use client";

import { gastronomia } from "@/lib/templates/gastronomia";
import { ChatIcon, optionIcon, waHref, waTarget } from "./shared";

const { ubicacion } = gastronomia;

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="border-b border-[var(--ink-a10)] bg-[var(--primary-alt)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
          {ubicacion.label}
        </span>
        <h2 className="mt-2 font-[family-name:var(--tpl-font-heading)] text-[clamp(2rem,4vw,3rem)] font-bold italic text-[var(--ink)]">
          {ubicacion.title}
        </h2>
        <p className="mt-4 max-w-sm text-sm text-[var(--ink-a50)]">{ubicacion.subtitle}</p>

        {/* Dirección y horarios, con filete lateral */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="border-l-2 border-[var(--accent)] pl-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-a45)]">Dirección</p>
            <p className="mt-1 font-[family-name:var(--tpl-font-heading)] text-2xl text-[var(--ink)]">
              {ubicacion.address}
            </p>
          </div>
          <div className="border-l-2 border-[var(--ink-a20)] pl-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-a45)]">Horarios</p>
            <ul className="mt-1 space-y-1">
              {ubicacion.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-6 text-sm text-[var(--ink-a60)]">
                  <span>{h.day}</span>
                  <span className="text-[var(--ink-a85)]">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modalidades en módulos de filete fino */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ubicacion.options.map((opt, i) => {
            const Icon = optionIcon[opt.icon];
            return (
              <div key={opt.title} className="border border-[var(--ink-a15)] bg-[var(--primary-a50)] p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                    Modalidad {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-5 w-5 text-[var(--ink-a40)]" />
                </div>
                <h3 className="mt-4 font-[family-name:var(--tpl-font-heading)] text-lg font-semibold text-[var(--ink)]">
                  {opt.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-a50)]">{opt.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Franja de pedido por WhatsApp */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border border-[var(--ink-a20)] p-7 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <ChatIcon className="h-7 w-7 shrink-0 text-[var(--accent)]" />
            <div>
              <p className="font-[family-name:var(--tpl-font-heading)] text-lg text-[var(--ink)]">
                {ubicacion.whatsapp.title}
              </p>
              <p className="text-sm text-[var(--ink-a50)]">{ubicacion.whatsapp.text}</p>
            </div>
          </div>
          <a
            href={waHref}
            {...waTarget}
            className="shrink-0 border border-[var(--accent)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]"
          >
            {ubicacion.whatsapp.label} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
