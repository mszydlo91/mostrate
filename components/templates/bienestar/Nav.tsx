"use client";

import { useState } from "react";
import { bienestar } from "@/lib/templates/bienestar";

const { business, nav } = bienestar;

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--tpl-font-heading)] text-lg font-extrabold uppercase tracking-tight text-[#F5F5F5]"
        >
          {business.name}
        </a>

        {/* Links desktop */}
        <nav className="hidden items-center gap-7 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.08em] text-[#F5F5F5]/60 transition-colors hover:text-[#F5F5F5]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="bg-[var(--accent)] px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.06em] text-[var(--accent-contrast)] transition-opacity hover:opacity-85 [clip-path:polygon(0_0,100%_0,100%_100%,8px_100%)]"
          >
            {nav.cta.label}
          </a>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span className={`block h-0.5 w-5 bg-[#F5F5F5] transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[#F5F5F5] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[#F5F5F5] transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Panel mobile */}
      <div className={`overflow-hidden border-t border-white/10 transition-all md:hidden ${open ? "max-h-80" : "max-h-0 border-t-0"}`}>
        <nav className="flex flex-col gap-1 px-5 py-4">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-bold uppercase tracking-[0.04em] text-[#F5F5F5]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="mt-1 bg-[var(--accent)] px-4 py-3 text-center text-sm font-extrabold uppercase tracking-[0.04em] text-[var(--accent-contrast)]"
          >
            {nav.cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
