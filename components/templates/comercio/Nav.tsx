"use client";

import { useState } from "react";
import { comercio } from "@/lib/templates/comercio";

const { business, nav, announcement, whatsapp } = comercio;

const waHref = whatsapp.number
  ? `https://wa.me/${whatsapp.number}`
  : nav.cta.href;

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100]">
      {/* Barra de anuncio */}
      <div className="bg-[var(--accent)] px-4 py-2 text-center text-xs font-medium text-[var(--accent-contrast)]">
        {announcement}
      </div>

      {/* Nav */}
      <div className="border-b border-[#E7DECF] bg-[#F5EEE3]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="font-[family-name:var(--tpl-font-heading)] text-xl font-extrabold tracking-[-0.02em] text-[#2A211A]">
            {business.name}
            <span className="text-[var(--accent)]">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#6E6152] transition-colors hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waHref}
              target={whatsapp.number ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]"
            >
              💬 {nav.cta.label}
            </a>
          </nav>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span className={`block h-0.5 w-5 rounded bg-[#2A211A] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded bg-[#2A211A] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded bg-[#2A211A] transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Panel mobile */}
        <div className={`overflow-hidden border-t border-[#E7DECF] transition-all md:hidden ${open ? "max-h-80" : "max-h-0 border-t-0"}`}>
          <nav className="flex flex-col gap-1 px-5 py-4">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#2A211A] hover:bg-[var(--accent-soft)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waHref}
              target={whatsapp.number ? "_blank" : undefined}
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-[var(--accent)] px-3 py-2.5 text-center text-sm font-semibold text-[var(--accent-contrast)]"
            >
              💬 {nav.cta.label}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
