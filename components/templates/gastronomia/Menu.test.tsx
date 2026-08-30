import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Menu from "./Menu";

describe("Menu (Gastronomía)", () => {
  it("muestra los precios por defecto", () => {
    render(<Menu />);
    expect(screen.getByText("$ 6.500")).toBeDefined();
  });

  it("oculta los precios al tocar el toggle, y los vuelve a mostrar al tocarlo de nuevo", async () => {
    const user = userEvent.setup();
    render(<Menu />);

    const toggle = screen.getByRole("button", { name: /ocultar precios/i });
    await user.click(toggle);

    expect(screen.queryByText("$ 6.500")).toBeNull();
    expect(screen.getByRole("button", { name: /mostrar precios/i })).toBeDefined();

    await user.click(screen.getByRole("button", { name: /mostrar precios/i }));
    expect(screen.getByText("$ 6.500")).toBeDefined();
  });

  it("cambia de categoría al tocar otra pestaña del índice", async () => {
    const user = userEvent.setup();
    render(<Menu />);

    // "Provoleta a la parrilla" es de Entradas (categoría inicial).
    expect(screen.getByText("Provoleta a la parrilla")).toBeDefined();

    await user.click(screen.getByRole("button", { name: /pastas/i }));

    expect(screen.queryByText("Provoleta a la parrilla")).toBeNull();
    // "Sorrentinos..." también es el plato del día destacado (aparece 2 veces
    // en pantalla), así que se elige un plato de Pastas que no se repite.
    expect(screen.getByText("Ravioles de ricota y nuez")).toBeDefined();
  });
});
