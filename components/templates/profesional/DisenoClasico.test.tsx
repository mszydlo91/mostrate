import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DisenoClasico from "./DisenoClasico";

// next/image necesita el runtime de Next; en jsdom alcanza con un <img>.
vi.mock("next/image", () => ({
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  default: ({ fill: _fill, priority: _priority, ...props }: Record<string, unknown>) => <img {...props} />,
}));

const original = window.location;

afterEach(() => {
  Object.defineProperty(window, "location", { value: original, writable: true });
});

describe("DisenoClasico (Profesional)", () => {
  it("el formulario abre el mail con nombre, email, área y mensaje", async () => {
    Object.defineProperty(window, "location", { value: { href: "" }, writable: true });
    const user = userEvent.setup();
    render(<DisenoClasico />);

    await user.type(screen.getByLabelText("Nombre"), "Ana Pérez");
    await user.type(screen.getByLabelText("Email"), "ana@mail.com");
    await user.selectOptions(screen.getByLabelText("¿En qué te ayudo?"), "Impuestos y AFIP");
    await user.type(screen.getByLabelText(/Contame tu situación/), "Necesito ayuda con IVA");
    await user.click(screen.getByRole("button", { name: /enviar consulta/i }));

    const href = decodeURIComponent(window.location.href);
    expect(href).toMatch(/^mailto:hola@estudiorivas\.com\.ar\?/);
    expect(href).toContain("Consulta de Ana Pérez · Impuestos y AFIP");
    expect(href).toContain("Email: ana@mail.com");
    expect(href).toContain("Necesito ayuda con IVA");
  });

  it("el menú mobile se abre y se cierra", async () => {
    const user = userEvent.setup();
    render(<DisenoClasico />);

    await user.click(screen.getByRole("button", { name: "Abrir menú" }));
    expect(screen.getByRole("button", { name: "Cerrar menú" }).getAttribute("aria-expanded")).toBe("true");

    await user.click(screen.getByRole("button", { name: "Cerrar menú" }));
    expect(screen.getByRole("button", { name: "Abrir menú" })).toBeDefined();
  });
});
