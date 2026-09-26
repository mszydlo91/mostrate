"use client";

/**
 * Piezas compartidas por los 3 diseños del template Profesional: lógica del
 * menú mobile y del formulario (abre el cliente de mail con los datos
 * precargados), íconos de línea y datos derivados del contenido.
 */
import { useEffect, useState, type SVGProps } from "react";
import { profesional } from "@/lib/templates/profesional";

/* ── Menú mobile: abre/cierra y bloquea el scroll del body ── */
export function useMobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return { open, toggle: () => setOpen((v) => !v), close: () => setOpen(false) };
}

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

/* ── Íconos de línea (heredan color con currentColor) ── */
type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);
export const CheckCircleIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.5 2.5 4.5-5" />
  </Icon>
);
export const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Icon>
);
export const TrendIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m4 16 5-5 4 4 7-7" />
    <path d="M15 8h5v5" />
  </Icon>
);
export const CalendarIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M8 3v4M16 3v4M4 10h16" />
  </Icon>
);
export const MailIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </Icon>
);
export const PhoneIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </Icon>
);
export const PinIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Icon>
);
export const LockIcon = (p: IconProps) => (
  <Icon {...p}>
    <rect x="5" y="10" width="14" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </Icon>
);
export const ShieldIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 5 6v5c0 4.4 2.9 8.3 7 10 4.1-1.7 7-5.6 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);
export const QuoteIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M10 6.5C6.7 7.6 4.5 10.3 4.5 13.8V18h5.2v-5H7.4c.2-1.9 1.3-3.3 3.1-4.1L10 6.5Zm9 0c-3.3 1.1-5.5 3.8-5.5 7.3V18h5.2v-5h-2.3c.2-1.9 1.3-3.3 3.1-4.1L19 6.5Z" />
  </svg>
);
export const StarIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
  </svg>
);
export const MenuIcon = ({ open, ...p }: IconProps & { open: boolean }) => (
  <Icon {...p}>{open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</Icon>
);
