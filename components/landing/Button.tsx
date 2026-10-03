import type { ReactNode } from "react";
import { ArrowRightIcon } from "./Icons";

type Props = { children: string; href?: string; type?: "button" | "submit"; onClick?: () => void; variant?: "primary" | "outline" | "text"; size?: "md" | "sm"; full?: boolean; arrow?: boolean; className?: string };

export default function Button({ children, href, type = "button", onClick, variant = "primary", size = "md", full = false, arrow = true, className = "" }: Props) {
  const padding = size === "sm" ? "px-4 py-3 text-sm" : "px-5 py-4 text-[0.92rem]";
  const variants = {
    primary: "border-accent bg-accent text-white hover:border-content hover:bg-content",
    outline: "border-content/25 bg-transparent text-content hover:border-content hover:bg-content hover:text-bg",
    text: "border-transparent px-0 text-content hover:text-accent",
  };
  const classes = `group inline-flex min-h-11 items-center justify-center gap-4 border font-semibold transition-colors duration-300 ${padding} ${variants[variant]} ${full ? "w-full" : ""} ${className}`;
  const inner: ReactNode = <>{children}{arrow && <ArrowRightIcon aria-hidden="true" className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />}</>;
  return href ? <a href={href} onClick={onClick} className={classes}>{inner}</a> : <button type={type} onClick={onClick} className={classes}>{inner}</button>;
}
