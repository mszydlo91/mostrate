import { describe, it, expect } from "vitest";
import { profesionalPrimaries, profesionalThemes, profesionalDesigns, profesionalFonts } from "./profesional";
import { comercioPrimaries, comercioThemes } from "./comercio";
import { gastronomiaPrimaries, gastronomiaThemes } from "./gastronomia";
import { bienestarPrimaries, bienestarThemes } from "./bienestar";

const templates = {
  profesional: { primaries: profesionalPrimaries, themes: profesionalThemes },
  comercio: { primaries: comercioPrimaries, themes: comercioThemes },
  gastronomia: { primaries: gastronomiaPrimaries, themes: gastronomiaThemes },
  bienestar: { primaries: bienestarPrimaries, themes: bienestarThemes },
};

const hex = /^#[0-9A-F]{6}$/i;

describe("paletas de los templates", () => {
  for (const [slug, { primaries, themes }] of Object.entries(templates)) {
    it(`${slug}: 3 primarios y 3 secundarios con ids únicos y colores hex`, () => {
      expect(primaries).toHaveLength(3);
      expect(themes).toHaveLength(3);
      expect(new Set(primaries.map((p) => p.id)).size).toBe(3);
      expect(new Set(themes.map((t) => t.id)).size).toBe(3);
      for (const p of primaries) {
        expect(p.color).toMatch(hex);
        expect(p.ink).toMatch(hex);
      }
    });
  }

  it("ningún color primario ni secundario se repite entre templates", () => {
    const seen = new Map<string, string>();
    for (const [slug, { primaries, themes }] of Object.entries(templates)) {
      const colors = [...primaries.map((p) => p.color), ...themes.map((t) => t.accent)];
      for (const color of colors) {
        const key = color.toUpperCase();
        expect(seen.get(key), `${color} de ${slug} ya lo usa ${seen.get(key)}`).toBeUndefined();
        seen.set(key, slug);
      }
    }
  });
});

describe("diseños de Profesional", () => {
  it("cada diseño arranca con un tema, un primario y una fuente que existen", () => {
    for (const d of profesionalDesigns) {
      expect(profesionalThemes.some((t) => t.id === d.theme)).toBe(true);
      expect(profesionalPrimaries.some((p) => p.id === d.primary)).toBe(true);
      expect(profesionalFonts.some((f) => f.id === d.font)).toBe(true);
    }
  });
});
