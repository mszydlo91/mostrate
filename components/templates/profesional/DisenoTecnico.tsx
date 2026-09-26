"use client";

/**
 * Profesional — Diseño 2 "Técnico" (base: variante "Precisión suiza" de
 * Stitch). Grilla estricta con reglas finas, rótulos en monoespaciada,
 * esquinas rectas, panel tipo terminal y servicios agrupados en dos catálogos.
 */
import Image from "next/image";
import { profesional } from "@/lib/templates/profesional";
import {
  ArrowIcon,
  CheckCircleIcon,
  LockIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  TrendIcon,
  phoneHref,
  useContactForm,
  useMobileMenu,
} from "./shared";

const { business, nav, hero, stats, servicios, proceso, sobre, testimonio, contacto, footer } =
  profesional;

const heading = "font-[family-name:var(--tpl-font-heading)]";
const mono = "font-[family-name:var(--font-jetbrains)]";
const wrap = "mx-auto max-w-7xl px-6 lg:px-12";
const ink = "text-[var(--primary)]";
const line = "border-[#E2E5EC]";

/** Rótulo de sección con numeración estilo código: "// 01. Servicios" */
function Kicker({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <span className={`${mono} mb-2 block text-[11px] font-semibold uppercase tracking-widest text-[var(--accent)]`}>
      {`// ${n}. `}
      {children}
    </span>
  );
}

function Ticker() {
  return (
    <aside className={`${mono} border-b border-[var(--primary)] bg-[var(--primary)] px-4 py-1.5 text-[11px] uppercase tracking-wider text-white`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <span className="flex items-center gap-2 text-[var(--accent)]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
          {business.title} · Mat. {business.matricula}
        </span>
        <span className="hidden text-slate-400 md:inline">{hero.highlights.join("  /  ")}</span>
      </div>
    </aside>
  );
}

function Nav() {
  const menu = useMobileMenu();
  return (
    <header className={`sticky top-0 z-50 border-b ${line} bg-white/95 backdrop-blur-md`}>
      <div className={`${wrap} flex h-20 items-center justify-between`}>
        <a href="#top" onClick={menu.close} className="group flex items-center gap-4">
          <span className={`${heading} flex h-11 w-11 items-center justify-center border-2 border-[var(--primary)] text-lg font-bold ${ink} transition-colors group-hover:bg-[var(--primary)] group-hover:text-white`}>
            {business.initials}
          </span>
          <span className="flex flex-col">
            <span className={`${heading} text-base font-bold uppercase tracking-tight ${ink}`}>{business.name}</span>
            <span className={`${mono} text-[11px] uppercase tracking-wider text-slate-500`}>
              {business.owner} · {business.title}
            </span>
          </span>
        </a>

        <nav className={`${mono} hidden items-center text-[12px] uppercase tracking-wider text-slate-500 md:flex`}>
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="px-4 py-2 transition-colors hover:bg-slate-50 hover:text-[var(--primary)]">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={nav.cta.href}
            className={`${mono} hidden items-center gap-2 bg-[var(--primary)] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[var(--accent)] sm:inline-flex`}
          >
            {nav.cta.label}
            <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
          </a>
          <button
            type="button"
            onClick={menu.toggle}
            aria-label={menu.open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menu.open}
            className={`flex h-10 w-10 items-center justify-center border ${line} ${ink} md:hidden`}
          >
            <MenuIcon open={menu.open} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {menu.open && (
        <div className={`border-t ${line} bg-white px-6 pb-6 md:hidden`}>
          {nav.links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={menu.close} className={`flex items-baseline gap-4 border-b ${line} py-4`}>
              <span className={`${mono} text-xs text-[var(--accent)]`}>{String(i + 1).padStart(2, "0")}</span>
              <span className={`${heading} text-2xl font-bold ${ink}`}>{l.label}</span>
            </a>
          ))}
          <a href={nav.cta.href} onClick={menu.close} className={`${mono} mt-5 block bg-[var(--primary)] py-4 text-center text-xs font-semibold uppercase tracking-wider text-white`}>
            {nav.cta.label}
          </a>
        </div>
      )}
    </header>
  );
}

function Panel() {
  const { panel } = hero;
  const last = panel.bars.length - 1;
  return (
    <div className="border-2 border-[var(--primary)] bg-white shadow-xl">
      <div className={`${mono} flex items-center justify-between bg-[var(--primary)] px-4 py-3 text-[11px] uppercase tracking-wider text-white`}>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          {panel.title}
        </span>
        <span className="text-[10px] text-slate-400">{panel.status}</span>
      </div>

      <div className={`border-b ${line} bg-slate-50/60 p-6`}>
        <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
          <span className={`${mono} text-[11px] uppercase tracking-wider text-slate-500`}>{panel.label}</span>
          <span className={`${mono} inline-flex items-center gap-1 bg-[var(--accent-soft)] px-2 py-0.5 text-[11px] font-semibold text-[var(--accent)]`}>
            <TrendIcon className="h-3.5 w-3.5" />
            {panel.trend}
          </span>
        </div>
        <div className={`${mono} text-3xl font-bold tracking-tight ${ink}`}>{panel.amount}</div>
      </div>

      <div className={`border-b ${line} p-6`}>
        <div className="grid h-24 grid-cols-6 items-end gap-2 pt-2">
          {panel.bars.map((b, i) => (
            <div key={b.month} className="flex h-full flex-col items-center justify-end gap-1">
              <div style={{ height: `${b.value}%` }} className={`w-full ${i === last ? "bg-[var(--accent)]" : "bg-slate-200"}`} />
              <span className={`${mono} text-[9px] uppercase ${i === last ? `font-bold ${ink}` : "text-slate-500"}`}>{b.month}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2.5 p-6">
        <span className={`${mono} block text-[10px] uppercase tracking-wider text-slate-500`}>{panel.obligationsLabel}</span>
        {panel.obligations.map((o) => (
          <div key={o.label} className={`${mono} flex items-center justify-between border ${line} bg-slate-50 p-2.5 text-[12px]`}>
            <span className={`flex items-center gap-2 ${ink}`}>
              <CheckCircleIcon className="h-4 w-4 text-[var(--accent)]" />
              {o.label}
            </span>
            <span className="text-[11px] font-semibold uppercase text-[var(--accent)]">{o.status}</span>
          </div>
        ))}
      </div>

      <div className={`${mono} flex items-center gap-2.5 border-t ${line} bg-[var(--accent-soft)] px-6 py-3.5 text-[11px] ${ink}`}>
        <ShieldIcon className="h-4 w-4 text-[var(--accent)]" />
        {panel.nextDue}
      </div>
    </div>
  );
}

function Hero() {
  const trust = [stats[0], stats[2], stats[3]];
  return (
    <section id="top" className={`border-b ${line} bg-white`}>
      <div className={`${wrap} pb-20 pt-14`}>
        <div className={`${mono} mb-10 flex items-center justify-between border-b ${line} pb-6 text-[11px] uppercase tracking-widest text-slate-500`}>
          <span className="flex items-center gap-2 font-semibold text-[var(--accent)]">
            <span className="inline-block h-1.5 w-1.5 bg-[var(--accent)]" />
            {hero.eyebrow}
          </span>
          <span className="hidden sm:inline">{contacto.location}</span>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className={`${heading} mb-6 text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.06] tracking-tight ${ink}`}>
              {hero.title.before}
              <span className="text-[var(--accent)] underline decoration-[var(--accent)] decoration-2 underline-offset-8">{hero.title.highlight}</span>
              {hero.title.after}
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">{hero.subtitle}</p>
            <div className="mb-10 flex flex-wrap items-center gap-4">
              <a href={hero.primary.href} className={`${mono} flex items-center gap-2 bg-[var(--primary)] px-7 py-4 text-[13px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[var(--accent)]`}>
                {hero.primary.label}
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a href={hero.secondary.href} className={`${mono} border ${line} px-7 py-4 text-[13px] uppercase tracking-wider ${ink} transition-colors hover:bg-slate-50`}>
                {hero.secondary.label}
              </a>
            </div>
            <div className={`${mono} grid grid-cols-3 divide-x border ${line} divide-[#E2E5EC] bg-slate-50/50 text-[11px]`}>
              {trust.map((s) => (
                <div key={s.label} className="p-3.5">
                  <span className="block text-[10px] uppercase text-slate-500">{s.label}</span>
                  <strong className={`text-sm font-semibold ${ink}`}>{s.num}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <Panel />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className={`border-b ${line} bg-slate-50`}>
      <div className={`${wrap} py-10`}>
        <div className={`grid grid-cols-2 border ${line} bg-white md:grid-cols-4`}>
          {stats.map((s, i) => (
            <div key={s.label} className={`p-6 ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""} ${line}`}>
              <span className={`${mono} text-3xl font-bold tracking-tight sm:text-4xl ${i === 2 ? "text-[var(--accent)]" : ink}`}>{s.num}</span>
              <span className={`${mono} mt-1 block text-[11px] uppercase tracking-wider text-slate-500`}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className={`border-b ${line} bg-white py-20 lg:py-24`}>
      <div className={wrap}>
        <div className={`mb-12 flex flex-col justify-between gap-4 border-b ${line} pb-8 md:flex-row md:items-end`}>
          <div>
            <Kicker n="01">{servicios.label}</Kicker>
            <h2 className={`${heading} text-[clamp(2rem,4vw,2.6rem)] font-bold tracking-tight ${ink}`}>{servicios.title}</h2>
          </div>
          <p className={`${mono} max-w-sm text-sm text-slate-500`}>{servicios.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {servicios.groups.map((g, gi) => (
            <div key={g.id} className={`flex flex-col justify-between border ${line} bg-white`}>
              <div>
                <div className="flex items-center justify-between gap-3 bg-[var(--primary)] p-5 text-white">
                  <span className="flex items-center gap-3">
                    <span className={`${mono} bg-white/10 px-2 py-0.5 text-xs font-semibold text-[var(--accent)]`}>CAT-0{gi + 1}</span>
                    <span className={`${heading} text-lg font-bold uppercase tracking-wider`}>{g.title}</span>
                  </span>
                  <span className={`${mono} hidden text-[11px] text-slate-300 sm:inline`}>{g.note}</span>
                </div>
                {servicios.items
                  .filter((s) => s.group === g.id)
                  .map((s) => (
                    <div key={s.title} className={`border-b ${line} p-6 transition-colors last:border-b-0 hover:bg-slate-50/80`}>
                      <div className="mb-2 flex items-start justify-between gap-4">
                        <h3 className={`${heading} text-lg font-bold ${ink}`}>{s.title}</h3>
                        <span className={`${mono} flex-shrink-0 bg-[var(--accent-soft)] px-2 py-0.5 text-[11px] font-semibold uppercase text-[var(--accent)]`}>{s.num}</span>
                      </div>
                      <p className="mb-4 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                      <div className={`${mono} flex flex-wrap gap-1.5 text-[10px] text-slate-600`}>
                        {s.details.map((d) => (
                          <span key={d} className="border border-slate-200 bg-slate-100 px-2 py-0.5">{d}</span>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
              <div className={`${mono} flex items-center justify-between border-t ${line} bg-slate-50 p-4 text-[11px] uppercase text-slate-500`}>
                <span>{groupTags(gi)}</span>
                <a href="#contacto" className={`inline-flex items-center gap-1 font-bold ${ink} hover:text-[var(--accent)]`}>
                  {servicios.cta} <ArrowIcon className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Pie de cada catálogo: los tags de los servicios del grupo. */
function groupTags(groupIndex: number) {
  const group = servicios.groups[groupIndex];
  return servicios.items
    .filter((s) => s.group === group.id)
    .map((s) => s.tag)
    .join(" · ");
}

function Proceso() {
  return (
    <section id="proceso" className={`border-b ${line} bg-slate-50 py-20 lg:py-24`}>
      <div className={wrap}>
        <div className={`mb-12 border-b ${line} pb-8`}>
          <Kicker n="02">{proceso.label}</Kicker>
          <h2 className={`${heading} text-[clamp(2rem,4vw,2.6rem)] font-bold tracking-tight ${ink}`}>{proceso.title}</h2>
        </div>
        <div className={`grid grid-cols-1 border ${line} bg-white md:grid-cols-3`}>
          {proceso.steps.map((step, i) => (
            <div key={step.num} className={`flex flex-col justify-between p-8 ${i > 0 ? `border-t md:border-l md:border-t-0 ${line}` : ""}`}>
              <div>
                <div className={`mb-6 flex items-center justify-between border-b ${line} pb-4`}>
                  <span className={`${mono} text-2xl font-bold ${ink}`}>{step.num}</span>
                  <span className={`${mono} bg-slate-100 px-2 py-0.5 text-[10px] uppercase text-slate-500`}>Paso {i + 1}</span>
                </div>
                <h3 className={`${heading} mb-3 text-xl font-bold ${ink}`}>{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </div>
              <div className={`${mono} mt-8 border-t ${line} pt-4 text-[11px] font-semibold uppercase text-[var(--accent)]`}>{step.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className={`border-b ${line} bg-white py-20 lg:py-24`}>
      <div className={`${wrap} grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-5">
          <div className="border-2 border-[var(--primary)] bg-white p-3 shadow-lg">
            <div className="group relative h-[460px] overflow-hidden bg-slate-100">
              <Image
                src={sobre.photo.src}
                alt={sobre.photo.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top grayscale transition duration-500 group-hover:grayscale-0"
              />
              <span className={`${mono} absolute bottom-4 left-4 border border-white/20 bg-[var(--primary-a90)] px-3 py-1.5 text-[10px] uppercase tracking-wider text-white`}>
                {business.matricula}
              </span>
            </div>
            <div className={`mt-3 flex items-center justify-between border ${line} bg-slate-50 p-4`}>
              <div>
                <span className={`${heading} block font-bold ${ink}`}>{business.owner}</span>
                <span className={`${mono} text-[11px] text-slate-500`}>
                  {business.title} {business.university}
                </span>
              </div>
              <ShieldIcon className="h-6 w-6 text-[var(--primary)]" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Kicker n="03">{sobre.label}</Kicker>
          <h2 className={`${heading} mb-6 text-[clamp(2rem,4vw,2.6rem)] font-bold tracking-tight ${ink}`}>{sobre.title}</h2>
          <div className="mb-8 space-y-4 text-base leading-relaxed text-slate-600">
            {sobre.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className={`border ${line} bg-slate-50 p-6`}>
            <div className={`${mono} grid grid-cols-1 gap-4 text-[11px] sm:grid-cols-3`}>
              {sobre.credentials.map((c, i) => (
                <div key={c.title} className={`border-l-2 pl-3 ${i === 1 ? "border-[var(--primary)]" : "border-[var(--accent)]"}`}>
                  <strong className={`block font-bold ${ink}`}>{c.title}</strong>
                  <span className="text-slate-500">{c.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonio() {
  return (
    <section className={`border-b ${line} bg-slate-50 py-16`}>
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <span className={`${mono} mb-4 block text-[11px] uppercase tracking-widest text-slate-500`}>{"// Testimonio"}</span>
        <blockquote className={`${heading} mb-6 text-[clamp(1.4rem,3vw,2rem)] font-bold leading-snug tracking-tight ${ink}`}>
          “{testimonio.quote}”
        </blockquote>
        <cite className={`${mono} block text-[13px] font-bold uppercase not-italic tracking-wider ${ink}`}>{testimonio.author}</cite>
        <span className={`${mono} text-[11px] text-slate-500`}>{testimonio.role}</span>
      </div>
    </section>
  );
}

function Contacto() {
  const { field, onSubmit } = useContactForm();
  const input = `w-full border ${line} bg-white px-4 py-3 text-sm ${ink} outline-none transition-colors placeholder:text-slate-400 focus:border-[var(--primary)]`;
  const label = `${mono} mb-1.5 block text-[11px] uppercase tracking-wider ${ink}`;
  const channels = [
    { icon: MailIcon, label: contacto.labels.email, value: contacto.email, href: `mailto:${contacto.email}` },
    { icon: PhoneIcon, label: contacto.labels.phone, value: contacto.phone, href: phoneHref },
    { icon: PinIcon, label: contacto.labels.location, value: contacto.location },
  ];

  return (
    <section id="contacto" className="bg-white py-20 lg:py-24">
      <div className={`${wrap} grid grid-cols-1 gap-12 lg:grid-cols-12`}>
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <Kicker n="04">{contacto.label}</Kicker>
            <h2 className={`${heading} mb-4 text-[clamp(2rem,4vw,2.6rem)] font-bold tracking-tight ${ink}`}>{contacto.title}</h2>
            <p className="mb-8 text-sm leading-relaxed text-slate-600">{contacto.subtitle}</p>
            <div className="mb-8 space-y-4">
              {channels.map((c) => {
                const Inner = (
                  <>
                    <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center border ${line} bg-white ${ink}`}>
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className={`${mono} block text-[10px] uppercase tracking-wider text-slate-500`}>{c.label}</span>
                      <strong className={`${mono} text-sm ${ink}`}>{c.value}</strong>
                    </span>
                  </>
                );
                const cls = `flex items-start gap-4 border ${line} bg-slate-50/50 p-4 transition-colors`;
                return c.href ? (
                  <a key={c.label} href={c.href} className={`${cls} hover:border-[var(--primary)]`}>{Inner}</a>
                ) : (
                  <div key={c.label} className={cls}>{Inner}</div>
                );
              })}
            </div>
          </div>
          <p className={`${mono} flex items-center gap-2 border ${line} bg-slate-50 p-4 text-[11px] text-slate-500`}>
            <LockIcon className="h-4 w-4 flex-shrink-0 text-[var(--accent)]" />
            {contacto.privacy}
          </p>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={onSubmit} className="space-y-5 border-2 border-[var(--primary)] bg-white p-8 md:p-10">
            <div className={`border-b ${line} pb-4`}>
              <h3 className={`${heading} text-xl font-bold uppercase tracking-wide ${ink}`}>{contacto.form.title}</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="pc2-name" className={label}>{contacto.form.name.label} *</label>
                <input id="pc2-name" required placeholder={contacto.form.name.placeholder} className={input} {...field("name")} />
              </div>
              <div>
                <label htmlFor="pc2-email" className={label}>{contacto.form.email.label} *</label>
                <input id="pc2-email" type="email" required placeholder={contacto.form.email.placeholder} className={input} {...field("email")} />
              </div>
            </div>
            <div>
              <label htmlFor="pc2-area" className={label}>{contacto.form.area.label}</label>
              <select id="pc2-area" className={input} {...field("area")}>
                <option value="">{contacto.form.area.placeholder}</option>
                {contacto.form.area.options.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pc2-msg" className={label}>{contacto.form.message.label}</label>
              <textarea id="pc2-msg" rows={4} placeholder={contacto.form.message.placeholder} className={`${input} resize-y`} {...field("message")} />
            </div>
            <button type="submit" className={`${mono} flex w-full items-center justify-center gap-2 bg-[var(--primary)] py-4 text-[13px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[var(--accent)]`}>
              {contacto.form.submit}
              <ArrowIcon className="h-4 w-4" />
            </button>
            <p className={`${mono} text-center text-[10px] uppercase text-slate-500`}>{contacto.form.note}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className={`${wrap} py-14`}>
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-4 flex items-center gap-3">
              <span className={`${heading} flex h-9 w-9 items-center justify-center border border-white text-base font-bold`}>{business.initials}</span>
              <span className={`${heading} text-lg font-bold uppercase tracking-tight`}>{business.name}</span>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-slate-400">{footer.description}</p>
          </div>
          <nav className={`${mono} grid grid-cols-2 gap-2 text-xs text-slate-300 md:col-span-4`}>
            {nav.links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[var(--accent)]">{l.label}</a>
            ))}
          </nav>
          <div className={`${mono} border border-white/15 bg-white/5 p-4 text-[11px] md:col-span-3`}>
            <span className="mb-1 block font-bold uppercase text-[var(--accent)]">Matrícula</span>
            <span>{business.matricula}</span>
          </div>
        </div>
        <p className={`${mono} pt-8 text-[11px] text-slate-400`}>
          © {new Date().getFullYear()} {business.name} · {footer.tagline}
        </p>
      </div>
    </footer>
  );
}

export default function DisenoTecnico() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-jakarta)] text-[var(--primary)] antialiased">
      <Ticker />
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
