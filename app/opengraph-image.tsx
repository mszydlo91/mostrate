import { ImageResponse } from "next/og";

export const alt = "Mostrate — Diseño web para pequeños negocios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F3F0E8",
          color: "#111318",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
          <span style={{ fontWeight: 800 }}>mos<span style={{ color: "#2D52E8" }}>trate</span></span>
          <span style={{ color: "rgba(17,19,24,.6)" }}>Diseño + desarrollo web</span>
        </div>
        <div style={{ display: "flex", maxWidth: 980, fontSize: 78, fontWeight: 800, lineHeight: 0.98, letterSpacing: -4 }}>
          Una web que muestre lo mejor de tu negocio.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 24 }}>
          <span style={{ width: 72, height: 8, background: "#FF6247" }} />
          <span>Para pequeños negocios que quieren mostrarse mejor.</span>
        </div>
      </div>
    ),
    size
  );
}
