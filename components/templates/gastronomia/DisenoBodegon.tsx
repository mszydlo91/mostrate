"use client";

/**
 * Gastronomía — Diseño 2 "Bodegón" (base: "Tavola de Barrio" de Stitch).
 * Bodegón porteño tradicional impreso: fondo claro de papel, condensada en
 * mayúsculas, rojo de mantel, cajas de filete fino y carta en dos columnas por
 * categoría.
 */
import Image from "next/image";
import { gastronomia } from "@/lib/templates/gastronomia";
import {
  ArrowIcon,
  ChatIcon,
  ClockIcon,
  EyeIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  PinIcon,
  menuTabs,
  optionIcon,
  telHref,
  useCarta,
  useMobileMenu,
  useReserva,
  waHref,
  waTarget,
} from "./shared";

const { business, nav, hero, fotos, nosotros, menu, ubicacion, contacto, footer } = gastronomia;

const heading = "font-[family-name:var(--tpl-font-heading)] uppercase";
const wrap = "mx-auto max-w-7xl px-4 md:px-8";
const label = "text-xs font-semibold uppercase tracking-[0.14em]";
const box = "border border-[var(--ink-a20)]";
const btnSolid =
  "inline-flex items-center justify-center gap-2 border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]";
const btnLine =
  "inline-flex items-center justify-center gap-2 border border-[var(--ink)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--primary)]";

function Nav() {
  const menuState = useMobileMenu();
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--ink-a20)] bg-[var(--primary)]">
      <div className={`${wrap} flex items-center justify-between py-3`}>
        <a href="#top" onClick={menuState.close} className="flex flex-col leading-none">
          <span className={`${heading} whitespace-nowrap text-xl font-semibold tracking-wide text-[var(--accent)] sm:text-2xl`}>{business.name}</span>
          <span className="mt-1 text-xs tracking-wider text-[var(--ink-a60)]">{footer.tagline.split(" · ")[1]} · Desde 1998</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className={`${label} text-[var(--ink-a70)] transition-colors hover:text-[var(--accent)]`}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={telHref} aria-label={`Llamar al ${contacto.phone}`} className="hidden p-1 text-[var(--ink-a70)] hover:text-[var(--accent)] lg:block">
            <PhoneIcon className="h-5 w-5" />
          </a>
          <a href={waHref} {...waTarget} className={`${btnLine} hidden !px-4 !py-2 !text-xs lg:inline-flex`}>
            Pedidos
          </a>
          <a href={nav.cta.href} className={`${btnSolid} !hidden !px-4 !py-2 !text-xs sm:!inline-flex`}>
            {nav.cta.label}
          </a>
          <button type="button" onClick={menuState.toggle} aria-label={menuState.open ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuState.open} className="p-1 text-[var(--ink)] md:hidden">
            <MenuIcon open={menuState.open} className="h-6 w-6" />
          </button>
        </div>
      </div>
      {menuState.open && (
        <div className="border-t border-[var(--ink-a20)] px-4 pb-6 md:hidden">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} onClick={menuState.close} className={`${heading} block border-b border-[var(--ink-a10)] py-4 text-3xl text-[var(--ink)]`}>
              {l.label}
            </a>
          ))}
          <a href={nav.cta.href} onClick={menuState.close} className={`${btnSolid} mt-6 w-full`}>
            {nav.cta.label}
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-[var(--ink-a20)]">
      <div className={`${wrap} py-10 md:py-16`}>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className={`${box} ${label} mb-5 inline-flex items-center gap-2 bg-[var(--ink-a5)] px-3 py-1 text-[var(--ink-a70)]`}>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /> {hero.eyebrow}
            </span>
            <h1 className={`${heading} mb-6 text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-[var(--ink)]`}>
              {hero.title.before}
              <span className="text-[var(--accent)]">{hero.title.highlight}</span>
              {hero.title.after}
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--ink-a70)]">{hero.subtitle}</p>
            <div className="mb-10 flex flex-wrap gap-4">
              <a href={hero.primary.href} className={btnSolid}>{hero.primary.label}</a>
              <a href={hero.secondary.href} className={btnLine}>{hero.secondary.label}</a>
            </div>

            {/* Plato del día */}
            <div className={`${box} bg-[var(--ink-a5)] p-5`}>
              <div className="mb-3 flex flex-col justify-between gap-3 border-b border-[var(--ink-a20)] pb-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2">
                  <span className={`${label} bg-[var(--accent)] px-2 py-0.5 text-[var(--accent-contrast)]`}>{hero.card.label}</span>
                  <span className="text-sm text-[var(--ink-a60)]">{hero.card.note}</span>
                </div>
                <span className={`${heading} text-2xl font-semibold text-[var(--accent)]`}>{hero.card.price}</span>
              </div>
              <p className={`${heading} text-xl font-semibold text-[var(--ink)]`}>{hero.card.dish}</p>
              <a href={waHref} {...waTarget} className={`${label} mt-4 inline-flex items-center gap-2 border-b border-[var(--accent)] text-[var(--accent)]`}>
                {ubicacion.whatsapp.label} <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Fotos enmarcadas con epígrafe */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-5">
            {[
              { img: fotos.sorrentinos, h: "h-72", caption: hero.card.dish, right: "Plato de la casa" },
              { img: hero.image, h: "h-48", caption: hero.imageCaption, right: "Desde 1998" },
            ].map((f) => (
              <figure key={f.img.src} className={`${box} bg-[var(--primary-alt)] p-1.5`}>
                <div className={`relative ${f.h}`}>
                  <Image src={f.img.src} alt={f.img.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="mt-1.5 flex items-center justify-between gap-4 border-t border-[var(--ink-a10)] p-2.5 text-sm text-[var(--ink-a60)]">
                  <span>{f.caption}</span>
                  <span className="shrink-0 font-medium text-[var(--ink)]">{f.right}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Franja de destacados */}
        <ul className={`${box} mt-10 grid grid-cols-1 divide-y divide-[var(--ink-a20)] bg-[var(--ink-a5)] md:grid-cols-3 md:divide-x md:divide-y-0`}>
          {hero.highlights.map((h) => (
            <li key={h.title} className="p-5">
              <p className={`${heading} mb-1 text-xl font-semibold text-[var(--accent)]`}>{h.title}</p>
              <p className="text-sm text-[var(--ink-a60)]">{h.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Nosotros() {
  const [year, detail] = nosotros.detail.split(" · ");
  return (
    <section id="nosotros" className="border-b border-[var(--ink-a20)] bg-[var(--primary-alt)]">
      <div className={`${wrap} grid grid-cols-1 items-center gap-10 py-14 md:py-20 lg:grid-cols-12`}>
        <div className={`${box} bg-[var(--primary)] p-6 lg:col-span-4`}>
          <span className={`${label} mb-2 block text-[var(--accent)]`}>{year}</span>
          <h2 className={`${heading} mb-4 text-4xl font-semibold leading-tight text-[var(--ink)]`}>{detail}</h2>
          <div className="h-0.5 w-12 bg-[var(--accent)]" />
        </div>
        <blockquote className={`${heading} text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-tight text-[var(--ink)] lg:col-span-8`}>
          &ldquo;{nosotros.text}&rdquo;
        </blockquote>
      </div>
    </section>
  );
}

function Carta() {
  const { active, setActive, showPrices, togglePrices, visible, all } = useCarta();
  return (
    <section id="menu" className="border-b border-[var(--ink-a20)]">
      <div className={`${wrap} py-14 md:py-20`}>
        <div className="mb-6 flex flex-col justify-between gap-4 border-b border-[var(--ink)] pb-4 md:flex-row md:items-end">
          <div>
            <span className={`${label} mb-1 block text-[var(--accent)]`}>{menu.label}</span>
            <h2 className={`${heading} text-[clamp(2.2rem,5vw,3.5rem)] font-semibold tracking-tight text-[var(--ink)]`}>{menu.title}</h2>
          </div>
          <button type="button" onClick={togglePrices} aria-pressed={showPrices} className={`${box} ${label} inline-flex items-center gap-2 self-start px-3 py-1.5 text-[var(--ink)] hover:border-[var(--accent)] md:self-auto`}>
            <EyeIcon off={!showPrices} /> {showPrices ? "Ocultar precios" : "Mostrar precios"}
          </button>
        </div>
        <p className="mb-6 max-w-lg text-sm text-[var(--ink-a60)]">{menu.subtitle}</p>

        <div className="mb-10 overflow-x-auto border-b border-[var(--ink-a20)]">
          <div className="flex min-w-max gap-6">
            {menuTabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                aria-pressed={active === t.id}
                className={`${label} border-b-2 pb-3 transition-colors ${
                  active === t.id ? "border-[var(--accent)] text-[var(--accent)]" : "border-transparent text-[var(--ink-a60)] hover:text-[var(--ink)]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
          {visible.map((c) => (
            <div key={c.id} className={all ? "" : "md:col-span-2"}>
              <h3 className={`${heading} mb-2 border-b border-[var(--ink-a20)] pb-2 text-xl font-semibold text-[var(--accent)]`}>{c.label}</h3>
              <ul className={all ? "" : "md:columns-2 md:gap-12"}>
                {c.items.map((item) => (
                  <li key={item.name} className="break-inside-avoid border-b border-[var(--ink-a10)] py-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className={`${heading} text-lg font-medium text-[var(--ink)]`}>{item.name}</span>
                      {showPrices && <span className={`${heading} shrink-0 text-lg font-semibold text-[var(--accent)]`}>{item.price}</span>}
                    </div>
                    {item.desc && <p className="mt-1 text-sm text-[var(--ink-a60)]">{item.desc}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ubicacion() {
  return (
    <section id="ubicacion" className="border-b border-[var(--ink-a20)] bg-[var(--primary-alt)]">
      <div className={`${wrap} py-14 md:py-20`}>
        <div className="mb-12 max-w-2xl">
          <span className={`${label} mb-2 block text-[var(--accent)]`}>{ubicacion.label}</span>
          <h2 className={`${heading} mb-4 text-[clamp(2.2rem,5vw,3.5rem)] font-semibold leading-tight text-[var(--ink)]`}>{ubicacion.title}</h2>
          <p className="text-lg text-[var(--ink-a70)]">
            {ubicacion.address}. {ubicacion.hours.map((h) => `${h.day}: ${h.time}`).join(" · ")}.
          </p>
        </div>
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ubicacion.options.map((opt, i) => {
            const Icon = optionIcon[opt.icon];
            return (
              <div key={opt.title} className={`${box} bg-[var(--primary)] p-6`}>
                <span className={`${box} mb-5 flex h-10 w-10 items-center justify-center text-[var(--accent)]`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className={`${heading} mb-2 text-xl font-semibold text-[var(--ink)]`}>
                  {i + 1}. {opt.title}
                </h3>
                <p className="text-sm text-[var(--ink-a60)]">{opt.desc}</p>
              </div>
            );
          })}
        </div>
        <div className={`${box} flex flex-col items-center justify-between gap-6 bg-[var(--primary)] p-8 md:flex-row`}>
          <div className="text-center md:text-left">
            <p className={`${heading} text-xl font-semibold text-[var(--ink)]`}>{ubicacion.whatsapp.title}</p>
            <p className="text-sm text-[var(--ink-a60)]">{ubicacion.whatsapp.text}</p>
          </div>
          <a href={waHref} {...waTarget} className={btnSolid}>
            <ChatIcon className="h-5 w-5" /> {ubicacion.whatsapp.label}
          </a>
        </div>
      </div>
    </section>
  );
}

function Reservas() {
  const { form, set, submit } = useReserva();
  const input =
    "w-full border border-[var(--ink-a20)] bg-[var(--primary)] px-4 py-2.5 text-[var(--ink)] outline-none placeholder:text-[var(--ink-a40)] focus:border-[var(--accent)]";
  const f = contacto.form;
  return (
    <section id="contacto">
      <div className={`${wrap} grid grid-cols-1 gap-12 py-14 md:py-20 lg:grid-cols-12`}>
        <div className="lg:col-span-5">
          <span className={`${label} mb-2 block text-[var(--accent)]`}>{contacto.label}</span>
          <h2 className={`${heading} mb-4 text-[clamp(2.2rem,5vw,3.5rem)] font-semibold leading-tight text-[var(--ink)]`}>{contacto.title}</h2>
          <p className="mb-8 text-[var(--ink-a70)]">{contacto.subtitle}</p>
          <ul className={`${box} space-y-4 bg-[var(--ink-a5)] p-6 text-sm`}>
            {[
              { icon: PinIcon, text: ubicacion.address },
              { icon: ClockIcon, text: ubicacion.hours.map((h) => `${h.day}: ${h.time}`).join(" · ") },
              { icon: MailIcon, text: contacto.email, href: `mailto:${contacto.email}` },
              { icon: PhoneIcon, text: contacto.phone, href: telHref },
            ].map((row) => (
              <li key={row.text} className="flex items-start gap-3">
                <row.icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                {row.href ? (
                  <a href={row.href} className="text-[var(--ink-a80)] hover:text-[var(--accent)]">{row.text}</a>
                ) : (
                  <span className="text-[var(--ink-a80)]">{row.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={submit} className={`${box} space-y-6 bg-[var(--primary-alt)] p-6 md:p-8 lg:col-span-7`}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <label className="block">
              <span className={`${label} mb-2 block text-[var(--ink)]`}>{f.name.label}</span>
              <input required value={form.name} onChange={set("name")} placeholder={f.name.placeholder} className={input} />
            </label>
            <label className="block">
              <span className={`${label} mb-2 block text-[var(--ink)]`}>{f.email.label}</span>
              <input required type="email" value={form.email} onChange={set("email")} placeholder={f.email.placeholder} className={input} />
            </label>
          </div>
          <label className="block">
            <span className={`${label} mb-2 block text-[var(--ink)]`}>{f.message.label}</span>
            <textarea required rows={4} value={form.message} onChange={set("message")} placeholder={f.message.placeholder} className={`${input} resize-none`} />
          </label>
          <button type="submit" className={`${btnSolid} w-full`}>{f.submit}</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--ink-a20)] bg-[var(--primary-alt)]">
      <div className={`${wrap} flex flex-col justify-between gap-6 py-10 md:flex-row md:items-end`}>
        <div>
          <p className={`${heading} text-3xl font-semibold text-[var(--accent)]`}>{business.name}</p>
          <p className="mt-1 text-sm text-[var(--ink-a60)]">
            © {new Date().getFullYear()} · {footer.tagline}
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-2">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className={`${label} text-[var(--ink-a70)] underline-offset-4 hover:text-[var(--accent)] hover:underline`}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default function DisenoBodegon() {
  return (
    <div className="min-h-screen bg-[var(--primary)] font-inter text-[var(--ink)] antialiased">
      <Nav />
      <main>
        <Hero />
        <Nosotros />
        <Carta />
        <Ubicacion />
        <Reservas />
      </main>
      <Footer />
    </div>
  );
}
