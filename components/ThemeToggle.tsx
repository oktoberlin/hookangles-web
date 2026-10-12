"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("ha-theme", next); } catch {}
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="ml-1.5 flex h-[34px] cursor-pointer items-center gap-2 rounded-full border border-line-strong bg-transparent px-3 font-mono text-xs font-medium leading-none text-ink hover:border-ink"
    >
      <span
        aria-hidden="true"
        className="size-3 rounded-full border-[1.5px] border-current"
        style={{ background: "linear-gradient(90deg,currentColor 50%,transparent 50%)" }}
      />
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
