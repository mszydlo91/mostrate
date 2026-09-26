"use client";

/**
 * Piezas compartidas por los 3 diseños del template Profesional: formulario
 * (abre el cliente de mail con los datos precargados) y datos derivados del
 * contenido. El menú mobile y los íconos vienen de `../common`.
 */
import { useState } from "react";
import { profesional } from "@/lib/templates/profesional";

/* ── Formulario de contacto: sin backend, abre el mail precargado ── */
export function useContactForm() {
  const [form, setForm] = useState({ name: "", email: "", area: "", message: "" });

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => setForm((f) => ({ ...f, [key]: e.target.value })),
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Consulta de ${form.name || "un cliente"}${form.area ? ` · ${form.area}` : ""}`;
    const body = [
      `Nombre: ${form.name}`,
      `Email: ${form.email}`,
      `Área: ${form.area}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${profesional.contacto.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return { field, onSubmit };
}

/** Link `tel:` a partir del teléfono visible. */
export const phoneHref = `tel:${profesional.contacto.phone.replace(/[^\d+]/g, "")}`;

export * from "../common";
