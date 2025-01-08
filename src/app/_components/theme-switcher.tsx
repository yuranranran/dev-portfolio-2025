"use client";

import { useEffect, useState } from "react";

type ColorSchemePreference = "system" | "dark" | "light";

const STORAGE_KEY = "nextjs-blog-starter-theme";
const modes: ColorSchemePreference[] = ["system", "dark", "light"];

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<ColorSchemePreference>("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) as ColorSchemePreference;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);
    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  return (
    <div className="fixed bottom-4 left-4">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        {modes.map((mode) => (
          <button
            key={mode}
            type="button"
            className={`px-4 py-2 text-sm font-medium border ${theme === mode ? "bg-slate-800 text-white" : "bg-white text-black"} hover:bg-slate-800 hover:text-white`}
            onClick={() => setTheme(mode)}
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;