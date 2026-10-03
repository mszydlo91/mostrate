import { contact, contacto, footer, nav, site } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-content text-bg">
      <div className="mx-auto max-w-shell px-[clamp(20px,4vw,60px)]">
        <div className="grid gap-8 border-b border-white/20 py-10 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-md text-sm leading-relaxed text-white/55">{footer.text}</p>
          <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/65">{nav.links.map((link) => <li key={link.href}><a href={link.href} className="hover:text-white">{link.label}</a></li>)}<li><a href={`mailto:${contact.email}`} className="hover:text-white">{contacto.infoLabels.email}</a></li></ul>
        </div>
        <a href="#hero" aria-label="Volver al inicio" className="block select-none py-[clamp(28px,4vw,60px)] text-center font-display text-[clamp(4rem,13vw,14rem)] font-semibold leading-[.75] tracking-[-.065em]">
          {site.logo.first}<span className="text-[#7691ff]">{site.logo.accent}</span>
        </a>
      </div>
    </footer>
  );
}
