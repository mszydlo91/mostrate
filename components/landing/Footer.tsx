import { contact, contacto, footer, nav, site } from "@/lib/config";

const linkClass = "text-[0.9rem] text-muted transition-colors hover:text-content";

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line">
      <div className="mx-auto max-w-shell px-[clamp(20px,4vw,60px)]">
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.9rem] text-muted">{footer.text}</p>
          <ul className="flex list-none flex-wrap gap-x-8 gap-y-3">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${contact.email}`} className={linkClass}>
                {contacto.infoLabels.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Wordmark gigante al pie, completo */}
        <div
          aria-hidden="true"
          className="select-none pb-[clamp(20px,3vw,48px)] text-center font-syne text-[clamp(3rem,11.6vw,16rem)] font-extrabold leading-[0.9] tracking-[-0.06em]"
        >
          {site.logo.first}
          <span className="text-accent">{site.logo.accent}</span>
        </div>
      </div>
    </footer>
  );
}
