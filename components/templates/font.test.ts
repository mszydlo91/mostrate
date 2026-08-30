import { describe, it, expect } from "vitest";
import { fontVars, templateFonts, type TemplateFont } from "./font";

describe("fontVars", () => {
  it("mapea la fuente a la variable CSS --tpl-font-heading", () => {
    const sample: TemplateFont = {
      id: "playfair",
      name: "Playfair — editorial",
      heading: "var(--font-playfair)",
    };

    expect(fontVars(sample)).toEqual({
      "--tpl-font-heading": sample.heading,
    });
  });
});

describe("templateFonts", () => {
  it("tiene 4 opciones con ids únicos", () => {
    expect(templateFonts).toHaveLength(4);
    const ids = templateFonts.map((f) => f.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("cada fuente referencia una variable CSS válida", () => {
    for (const font of templateFonts) {
      expect(font.heading).toMatch(/^var\(--font-[\w-]+\)$/);
    }
  });
});
