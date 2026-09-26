import { describe, it, expect } from "vitest";
import { resolveDesign, type TemplateDesign } from "./design";

const designs: TemplateDesign[] = [
  { id: "1", name: "Clásico" },
  { id: "2", name: "Técnico" },
  { id: "3", name: "Boutique" },
];

describe("resolveDesign", () => {
  it("devuelve el diseño pedido en la URL", () => {
    expect(resolveDesign(designs, "2").name).toBe("Técnico");
  });

  it("usa el primer valor si el parámetro viene repetido", () => {
    expect(resolveDesign(designs, ["3", "1"]).name).toBe("Boutique");
  });

  it("vuelve al primer diseño si no hay parámetro o no existe", () => {
    expect(resolveDesign(designs).id).toBe("1");
    expect(resolveDesign(designs, "9").id).toBe("1");
  });
});
