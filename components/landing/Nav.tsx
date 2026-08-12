"use client";

import { useState, useEffect } from "react";
import { site, nav } from "@/lib/config";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Bloquear scroll del body cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-line bg-bg/85 px-5 py-5 backdrop-blur-md sm:px-[clamp(20px,4vw,60px)]">
        <a
          href="#hero"
          onClick={close}
          className="font-syne text-[clamp(1rem,1.5vw,1.2rem)] font-extrabold tracking-[-0.02em] text-content"
        >
          {site.logo.first}
          <span className="text-accent">{site.logo.accent}</span>
        </a>

        {/* Links desktop */}
        <ul className="hidden list-none items-center gap-[clamp(16px,2.5vw,32px)] md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[clamp(0.8rem,1vw,0.9rem)] font-medium text-muted transition-colors hover:text-content"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={nav.cta.href}
              className="rounded-md bg-accent px-5 py-2 text-[clamp(0.8rem,1vw,0.9rem)] font-semibold text-white transition-opacity hover:opacity-85"
            >
              {nav.cta.label}
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="z-[200] flex h-9 w-9 flex-col items-center justify-center gap-[5px] p-1 md:hidden"
        >
          <span
            className={`block h-0.5 w-[22px] rounded bg-content transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-[22px] rounded bg-content transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-[22px] rounded bg-content transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Overlay menú mobile */}
      <div
        className={`fixed inset-0 z-[150] flex flex-col items-center justify-center gap-8 bg-bg/[0.97] transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={close}
            className="font-syne text-[clamp(1.6rem,5vw,2rem)] font-bold text-content transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
        <a
          href={nav.cta.href}
          onClick={close}
          className="mt-2 rounded-lg bg-accent px-9 py-3.5 text-[clamp(1rem,3vw,1.2rem)] font-syne font-bold text-white"
        >
          {nav.cta.label}
        </a>
      </div>
    </>
  );
}
