import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F3F0E8",
        surface: "#E7E3DA",
        paper: "#FBFAF6",
        content: "#111318",
        muted: "rgba(17,19,24,0.66)",
        accent: "#2D52E8",
        "accent-dim": "rgba(45,82,232,0.11)",
        signal: "#FF6247",
        line: "rgba(17,19,24,0.16)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dmsans)", "sans-serif"],
        syne: ["var(--font-syne)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
      },
      maxWidth: {
        shell: "clamp(280px, 92vw, 1760px)",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        "underline-in": {
          to: { transform: "scaleX(1)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-in": {
          from: { opacity: "0", transform: "translateY(16px) scale(0.99)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        pulse: "pulse 2s infinite",
        "underline-in": "underline-in 0.6s 0.4s cubic-bezier(0.4,0,0.2,1) forwards",
        "fade-up": "fade-up 0.6s ease forwards",
        "reveal-in": "reveal-in 0.55s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
