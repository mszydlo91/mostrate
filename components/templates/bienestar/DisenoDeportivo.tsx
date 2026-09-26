"use client";

/**
 * Bienestar — Diseño 3 "Deportivo" (base: "Editorial Deportivo" de Stitch).
 * Revista de marca deportiva: condensada en itálica y mayúsculas, fotografía
 * de acción protagonista, retratos de los coaches y un acento caliente.
 */
import Image from "next/image";
import { bienestar } from "@/lib/templates/bienestar";
import Counter from "./Counter";
import { ArrowIcon, CheckIcon, MenuIcon, intensidadDe, telHref, useMobileMenu, usePrueba } from "./shared";

const { business, nav, fotos, hero, clases, horarios, coaches, planes, contacto, footer } = bienestar;

const display = "font-[family-name:var(--tpl-font-heading)] font-extrabold uppercase italic";
const wrap = "mx-auto max-w-7xl px-5 md:px-10";
const kicker = "text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]";
const btnAccent =
  "inline-flex items-center gap-2 bg-[var(--accent)] px-6 py-3.5 font-[family-name:var(--tpl-font-heading)] text-lg font-bold uppercase italic tracking-wide text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]";
const btnLine =
  "inline-flex items-center gap-2 border-2 border-[var(--ink)] px-6 py-3 font-[family-name:var(--tpl-font-heading)] text-lg font-bold uppercase italic tracking-wide text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--primary)]";
const [brand] = business.name.split(" ");

function Title({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <span className={`${kicker} mb-3 block`}>{k}</span>
      <h2 className={`${display} text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.9] text-[var(--ink)]`}>{children}</h2>
    </div>
  );
}

function Nav() {
  const m = useMobileMenu();
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--ink-a10)] bg-[var(--primary)]">
      <div className={`${wrap} flex h-16 items-center justify-between`}>
        <a href="#top" onClick={m.close} className={`${display} text-2xl text-[var(--ink)]`}>
          {brand}
          <span className="text-[var(--accent)]">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.15em] text-[var(--ink-a60)] md:flex">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-[var(--accent)]">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={nav.cta.href} className={`${btnAccent} !px-4 !py-2 !text-base`}>{nav.cta.label}</a>
          <button type="button" onClick={m.toggle} aria-label={m.open ? "Cerrar menú" : "Abrir menú"} aria-expanded={m.open} className="p-1 text-[var(--ink)] md:hidden">
            <MenuIcon open={m.open} className="h-6 w-6" />
          </button>
        </div>
      </div>
      {m.open && (
        <div className="border-t border-[var(--ink-a10)] px-5 pb-6 md:hidden">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} onClick={m.close} className={`${display} block py-2 text-4xl text-[var(--ink)]`}>{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-[var(--ink-a10)]">
      <div className={`${wrap} grid grid-cols-1 gap-10 py-12 lg:grid-cols-12 lg:py-16`}>
        <div className="flex flex-col justify-between lg:col-span-7">
          <div>
            <span className={`${kicker} mb-6 flex items-center gap-2`}>
              <span className="h-2 w-2 bg-[var(--accent)]" /> {hero.eyebrow}
            </span>
            <h1 className={`${display} text-[clamp(3.4rem,9vw,7.5rem)] leading-[0.85] text-[var(--ink)]`}>
              {hero.title.before}
              <span className="text-[var(--accent)]">{hero.title.highlight}</span>
              {hero.title.after}
            </h1>
            <p className="mt-8 max-w-md border-l-2 border-[var(--accent)] pl-4 text-lg text-[var(--ink-a80)]">{hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={hero.primary.href} className={btnAccent}>
                {hero.primary.label} <ArrowIcon className="h-5 w-5" />
              </a>
              <a href={hero.secondary.href} className={btnLine}>{hero.secondary.label}</a>
            </div>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-[var(--ink-a10)] pt-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--ink-a50)]">Sede</dt>
              <dd className="mt-1 font-semibold text-[var(--ink)]">{contacto.sede.address.split(",")[0]}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--ink-a50)]">{clases.label}</dt>
              <dd className="mt-1 font-semibold text-[var(--ink)]">{clases.items.length} disciplinas</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--ink-a50)]">Primera clase</dt>
              <dd className="mt-1 font-semibold text-[var(--accent)]">Sin cargo</dd>
            </div>
          </dl>
        </div>
        <figure className="relative min-h-[420px] overflow-hidden border border-[var(--ink-a10)] lg:col-span-5">
          <Image src={fotos.boxeo.src} alt={fotos.boxeo.alt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          <figcaption className="absolute bottom-0 left-0 right-0 flex justify-between bg-gradient-to-t from-[var(--primary-a90)] to-transparent p-5 pt-16 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--ink)]">
            <span>{footer.tagline.split(" · ")[1]}</span>
            <span className="text-[var(--accent)]">{hero.stats[0].num}{hero.stats[0].suffix} socios</span>
          </figcaption>
        </figure>
      </div>

      <div className="border-t border-[var(--ink-a10)] bg-[var(--primary-alt)]">
        <div className={`${wrap} grid grid-cols-2 divide-[var(--ink-a10)] md:grid-cols-4 md:divide-x`}>
          {hero.stats.map((s) => (
            <div key={s.label} className="px-2 py-6 md:px-6">
              <div className={`${display} text-5xl text-[var(--ink)]`}>
                <Counter value={s.num} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--ink-a50)]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clases() {
  return (
    <section id="clases" className="border-b border-[var(--ink-a10)] py-20">
      <div className={wrap}>
        <Title k={clases.label}>
          {clases.title.split(" ").slice(0, -2).join(" ")} <span className="text-[var(--accent)]">{clases.title.split(" ").slice(-2).join(" ")}</span>
        </Title>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <figure className="relative min-h-[360px] overflow-hidden border border-[var(--ink-a10)] lg:col-span-5">
            <Image src={fotos.grupo.src} alt={fotos.grupo.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover grayscale contrast-125" />
            <figcaption className="absolute bottom-4 left-4 bg-[var(--accent)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--accent-contrast)]">{clases.subtitle.split(" — ")[0]}</figcaption>
          </figure>
          <ol className="divide-y divide-[var(--ink-a10)] border-y border-[var(--ink-a10)] lg:col-span-7">
            {clases.items.map((c, i) => (
              <li key={c.name} className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-5">
                <span className="text-sm font-bold text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={`${display} text-3xl text-[var(--ink)]`}>{c.name}</h3>
                  <p className="mt-1 text-sm text-[var(--ink-a60)]">{c.desc}</p>
                </div>
                <div className="text-right text-[11px] font-bold uppercase tracking-wider">
                  <span className={`block ${c.intensidad === "Alta" ? "text-[var(--accent)]" : "text-[var(--ink-a60)]"}`}>{c.intensidad}</span>
                  <span className="text-[var(--ink-a40)]">{c.duracion}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Horarios() {
  return (
    <section id="horarios" className="border-b border-[var(--ink-a10)] bg-[var(--primary-alt)] py-20">
      <div className={wrap}>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <Title k={horarios.label}>{horarios.title}</Title>
          <p className="mb-12 max-w-xs text-sm text-[var(--ink-a60)]">{horarios.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-px border border-[var(--ink-a10)] bg-[var(--ink-a10)] sm:grid-cols-3 lg:grid-cols-7">
          {horarios.days.map((d) => (
            <div key={d.day} className="bg-[var(--primary)] p-4">
              <p className={`${display} mb-4 text-2xl text-[var(--ink)]`}>{d.day}</p>
              <ul className="space-y-4">
                {d.clases.map((c) => (
                  <li key={c.time}>
                    <p className={`text-xs font-bold ${intensidadDe(c.name) === "Alta" ? "text-[var(--accent)]" : "text-[var(--ink-a60)]"}`}>{c.time}</p>
                    <p className="font-[family-name:var(--tpl-font-heading)] text-lg font-bold uppercase italic leading-tight text-[var(--ink)]">{c.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col justify-center bg-[var(--primary)] p-4 text-center">
            <p className={`${display} text-2xl text-[var(--ink-a40)]`}>{horarios.closed.split(" — ")[0]}</p>
            <p className="text-xs uppercase tracking-wider text-[var(--ink-a40)]">{horarios.closed.split(" — ")[1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Coaches() {
  return (
    <section id="coaches" className="border-b border-[var(--ink-a10)] py-20">
      <div className={wrap}>
        <Title k={coaches.label}>
          {coaches.title.split(" ").slice(0, 2).join(" ")} <span className="text-[var(--accent)]">{coaches.title.split(" ").slice(2).join(" ")}</span>
        </Title>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {coaches.items.map((c) => (
            <figure key={c.name} className="group border border-[var(--ink-a10)] bg-[var(--primary-alt)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={c.photo} alt={`${c.name}, ${c.specialty}`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
              </div>
              <figcaption className="p-4">
                <p className={`${display} text-2xl leading-none text-[var(--ink)]`}>{c.name}</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[var(--accent)]">{c.specialty}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Planes() {
  return (
    <section id="planes" className="border-b border-[var(--ink-a10)] bg-[var(--primary-alt)] py-20">
      <div className={wrap}>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <Title k={planes.label}>
            {planes.title.split(" ")[0]} <span className="text-[var(--accent)]">{planes.title.split(" ").slice(1).join(" ")}</span>
          </Title>
          <p className="mb-12 max-w-xs text-sm text-[var(--ink-a60)]">{planes.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {planes.items.map((p) => (
            <div key={p.name} className={`relative flex flex-col p-7 ${p.featured ? "border-2 border-[var(--accent)] bg-[var(--primary)]" : "border border-[var(--ink-a10)] bg-[var(--primary)]"}`}>
              {p.featured && (
                <span className="absolute -top-3 left-6 bg-[var(--accent)] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[var(--accent-contrast)]">Más elegido</span>
              )}
              <p className={`${display} text-3xl text-[var(--ink)]`}>{p.name}</p>
              <p className={`${display} mt-4 text-5xl text-[var(--accent)]`}>{p.price}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[var(--ink-a50)]">{p.period}</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-[var(--ink-a10)] pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[var(--ink-a80)]">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" /> {f}
                  </li>
                ))}
              </ul>
              <a href={nav.cta.href} className={`mt-8 justify-center ${p.featured ? btnAccent : btnLine}`}>Elegir plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const { form, set, submit } = usePrueba();
  const f = contacto.form;
  const input =
    "w-full border border-[var(--ink-a20)] bg-[var(--primary-alt)] px-4 py-3 text-[var(--ink)] outline-none placeholder:text-[var(--ink-a40)] focus:border-[var(--accent)]";
  const fieldLabel = "mb-2 block text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--ink-a60)]";
  return (
    <section id="contacto" className="py-20">
      <div className={`${wrap} grid grid-cols-1 gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-5">
          <Title k={contacto.label}>
            {contacto.title.split(" ").slice(0, 2).join(" ")} <span className="text-[var(--accent)]">{contacto.title.split(" ").slice(2).join(" ")}</span>
          </Title>
          <p className="-mt-6 mb-10 text-[var(--ink-a70)]">{contacto.subtitle}</p>
          <dl className="space-y-5 text-sm">
            {[
              { t: "Sede", v: contacto.sede.address },
              { t: "Horarios", v: contacto.sede.hours },
              { t: "WhatsApp / teléfono", v: contacto.phone, href: telHref },
              { t: "Email", v: contacto.email, href: `mailto:${contacto.email}` },
            ].map((row) => (
              <div key={row.t} className="border-l-2 border-[var(--accent)] pl-4">
                <dt className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--ink-a50)]">{row.t}</dt>
                <dd className="mt-1 font-semibold text-[var(--ink)]">
                  {row.href ? <a href={row.href} className="hover:text-[var(--accent)]">{row.v}</a> : row.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <form onSubmit={submit} className="space-y-5 border border-[var(--ink-a10)] p-6 md:p-8 lg:col-span-7">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="block">
              <span className={fieldLabel}>{f.name.label}</span>
              <input required value={form.name} onChange={set("name")} placeholder={f.name.placeholder} className={input} />
            </label>
            <label className="block">
              <span className={fieldLabel}>{f.email.label}</span>
              <input required type="email" value={form.email} onChange={set("email")} placeholder={f.email.placeholder} className={input} />
            </label>
          </div>
          <label className="block">
            <span className={fieldLabel}>{f.message.label}</span>
            <textarea required rows={4} value={form.message} onChange={set("message")} placeholder={f.message.placeholder} className={`${input} resize-none`} />
          </label>
          <button type="submit" className={`${btnAccent} w-full justify-center`}>
            {f.submit} <ArrowIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--ink-a10)] bg-[var(--primary-alt)]">
      <div className={`${wrap} py-12`}>
        <p className={`${display} text-[clamp(4rem,14vw,10rem)] leading-[0.8] text-[var(--ink)]`}>
          {brand}
          <span className="text-[var(--accent)]">.</span>
        </p>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[var(--ink-a10)] pt-6 text-xs font-bold uppercase tracking-[0.15em] text-[var(--ink-a50)] md:flex-row">
          <span>© {new Date().getFullYear()} {business.name} · {footer.tagline}</span>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[var(--accent)]">{l.label}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default function DisenoDeportivo() {
  return (
    <div className="min-h-screen bg-[var(--primary)] font-inter text-[var(--ink)] antialiased">
      <Nav />
      <main>
        <Hero />
        <Clases />
        <Horarios />
        <Coaches />
        <Planes />
      </main>
      <Contacto />
      <Footer />
    </div>
  );
}
