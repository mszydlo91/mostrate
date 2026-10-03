"use client";

import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/config";
import Logo from "./Logo";
import Button from "./Button";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    function keydown(event: KeyboardEvent) {
      if (!open) return;
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); return; }
      if (event.key !== "Tab" || !panel.current) return;
      const nodes = Array.from(panel.current.querySelectorAll<HTMLElement>('a,button:not([disabled])'));
      if (!nodes.length) return;
      const first = nodes[0]; const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    window.addEventListener("keydown", keydown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", keydown); };
  }, [open]);

  const close = () => setOpen(false);
  return (
    <>
      <nav aria-label="Navegación principal" className="fixed inset-x-0 top-0 z-[100] border-b border-line bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-shell items-center justify-between px-[clamp(20px,4vw,60px)]">
          <a href="#hero" onClick={close} aria-label="Mostrate, ir al inicio"><Logo className="text-xl" /></a>
          <ul className="hidden items-center gap-[clamp(18px,2.5vw,38px)] md:flex">{nav.links.map((link, index) => <li key={link.href}><a href={link.href} className="group py-3 text-sm font-medium text-muted hover:text-content"><span className="mr-1.5 text-[.62rem] text-accent">{String(index + 1).padStart(2, "0")}</span>{link.label}</a></li>)}</ul>
          <Button href={nav.cta.href} variant="outline" size="sm" className="max-md:hidden">{nav.cta.label}</Button>
          <button ref={trigger} type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"><span className={`h-0.5 w-6 bg-content transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} /><span className={`h-0.5 w-6 bg-content transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} /></button>
        </div>
      </nav>
      <div ref={panel} id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menú" aria-hidden={!open} inert={!open} className={`fixed inset-0 z-[90] flex flex-col justify-center bg-bg px-6 transition-opacity md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}>
        <ul>{nav.links.map((link, index) => <li key={link.href} className="border-b border-content/20"><a href={link.href} onClick={close} className="flex min-h-16 items-baseline gap-4 py-4 font-display text-[clamp(2rem,10vw,3.3rem)] font-semibold tracking-[-.045em]"><span className="font-body text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>{link.label}</a></li>)}</ul>
        <Button href={nav.cta.href} onClick={close} full className="mt-10">{nav.cta.label}</Button>
      </div>
    </>
  );
}
