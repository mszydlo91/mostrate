"use client";

import { useState } from "react";
import { gastronomia } from "@/lib/templates/gastronomia";

const { business, nav } = gastronomia;

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-[#F3ECE1]/10 bg-[#0B0906]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--tpl-font-heading)] text-lg font-bold uppercase tracking-[0.14em] text-[#F3ECE1]"
        >
          {business.name}
        </a>

        {/* Links desktop */}
        <nav className="hidden items-center gap-9 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.14em] text-[#F3ECE1]/55 transition-colors hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="border-b border-[var(--accent)] pb-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)] transition-opacity hover:opacity-70"
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
          <span
            className={`block h-px w-5 bg-[#F3ECE1] transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-[#F3ECE1] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-[#F3ECE1] transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Panel mobile */}
      <div
        className={`overflow-hidden border-t border-[#F3ECE1]/10 transition-all md:hidden ${
          open ? "max-h-80" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-medium uppercase tracking-[0.1em] text-[#F3ECE1]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            onClick={() => setOpen(false)}
            className="mt-1 py-2.5 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--accent)]"
          >
            {nav.cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
