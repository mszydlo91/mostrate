import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Portfolio from "./Portfolio";

class ObserverMock {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}

describe("Portfolio", () => {
  it("muestra los cuatro templates y sus demos reales", () => {
    vi.stubGlobal("IntersectionObserver", ObserverMock);
    render(<Portfolio />);
    for (const name of ["Profesional", "Comercio", "Gastronomía", "Bienestar"]) {
      expect(screen.getAllByText(name).length).toBeGreaterThan(0);
    }
    const demos = screen.getAllByRole("link", { name: /ver demo/i });
    expect(demos.some((link) => link.getAttribute("href") === "/templates/comercio")).toBe(true);
  });

  it("permite elegir un template desde el selector editorial", async () => {
    vi.stubGlobal("IntersectionObserver", ObserverMock);
    const user = userEvent.setup();
    render(<Portfolio />);
    const comercio = screen.getByRole("button", { name: /02.*comercio/i });
    await user.click(comercio);
    expect(comercio.getAttribute("aria-pressed")).toBe("true");
  });

  it("no monta el iframe hasta que se pide la vista en vivo y lo desmonta al salir", async () => {
    vi.stubGlobal("IntersectionObserver", ObserverMock);
    const user = userEvent.setup();
    render(<Portfolio />);

    expect(screen.queryByTitle(/vista previa interactiva/i)).toBeNull();
    await user.click(screen.getByRole("button", { name: /explorar en vivo/i }));

    const iframe = screen.getByTitle(/vista previa interactiva del template profesional/i);
    expect(iframe.getAttribute("src")).toBe("/templates/profesional");
    expect(screen.getAllByTitle(/vista previa interactiva/i)).toHaveLength(1);

    await user.click(screen.getByRole("button", { name: /salir de demo/i }));
    expect(screen.queryByTitle(/vista previa interactiva/i)).toBeNull();
  });

  it("sale del modo live al cambiar de template y carga solo la demo elegida cuando se vuelve a abrir", async () => {
    vi.stubGlobal("IntersectionObserver", ObserverMock);
    const user = userEvent.setup();
    render(<Portfolio />);

    await user.click(screen.getByRole("button", { name: /explorar en vivo/i }));
    expect(screen.getAllByTitle(/vista previa interactiva/i)).toHaveLength(1);

    const comercio = screen.getByRole("button", { name: /02.*comercio/i });
    await user.click(comercio);
    expect(screen.queryByTitle(/vista previa interactiva/i)).toBeNull();
    expect(comercio.getAttribute("aria-pressed")).toBe("true");

    await user.click(screen.getByRole("button", { name: /explorar en vivo/i }));
    const iframe = screen.getByTitle(/vista previa interactiva del template comercio/i);
    expect(iframe.getAttribute("src")).toBe("/templates/comercio");
    expect(screen.getAllByTitle(/vista previa interactiva/i)).toHaveLength(1);
  });
});
