"use client";

import { useState } from "react";
import { contacto, contact } from "@/lib/config";

const inputClass =
  "w-full rounded-lg border border-line bg-surface px-4 py-[clamp(10px,1.2vw,12px)] text-[clamp(0.88rem,1vw,0.95rem)] text-content outline-none transition-colors focus:border-accent";

export default function Contacto() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rubro: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Sin backend todavía: abrimos el cliente de correo con los datos precargados.
    const subject = `Consulta de ${form.name || "un negocio"}`;
    const body = [
      `Nombre: ${form.name}`,
      `Email: ${form.email}`,
      `Rubro: ${form.rubro}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section
      id="contacto"
      className="mx-auto max-w-shell border-t border-line px-[clamp(20px,4vw,60px)] py-[clamp(60px,8vw,110px)]"
    >
      <div className="grid grid-cols-2 items-start gap-[clamp(32px,5vw,64px)] max-[767px]:grid-cols-1 max-[767px]:gap-10">
        {/* Info */}
        <div>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            {contacto.label}
          </span>
          <h2 className="mb-3 font-syne text-[clamp(1.6rem,2.5vw,2.6rem)] font-bold leading-[1.2] tracking-[-0.02em]">
            {contacto.title}
          </h2>
          <p className="max-w-[520px] text-[clamp(0.95rem,1.2vw,1.05rem)] text-muted">
            {contacto.subtitle}
          </p>

          <div className="mt-7 flex items-center gap-3 text-[clamp(0.88rem,1vw,0.95rem)] text-muted">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent-dim text-[0.9rem]">
              📧
            </span>
            <a href={`mailto:${contact.email}`} className="hover:text-content">
              {contact.email}
            </a>
          </div>
          <div className="mt-7 flex items-center gap-3 text-[clamp(0.88rem,1vw,0.95rem)] text-muted">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent-dim text-[0.9rem]">
              💬
            </span>
            {contact.whatsapp.number ? (
              <a
                href={`https://wa.me/${contact.whatsapp.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-content"
              >
                {contact.whatsapp.label}
              </a>
            ) : (
              <span>{contact.whatsapp.label}</span>
            )}
          </div>
          <div className="mt-7 flex items-center gap-3 text-[clamp(0.88rem,1vw,0.95rem)] text-muted">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent-dim text-[0.9rem]">
              📍
            </span>
            <span>{contact.location}</span>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-[clamp(0.8rem,1vw,0.85rem)] font-medium text-muted">
              {contacto.form.name.label}
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder={contacto.form.name.placeholder}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[clamp(0.8rem,1vw,0.85rem)] font-medium text-muted">
              {contacto.form.email.label}
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder={contacto.form.email.placeholder}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="rubro" className="text-[clamp(0.8rem,1vw,0.85rem)] font-medium text-muted">
              {contacto.form.rubro.label}
            </label>
            <select
              id="rubro"
              value={form.rubro}
              onChange={(e) => setForm({ ...form, rubro: e.target.value })}
              className={inputClass}
            >
              <option value="">{contacto.form.rubro.placeholder}</option>
              {contacto.form.rubro.options.map((opt) => (
                <option key={opt} value={opt} className="bg-surface">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[clamp(0.8rem,1vw,0.85rem)] font-medium text-muted">
              {contacto.form.message.label}
            </label>
            <textarea
              id="message"
              placeholder={contacto.form.message.placeholder}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} min-h-[110px] resize-y`}
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-accent px-7 py-3.5 text-[clamp(0.88rem,1vw,0.95rem)] font-semibold text-white transition hover:-translate-y-px hover:opacity-90"
          >
            {contacto.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
