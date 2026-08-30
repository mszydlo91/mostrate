import { describe, it, expect } from "vitest";
import { themeVars, type TemplateTheme } from "./theme";

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
