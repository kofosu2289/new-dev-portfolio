import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../../styles/theme.css";
import { toggleButton } from "./ThemeToggle.css";

type ThemeMode = "light" | "dark" | "system";

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("theme") as ThemeMode | null;
    return saved ?? "system";
  });

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (mode: ThemeMode) => {
      root.classList.remove(lightTheme, darkTheme);
      const effective = mode === "system" ? getSystemTheme() : mode;
      root.classList.add(effective === "dark" ? darkTheme : lightTheme);
    };

    applyTheme(theme);

    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = () => applyTheme("system");
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, [theme]);

  const cycleTheme = () => {
    const order: ThemeMode[] = ["light", "dark", "system"];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={cycleTheme}
      aria-label="Toggle theme mode"
      className={toggleButton}
    >
      {theme === "system"
        ? "🖥️ System"
        : theme === "dark"
        ? "🌙 Dark"
        : "☀️ Light"}
    </button>
  );
}