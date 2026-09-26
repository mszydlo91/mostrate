import { describe, it, expect } from "vitest";
import { themeVars, primaryVars, PRIMARY_ALPHAS, type TemplateTheme } from "./theme";

const sample: TemplateTheme = {
  id: "azul",
  name: "Azul ejecutivo",
  accent: "#2F5FE0",
  accentStrong: "#2149B8",
  accentSoft: "rgba(47,95,224,0.09)",
  accentContrast: "#FFFFFF",
};

describe("themeVars", () => {
  it("mapea cada campo del tema a su variable CSS correspondiente", () => {
    expect(themeVars(sample)).toEqual({
      "--accent": sample.accent,
      "--accent-strong": sample.accentStrong,
      "--accent-soft": sample.accentSoft,
      "--accent-contrast": sample.accentContrast,
    });
  });
});

describe("primaryVars", () => {
  it("expone fondo, tinta, superficies y transparencias como variables CSS", () => {
    const vars = primaryVars({ id: "blanco", name: "Blanco", color: "#FFFFFF", ink: "#16182B" }) as Record<string, string>;
    expect(vars["--primary"]).toBe("#FFFFFF");
    expect(vars["--ink"]).toBe("#16182B");
    expect(vars["--primary-alt"]).toBe("color-mix(in srgb, #FFFFFF 94%, #16182B)");
    expect(vars["--card"]).toBe("color-mix(in srgb, #FFFFFF 25%, #FFFFFF)");
    expect(vars["--ink-a70"]).toBe("color-mix(in srgb, #16182B 70%, transparent)");
    expect(Object.keys(vars)).toHaveLength(7 + PRIMARY_ALPHAS.length * 2);
  });
});
