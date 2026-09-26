"use client";

/**
 * Gastronomía — Diseño 3 "Taberna" (base: "Taberna Terracota" de Stitch).
 * Cálido y fotográfico: sans geométrica pesada con itálica liviana de acento,
 * mosaico de fotos con el plato del día en el hero, carta en tarjetas y
 * superficies de brasa.
 */
import Image from "next/image";
import { gastronomia } from "@/lib/templates/gastronomia";
import {
  ArrowIcon,
  ChatIcon,
  EyeIcon,
  MenuIcon,
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

const heading = "font-[family-name:var(--tpl-font-heading)]";
const wrap = "mx-auto max-w-7xl px-6 sm:px-10 lg:px-16";
const eyebrow = "text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]";
const tile = "rounded-sm border border-[var(--ink-a15)] bg-[var(--ink-a5)]";

function Nav() {
  const m = useMobileMenu();
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--ink-a15)] bg-[var(--primary-a90)] backdrop-blur-md">
      <div className={`${wrap} flex h-20 items-center justify-between`}>
        <a href="#top" onClick={m.close} className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          <span className={`${heading} text-xl font-extrabold uppercase tracking-tight text-[var(--ink)] sm:text-2xl`}>{business.name}</span>
        </a>
        <nav className="hidden items-center gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-a60)] md:flex">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-[var(--ink)]">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={nav.cta.href} className="hidden rounded-sm bg-[var(--accent)] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)] sm:inline-block">
            {nav.cta.label}
          </a>
          <button type="button" onClick={m.toggle} aria-label={m.open ? "Cerrar menú" : "Abrir menú"} aria-expanded={m.open} className="p-1 text-[var(--ink)] md:hidden">
            <MenuIcon open={m.open} className="h-6 w-6" />
          </button>
        </div>
      </div>
      {m.open && (
        <div className="border-t border-[var(--ink-a15)] px-6 pb-8 pt-2 md:hidden">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} onClick={m.close} className={`${heading} block py-3 text-3xl font-extrabold text-[var(--ink)]`}>{l.label}</a>
          ))}
          <a href={nav.cta.href} onClick={m.close} className="mt-4 block rounded-sm bg-[var(--accent)] py-3.5 text-center text-sm font-bold uppercase tracking-widest text-[var(--accent-contrast)]">
            {nav.cta.label}
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-[var(--ink-a15)]">
      <div className={`${wrap} pb-20 pt-12 sm:pt-16`}>
        <span className={`${tile} ${eyebrow} mb-6 inline-block px-3 py-1 !text-[11px]`}>{hero.eyebrow}</span>
        <div className="mb-12 grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <h1 className={`${heading} text-[clamp(2.6rem,6.5vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-[var(--ink)] lg:col-span-8`}>
            {hero.title.before}
            <span className="font-light italic text-[var(--accent)]">{hero.title.highlight}</span>
            {hero.title.after}
          </h1>
          <div className="space-y-6 lg:col-span-4">
            <p className="text-lg leading-relaxed text-[var(--ink-a70)]">{hero.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <a href={hero.primary.href} className="rounded-sm border border-[var(--ink-a20)] bg-[var(--ink-a5)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--ink)] transition-colors hover:border-[var(--ink-a40)]">
                {hero.primary.label}
              </a>
              <a href={hero.secondary.href} className="rounded-sm border border-[var(--accent)] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]">
                {hero.secondary.label}
              </a>
            </div>
          </div>
        </div>

        {/* Mosaico: salón grande + provoleta + plato del día */}
        <div className="mb-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <figure className="relative h-[340px] overflow-hidden rounded-sm border border-[var(--ink-a15)] sm:h-[480px] lg:col-span-8">
            <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover brightness-[0.88]" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[var(--primary-a90)] via-transparent to-transparent" />
            <figcaption className="absolute bottom-6 left-6 right-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" /> {hero.imageCaption}
            </figcaption>
          </figure>
          <div className="flex flex-col gap-5 lg:col-span-4">
            <figure className="relative h-44 overflow-hidden rounded-sm border border-[var(--ink-a15)]">
              <Image src={fotos.provoleta.src} alt={fotos.provoleta.alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover brightness-90" />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[var(--primary-a90)] to-transparent" />
              <figcaption className="absolute bottom-3 left-4 text-sm font-semibold text-[var(--ink)]">{menu.categories[0].items[0].name}</figcaption>
            </figure>
            <div className="flex flex-1 flex-col justify-between rounded-sm border border-[var(--accent)] bg-[var(--ink-a5)] p-6">
              <div>
                <div className="mb-3">
                  <span className="rounded-sm bg-[var(--accent-soft)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">{hero.card.label}</span>
                </div>
                <h3 className={`${heading} mb-2 text-xl font-bold text-[var(--ink)]`}>{hero.card.dish}</h3>
                <p className="text-xs text-[var(--ink-a60)]">{hero.card.note}</p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-[var(--ink-a15)] pt-3">
                <span className={`${heading} text-lg font-bold text-[var(--accent)]`}>{hero.card.price}</span>
                <a href={waHref} {...waTarget} className="inline-flex items-center gap-1.5 rounded-sm border border-[var(--accent)] px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]">
                  <ChatIcon className="h-4 w-4" /> Pedir
                </a>
              </div>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {hero.highlights.map((h, i) => (
            <li key={h.title} className={`${tile} p-6`}>
              <div className="mb-2 flex items-center gap-3">
                <span className="whitespace-nowrap text-sm font-extrabold tracking-widest text-[var(--accent)]">Nº {String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-bold text-[var(--ink)]">{h.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-[var(--ink-a60)]">{h.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="border-b border-[var(--ink-a15)] bg-[var(--primary-alt)]">
      <div className={`${wrap} grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-12`}>
        <figure className="relative h-72 overflow-hidden rounded-sm border border-[var(--ink-a15)] md:col-span-5">
          <Image src={fotos.bife.src} alt={fotos.bife.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover brightness-90" />
        </figure>
        <div className="md:col-span-7">
          <span className={`${eyebrow} mb-4 block`}>{nav.links[1].label}</span>
          <blockquote className={`${heading} text-[clamp(1.8rem,3.6vw,3rem)] font-extrabold leading-tight tracking-tight text-[var(--ink)]`}>
            «{nosotros.text}»
          </blockquote>
          <div className="my-6 h-0.5 w-16 bg-[var(--accent)]" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-a60)]">{nosotros.detail}</p>
        </div>
      </div>
    </section>
  );
}

function Carta() {
  const { active, setActive, showPrices, togglePrices, visible, all } = useCarta();
  return (
    <section id="menu" className="border-b border-[var(--ink-a15)]">
      <div className={`${wrap} py-20 sm:py-24`}>
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[var(--ink-a15)] pb-6 md:flex-row md:items-end">
          <div>
            <span className={`${eyebrow} mb-2 block`}>{menu.label}</span>
            <h2 className={`${heading} text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-tight text-[var(--ink)]`}>{menu.title}</h2>
          </div>
          <button type="button" onClick={togglePrices} aria-pressed={showPrices} className={`${tile} inline-flex items-center gap-2 self-start px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-a80)] hover:border-[var(--accent)] md:self-auto`}>
            <EyeIcon off={!showPrices} className="h-4 w-4 text-[var(--accent)]" /> {showPrices ? "Ocultar precios" : "Mostrar precios"}
          </button>
        </div>

        <div className="mb-12 flex flex-wrap gap-2.5">
          {menuTabs.map((t, i) => {
            const on = active === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                aria-pressed={on}
                className={`rounded-sm border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  on
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-contrast)]"
                    : "border-[var(--ink-a15)] bg-[var(--ink-a5)] text-[var(--ink-a60)] hover:border-[var(--accent)] hover:text-[var(--ink)]"
                }`}
              >
                {String(i).padStart(2, "0")} {t.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-12">
          {visible.map((c) => (
            <div key={c.id}>
              {all && <h3 className={`${eyebrow} mb-4`}>{c.label}</h3>}
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {c.items.map((item) => (
                  <li key={item.name} className={`${tile} p-4 transition-colors hover:border-[var(--ink-a30)]`}>
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg font-bold text-[var(--ink)]">{item.name}</span>
                      <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-[var(--ink-a20)]" />
                      {showPrices && <span className="shrink-0 font-extrabold text-[var(--accent)]">{item.price}</span>}
                    </div>
                    {item.desc && <p className="mt-2 text-sm text-[var(--ink-a60)]">{item.desc}</p>}
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
    <section id="ubicacion" className="border-b border-[var(--ink-a15)] bg-[var(--primary-alt)]">
      <div className={`${wrap} py-20`}>
        <span className={`${eyebrow} mb-2 block`}>{ubicacion.label}</span>
        <h2 className={`${heading} mb-10 text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-tight text-[var(--ink)]`}>{ubicacion.title}</h2>
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className={`${tile} border-l-4 !border-l-[var(--accent)] p-6`}>
            <p className="mb-1 text-xs uppercase tracking-wider text-[var(--ink-a50)]">Dirección</p>
            <p className="text-xl font-bold text-[var(--ink)]">{ubicacion.address}</p>
          </div>
          <div className={`${tile} p-6`}>
            <p className="mb-1 text-xs uppercase tracking-wider text-[var(--ink-a50)]">Horarios</p>
            {ubicacion.hours.map((h) => (
              <p key={h.day} className="text-[var(--ink)]">
                <span className="font-semibold">{h.day}</span> <span className="text-[var(--ink-a70)]">· {h.time}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {ubicacion.options.map((opt, i) => {
            const Icon = optionIcon[opt.icon];
            return (
              <div key={opt.title} className={`${tile} p-6`}>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Modalidad {String(i + 1).padStart(2, "0")}</span>
                  <Icon className="h-5 w-5 text-[var(--ink-a40)]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[var(--ink)]">{opt.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--ink-a60)]">{opt.desc}</p>
              </div>
            );
          })}
        </div>
        <div className={`${tile} flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center`}>
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[var(--accent-soft)] text-[var(--accent)]">
              <ChatIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-bold text-[var(--ink)]">{ubicacion.whatsapp.title}</p>
              <p className="text-sm text-[var(--ink-a60)]">{ubicacion.whatsapp.text}</p>
            </div>
          </div>
          <a href={waHref} {...waTarget} className="rounded-sm bg-[var(--accent)] px-6 py-3 text-xs font-bold uppercase tracking-widest text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]">
            {ubicacion.whatsapp.label}
          </a>
        </div>
      </div>
    </section>
  );
}

function Reservas() {
  const { form, set, submit } = useReserva();
  const f = contacto.form;
  const input =
    "w-full rounded-sm border border-[var(--ink-a15)] bg-[var(--primary)] px-4 py-3 text-[var(--ink)] outline-none placeholder:text-[var(--ink-a40)] focus:border-[var(--accent)]";
  return (
    <section id="contacto" className="border-b border-[var(--ink-a15)]">
      <div className={`${wrap} grid grid-cols-1 gap-12 py-20 lg:grid-cols-12`}>
        <div className="lg:col-span-5">
          <span className={`${eyebrow} mb-2 block`}>{contacto.label}</span>
          <h2 className={`${heading} mb-4 text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold tracking-tight text-[var(--ink)]`}>{contacto.title}</h2>
          <p className="mb-8 text-[var(--ink-a70)]">{contacto.subtitle}</p>
          <div className="space-y-4 border-t border-[var(--ink-a15)] pt-6 text-sm">
            <a href={`mailto:${contacto.email}`} className="flex items-center justify-between gap-4 text-[var(--ink)] hover:text-[var(--accent)]">
              {contacto.email} <ArrowIcon className="h-4 w-4 -rotate-45" />
            </a>
            <a href={telHref} className="flex items-center justify-between gap-4 text-[var(--ink)] hover:text-[var(--accent)]">
              {contacto.phone} <ArrowIcon className="h-4 w-4 -rotate-45" />
            </a>
          </div>
        </div>
        <form onSubmit={submit} className={`${tile} space-y-5 p-6 md:p-8 lg:col-span-7`}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--ink-a70)]">{f.name.label}</span>
              <input required value={form.name} onChange={set("name")} placeholder={f.name.placeholder} className={input} />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--ink-a70)]">{f.email.label}</span>
              <input required type="email" value={form.email} onChange={set("email")} placeholder={f.email.placeholder} className={input} />
            </label>
          </div>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[var(--ink-a70)]">{f.message.label}</span>
            <textarea required rows={4} value={form.message} onChange={set("message")} placeholder={f.message.placeholder} className={`${input} resize-none`} />
          </label>
          <button type="submit" className="w-full rounded-sm bg-[var(--accent)] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]">
            {f.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--primary-alt)]">
      <div className={`${wrap} flex flex-col justify-between gap-6 py-10 md:flex-row md:items-center`}>
        <div>
          <p className={`${heading} text-xl font-extrabold uppercase text-[var(--ink)]`}>{business.name}</p>
          <p className="mt-1 text-xs text-[var(--ink-a50)]">© {new Date().getFullYear()} · {footer.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink-a60)]">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--accent)]">{l.label}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default function DisenoTaberna() {
  return (
    <div className="min-h-screen bg-[var(--primary)] font-[family-name:var(--font-jakarta)] text-[var(--ink)] antialiased">
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
