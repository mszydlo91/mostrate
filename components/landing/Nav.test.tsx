import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "./Nav";

describe("Nav", () => {
  it("abre el menú mobile y lo cierra con Escape devolviendo el foco", async () => {
    const user = userEvent.setup();
    render(<Nav />);
    const trigger = screen.getByRole("button", { name: /abrir menú/i });
    await user.click(trigger);
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    await user.keyboard("{Escape}");
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(trigger);
  });
});
