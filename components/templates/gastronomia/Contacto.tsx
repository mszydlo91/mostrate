"use client";

import { useState } from "react";
import { gastronomia } from "@/lib/templates/gastronomia";

const { contacto } = gastronomia;

const inputClass =
  "w-full border-b border-[var(--ink-a20)] bg-transparent py-3 text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--ink-a30)] focus:border-[var(--accent)]";

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Reserva de ${form.name || "un cliente"}`;
    const body = [
      `Nombre: ${form.name}`,
      `Email: ${form.email}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${contacto.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contacto" className="border-b border-[var(--ink-a10)]">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
        {/* Info */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
            {contacto.label}
          </span>
          <h2 className="mt-2 font-[family-name:var(--tpl-font-heading)] text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold italic text-[var(--ink)]">
            {contacto.title}
          </h2>
          <p className="mt-4 max-w-xs text-sm text-[var(--ink-a50)]">{contacto.subtitle}</p>

          <div className="mt-8 space-y-2 text-sm">
            <a href={`mailto:${contacto.email}`} className="block text-[var(--ink-a80)] hover:text-[var(--accent)]">
              {contacto.email}
            </a>
            <div className="text-[var(--ink-a80)]">{contacto.phone}</div>
          </div>
        </div>

        {/* Formulario, sin caja — inputs subrayados */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="g-name" className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--ink-a45)]">
              {contacto.form.name.label}
            </label>
            <input
              id="g-name"
              type="text"
              required
              placeholder={contacto.form.name.placeholder}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="g-email" className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--ink-a45)]">
              {contacto.form.email.label}
            </label>
            <input
              id="g-email"
              type="email"
              required
              placeholder={contacto.form.email.placeholder}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="g-msg" className="text-xs font-medium uppercase tracking-[0.08em] text-[var(--ink-a45)]">
              {contacto.form.message.label}
            </label>
            <textarea
              id="g-msg"
              placeholder={contacto.form.message.placeholder}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} min-h-[80px] resize-y`}
            />
          </div>
          <button
            type="submit"
            className="mt-2 self-start border border-[var(--ink-a25)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {contacto.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
