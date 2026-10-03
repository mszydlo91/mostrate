import localFont from "next/font/local";

const instrument = localFont({
  src: [
    { path: "../fonts/instrument-serif-latin-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/instrument-serif-latin-italic-400.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
const playfair = localFont({
  src: [
    { path: "../fonts/playfair-display-latin.woff2", weight: "600", style: "normal" },
    { path: "../fonts/playfair-display-latin.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-playfair",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
const spaceGrotesk = localFont({
  src: [
    { path: "../fonts/space-grotesk-latin.woff2", weight: "500", style: "normal" },
    { path: "../fonts/space-grotesk-latin.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});
const poppins = localFont({
  src: [
    { path: "../fonts/poppins-latin-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/poppins-latin-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});
const newsreader = localFont({
  src: [
    { path: "../fonts/newsreader-latin.woff2", weight: "400", style: "normal" },
    { path: "../fonts/newsreader-latin.woff2", weight: "500", style: "normal" },
    { path: "../fonts/newsreader-latin.woff2", weight: "600", style: "normal" },
    { path: "../fonts/newsreader-latin-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/newsreader-latin-italic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/newsreader-latin-italic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-newsreader",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
const jakarta = localFont({
  src: [
    { path: "../fonts/plus-jakarta-sans-latin.woff2", weight: "400", style: "normal" },
    { path: "../fonts/plus-jakarta-sans-latin.woff2", weight: "500", style: "normal" },
    { path: "../fonts/plus-jakarta-sans-latin.woff2", weight: "600", style: "normal" },
    { path: "../fonts/plus-jakarta-sans-latin.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});
const jetbrains = localFont({
  src: [
    { path: "../fonts/jetbrains-mono-latin.woff2", weight: "400", style: "normal" },
    { path: "../fonts/jetbrains-mono-latin.woff2", weight: "500", style: "normal" },
    { path: "../fonts/jetbrains-mono-latin.woff2", weight: "600", style: "normal" },
    { path: "../fonts/jetbrains-mono-latin.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-jetbrains",
  display: "swap",
});
const bricolage = localFont({
  src: [
    { path: "../fonts/bricolage-grotesque-latin.woff2", weight: "500", style: "normal" },
    { path: "../fonts/bricolage-grotesque-latin.woff2", weight: "700", style: "normal" },
    { path: "../fonts/bricolage-grotesque-latin.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-bricolage",
  display: "swap",
});
const cormorant = localFont({
  src: [
    { path: "../fonts/cormorant-garamond-latin.woff2", weight: "400", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin.woff2", weight: "500", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin.woff2", weight: "600", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/cormorant-garamond-latin-italic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/cormorant-garamond-latin-italic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
const oswald = localFont({
  src: [
    { path: "../fonts/oswald-latin.woff2", weight: "400", style: "normal" },
    { path: "../fonts/oswald-latin.woff2", weight: "500", style: "normal" },
    { path: "../fonts/oswald-latin.woff2", weight: "600", style: "normal" },
    { path: "../fonts/oswald-latin.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-oswald",
  display: "swap",
});
const barlow = localFont({
  src: [
    { path: "../fonts/barlow-condensed-latin-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/barlow-condensed-latin-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/barlow-condensed-latin-800.woff2", weight: "800", style: "normal" },
    { path: "../fonts/barlow-condensed-latin-italic-600.woff2", weight: "600", style: "italic" },
    { path: "../fonts/barlow-condensed-latin-italic-700.woff2", weight: "700", style: "italic" },
    { path: "../fonts/barlow-condensed-latin-italic-800.woff2", weight: "800", style: "italic" },
  ],
  variable: "--font-barlow",
  display: "swap",
});

const variables = [
  instrument.variable,
  playfair.variable,
  spaceGrotesk.variable,
  poppins.variable,
  newsreader.variable,
  jakarta.variable,
  jetbrains.variable,
  bricolage.variable,
  cormorant.variable,
  oswald.variable,
  barlow.variable,
].join(" ");

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return <div className={variables}>{children}</div>;
}
