"use client";

/**
 * Profesional — Diseño 3 "Boutique" (base: variante "Boutique Executive" de
 * Stitch). Cálido y cercano: foto del profesional con el panel del cliente
 * superpuesto en el hero, pilares de servicio con listas de detalle y la
 * frase propia del profesional en un bloque oscuro.
 */
import Image from "next/image";
import { profesional } from "@/lib/templates/profesional";
import {
  ArrowIcon,
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  LockIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  PinIcon,
  QuoteIcon,
  ShieldIcon,
  StarIcon,
  TrendIcon,
  phoneHref,
  useContactForm,
  useMobileMenu,
} from "./shared";

const { business, nav, hero, stats, servicios, proceso, sobre, testimonio, contacto, footer } =
  profesional;

const heading = "font-[family-name:var(--tpl-font-heading)]";
const wrap = "mx-auto max-w-7xl px-6 md:px-12";
const ink = "text-[#16182B]";
const soft = "text-[#16182B]/70";
const line = "border-[#EDE7E1]";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
      {children}
      <span className="h-px w-8 bg-[var(--accent)]" />
    </span>
  );
}

function Nav() {
  const menu = useMobileMenu();
  return (
    <header className={`sticky top-0 z-50 border-b ${line} bg-white/95 shadow-[0_2px_12px_rgba(22,24,43,0.03)] backdrop-blur-md`}>
      <div className={`${wrap} flex h-20 items-center justify-between`}>
        <a href="#top" onClick={menu.close} className="group flex items-center gap-3.5">
          <span className={`${heading} flex h-10 w-10 items-center justify-center rounded border border-[var(--accent-soft)] bg-[var(--accent-soft)] text-base tracking-widest text-[var(--accent)] transition-colors group-hover:border-[var(--accent)]`}>
            {business.initials}
          </span>
          <span className="flex flex-col">
            <span className={`${heading} text-xl leading-tight tracking-tight md:text-2xl ${ink}`}>{business.name}</span>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#16182B]/60">{footer.tagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="border-b-2 border-transparent pb-0.5 text-xs uppercase tracking-widest text-[#16182B]/80 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={nav.cta.href}
            className="hidden rounded bg-[var(--accent)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent-contrast)] shadow-sm transition-colors hover:bg-[var(--accent-strong)] sm:inline-flex"
          >
            {nav.cta.label}
          </a>
          <button
            type="button"
            onClick={menu.toggle}
            aria-label={menu.open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menu.open}
            className={`flex h-10 w-10 items-center justify-center rounded ${ink} md:hidden`}
          >
            <MenuIcon open={menu.open} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {menu.open && (
        <div className={`border-t ${line} bg-white px-6 pb-6 md:hidden`}>
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} onClick={menu.close} className={`${heading} block border-b ${line} py-4 text-2xl ${ink}`}>
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            onClick={menu.close}
            className="mt-5 block rounded bg-[var(--accent)] py-3.5 text-center text-sm font-semibold text-[var(--accent-contrast)]"
          >
            {nav.cta.label}
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { panel } = hero;
  const last = panel.bars.length - 1;
  return (
    <section id="top" className={`overflow-hidden border-b ${line} bg-gradient-to-b from-[#F7EFE6]/70 to-white pb-20 pt-10 md:py-24`}>
      <div className={`${wrap} grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10`}>
        <div className="lg:col-span-6">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--accent-soft)] bg-[var(--accent-soft)] px-3.5 py-1.5 text-xs font-medium text-[var(--accent)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            {business.owner} · Matrícula {business.matricula}
          </span>
          <h1 className={`${heading} mb-6 text-[clamp(2.4rem,5vw,4rem)] leading-[1.1] tracking-tight ${ink}`}>
            {hero.title.before}
            <span className="italic text-[var(--accent)]">{hero.title.highlight}</span>
            {hero.title.after}
          </h1>
          <p className={`mb-8 max-w-xl text-base leading-relaxed md:text-lg ${soft}`}>{hero.subtitle}</p>
          <div className="mb-10 flex flex-wrap items-center gap-4">
            <a
              href={hero.primary.href}
              className="inline-flex items-center gap-2 rounded bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--accent-contrast)] shadow-sm transition-colors hover:bg-[var(--accent-strong)]"
            >
              {hero.primary.label}
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a href={hero.secondary.href} className={`inline-flex items-center rounded border border-[#16182B]/20 bg-white px-7 py-3.5 text-sm font-semibold ${ink} transition-colors hover:border-[#16182B]`}>
              {hero.secondary.label}
            </a>
          </div>
          <div className={`grid grid-cols-3 gap-4 border-t ${line} pt-6 text-[#16182B]/80`}>
            {hero.highlights.map((h) => (
              <span key={h} className="flex items-center gap-2 text-xs font-medium">
                <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-[var(--accent)]" />
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className={`rounded-2xl border ${line} bg-white p-2.5 shadow-xl shadow-[#16182B]/5`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[16/11]">
              <Image src={sobre.photo.src} alt={sobre.photo.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16182B]/50 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#16182B] shadow-sm backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                {contacto.location}
              </span>
            </div>

            <div className="relative z-10 mx-2 -mt-12 rounded-xl border border-[var(--accent-soft)] bg-white p-5 shadow-2xl shadow-[#16182B]/10 sm:mx-4 sm:p-6">
              <div className={`mb-4 flex items-center justify-between border-b ${line} pb-3`}>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#16182B]">{panel.title}</span>
                <span className="rounded bg-[var(--accent-soft)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--accent)]">{panel.status}</span>
              </div>
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <span className={`block text-xs ${soft}`}>{panel.label}</span>
                  <span className={`${heading} text-3xl tabular-nums sm:text-4xl ${ink}`}>{panel.amount}</span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  <TrendIcon className="h-3.5 w-3.5" />
                  {panel.trend}
                </span>
              </div>
              <div className="mb-4 grid h-8 grid-cols-6 items-end gap-1.5 rounded bg-[#F7EFE6]/70 p-1.5">
                {panel.bars.map((b, i) => (
                  <div
                    key={b.month}
                    title={b.month}
                    style={{ height: `${b.value}%`, opacity: i === last ? 1 : 0.25 + (i / last) * 0.5 }}
                    className="rounded-sm bg-[var(--accent)]"
                  />
                ))}
              </div>
              <div className={`mb-3 flex flex-wrap gap-2 border-t ${line} pt-3`}>
                {panel.obligations.map((o) => (
                  <span key={o.label} className="flex items-center gap-1.5 rounded border border-emerald-200/70 bg-emerald-50/80 px-2 py-1.5 text-[11px] font-medium text-emerald-800">
                    <CheckCircleIcon className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                    {o.label}: {o.status}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 rounded border border-[var(--accent-soft)] bg-[var(--accent-soft)] px-3 py-2 text-xs font-semibold text-[var(--accent)]">
                <CalendarIcon className="h-4 w-4 flex-shrink-0" />
                {panel.nextDue}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className={`border-b ${line} bg-white py-10`}>
      <div className={`${wrap} grid grid-cols-2 gap-8 md:grid-cols-4`}>
        {stats.map((s, i) => (
          <div key={s.label} className={`flex flex-col md:px-6 ${i > 0 ? `md:border-l ${line}` : ""}`}>
            <span className={`${heading} text-4xl tabular-nums md:text-5xl ${i < 2 ? "text-[var(--accent)]" : ink}`}>{s.num}</span>
            <span className={`mt-1 text-sm ${soft}`}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className={`border-b ${line} bg-white py-20 md:py-28`}>
      <div className={wrap}>
        <div className="mb-16 max-w-2xl">
          <Eyebrow>{servicios.label}</Eyebrow>
          <h2 className={`${heading} mb-4 text-[clamp(2rem,4vw,3rem)] tracking-tight ${ink}`}>{servicios.title}</h2>
          <p className={`text-base leading-relaxed md:text-lg ${soft}`}>{servicios.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {servicios.items.map((s) => (
            <article
              key={s.title}
              className={`group flex flex-col justify-between rounded-xl border ${line} bg-white p-8 shadow-[0_4px_20px_rgba(22,24,43,0.03)] transition-colors hover:border-[var(--accent)] sm:p-10`}
            >
              <div>
                <div className={`mb-6 flex items-center justify-between gap-3 border-b ${line} pb-4`}>
                  <span className={`${heading} text-3xl text-[var(--accent)]`}>{s.num}</span>
                  <span className="rounded-full border border-[var(--accent-soft)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {s.tag}
                  </span>
                </div>
                <h3 className={`${heading} mb-3 text-2xl ${ink} transition-colors group-hover:text-[var(--accent)]`}>{s.title}</h3>
                <p className={`mb-6 text-sm leading-relaxed md:text-base ${soft}`}>{s.desc}</p>
                <ul className="mb-6 space-y-2.5 text-sm text-[#16182B]/80">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`flex items-center justify-end border-t ${line} pt-4`}>
                <a href="#contacto" className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)] hover:underline">
                  {servicios.cta} <ArrowIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  return (
    <section id="proceso" className={`border-b ${line} bg-[#FBF8F4] py-20 md:py-28`}>
      <div className={wrap}>
        <div className="mb-14 max-w-2xl">
          <Eyebrow>{proceso.label}</Eyebrow>
          <h2 className={`${heading} text-[clamp(2rem,4vw,2.75rem)] tracking-tight ${ink}`}>{proceso.title}</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {proceso.steps.map((step) => (
            <div key={step.num} className={`flex flex-col justify-between rounded-xl border ${line} bg-white p-8`}>
              <div>
                <span className={`${heading} mb-4 block text-3xl text-[var(--accent)]`}>{step.num}</span>
                <h3 className={`${heading} mb-3 text-xl ${ink}`}>{step.title}</h3>
                <p className={`mb-6 text-sm leading-relaxed ${soft}`}>{step.desc}</p>
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--accent)]">{step.meta}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className={`border-b ${line} bg-white py-20 md:py-28`}>
      <div className={`${wrap} grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-7">
          <Eyebrow>{sobre.label}</Eyebrow>
          <h2 className={`${heading} mb-6 text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight ${ink}`}>{sobre.title}</h2>
          <div className={`mb-8 space-y-4 text-base leading-relaxed ${soft}`}>
            {sobre.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className={`grid grid-cols-1 gap-4 rounded-xl border ${line} bg-[#FBF8F4] p-5 sm:grid-cols-3`}>
            {sobre.credentials.map((c) => (
              <div key={c.title} className="flex items-start gap-2.5">
                <ShieldIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--accent)]" />
                <span>
                  <strong className={`block text-xs font-bold uppercase tracking-wide ${ink}`}>{c.title}</strong>
                  <span className="text-xs text-[#16182B]/60">{c.detail}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <figure className="relative overflow-hidden rounded-2xl bg-[#16182B] p-8 text-white shadow-2xl sm:p-10">
            <div aria-hidden className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[var(--accent)] opacity-25 blur-3xl" />
            <span className="mb-6 flex h-10 w-10 items-center justify-center rounded bg-white/10">
              <QuoteIcon className="h-5 w-5" />
            </span>
            <blockquote className={`${heading} relative mb-8 text-[clamp(1.4rem,2.4vw,1.85rem)] leading-snug`}>“{sobre.quote}”</blockquote>
            <figcaption className="relative border-t border-white/15 pt-5">
              <span className="block font-semibold">{business.owner}</span>
              <span className="text-xs text-white/60">{business.title} · {business.name}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Testimonio() {
  return (
    <section className={`border-b ${line} bg-[#FBF8F4] py-20 md:py-24`}>
      <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
        <span className="mx-auto mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent-soft)] bg-white text-[var(--accent)]">
          <QuoteIcon className="h-5 w-5" />
        </span>
        <blockquote className={`${heading} mb-8 text-[clamp(1.5rem,3.2vw,2.3rem)] leading-snug ${ink}`}>“{testimonio.quote}”</blockquote>
        <cite className="block font-semibold not-italic text-[var(--accent)]">{testimonio.author}</cite>
        <span className="text-xs text-[#16182B]/60">{testimonio.role}</span>
        <div className="mt-3 flex justify-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="h-4 w-4" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const { field, onSubmit } = useContactForm();
  const input = `w-full rounded border ${line} bg-[#FBF8F4] px-4 py-3 text-sm ${ink} outline-none transition-colors placeholder:text-[#16182B]/40 focus:border-[var(--accent)] focus:bg-white`;
  const label = "mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#16182B]/70";
  const channels = [
    { icon: MailIcon, label: contacto.labels.email, value: contacto.email, href: `mailto:${contacto.email}` },
    { icon: PhoneIcon, label: contacto.labels.phone, value: contacto.phone, href: phoneHref },
    { icon: PinIcon, label: contacto.labels.location, value: contacto.location },
  ];

  return (
    <section id="contacto" className="bg-white py-20 md:py-28">
      <div className={`${wrap} grid grid-cols-1 gap-12 lg:grid-cols-12`}>
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <Eyebrow>{contacto.label}</Eyebrow>
            <h2 className={`${heading} mb-4 text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight ${ink}`}>{contacto.title}</h2>
            <p className={`mb-8 text-base leading-relaxed ${soft}`}>{contacto.subtitle}</p>
            <div className="mb-8 space-y-4">
              {channels.map((c) => {
                const Inner = (
                  <>
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[var(--accent-soft)] text-[var(--accent)]">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-[#16182B]/50">{c.label}</span>
                      <strong className={`text-sm font-semibold ${ink}`}>{c.value}</strong>
                    </span>
                  </>
                );
                const cls = `flex items-center gap-4 rounded-lg border ${line} p-4 transition-colors`;
                return c.href ? (
                  <a key={c.label} href={c.href} className={`${cls} hover:border-[var(--accent)]`}>{Inner}</a>
                ) : (
                  <div key={c.label} className={cls}>{Inner}</div>
                );
              })}
            </div>
          </div>
          <p className="flex items-start gap-2.5 rounded-lg border border-[var(--accent-soft)] bg-[var(--accent-soft)] p-4 text-xs text-[#16182B]/80">
            <LockIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
            {contacto.privacy}
          </p>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className={`space-y-5 rounded-2xl border ${line} bg-white p-8 shadow-xl shadow-[#16182B]/5 sm:p-10`}>
            <h3 className={`${heading} text-2xl ${ink}`}>{contacto.form.title}</h3>
            <div>
              <label htmlFor="pc3-name" className={label}>{contacto.form.name.label}</label>
              <input id="pc3-name" required placeholder={contacto.form.name.placeholder} className={input} {...field("name")} />
            </div>
            <div>
              <label htmlFor="pc3-email" className={label}>{contacto.form.email.label}</label>
              <input id="pc3-email" type="email" required placeholder={contacto.form.email.placeholder} className={input} {...field("email")} />
            </div>
            <div>
              <label htmlFor="pc3-area" className={label}>{contacto.form.area.label}</label>
              <select id="pc3-area" className={input} {...field("area")}>
                <option value="">{contacto.form.area.placeholder}</option>
                {contacto.form.area.options.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pc3-msg" className={label}>{contacto.form.message.label}</label>
              <textarea id="pc3-msg" rows={4} placeholder={contacto.form.message.placeholder} className={`${input} resize-y`} {...field("message")} />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded bg-[var(--accent)] py-4 text-sm font-semibold uppercase tracking-wider text-[var(--accent-contrast)] transition-colors hover:bg-[var(--accent-strong)]"
            >
              {contacto.form.submit}
              <ArrowIcon className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-[#16182B]/50">{contacto.form.note}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#16182B] text-white">
      <div className={`${wrap} py-14`}>
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="mb-4 flex items-center gap-3">
              <span className={`${heading} flex h-9 w-9 items-center justify-center rounded border border-white/20 bg-white/5 text-sm tracking-widest`}>{business.initials}</span>
              <span className={`${heading} text-xl`}>{business.name}</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">{footer.description}</p>
          </div>
          <nav className="grid grid-cols-2 gap-3 text-sm text-white/70 md:col-span-3">
            {nav.links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white">{l.label}</a>
            ))}
          </nav>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 md:col-span-3">
            <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-white/50">Matrícula registrada</span>
            <span className={`${heading} text-lg`}>{business.matricula}</span>
          </div>
        </div>
        <p className="pt-8 text-xs text-white/50">
          © {new Date().getFullYear()} {business.owner} · {footer.tagline}
        </p>
      </div>
    </footer>
  );
}

export default function DisenoBoutique() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-jakarta)] text-[#16182B] antialiased">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Servicios />
        <Proceso />
        <Sobre />
        <Testimonio />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
