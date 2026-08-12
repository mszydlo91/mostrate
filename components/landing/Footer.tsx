import { footer } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-shell border-t border-line px-[clamp(20px,4vw,60px)] py-[clamp(24px,3vw,32px)] text-center text-[clamp(0.78rem,1vw,0.85rem)] text-muted">
      <p>{footer.text}</p>
    </footer>
  );
}
