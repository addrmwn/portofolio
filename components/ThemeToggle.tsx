"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMonitor } from "react-icons/fi";   // system
import { FiSun } from "react-icons/fi";       // light
import { FiMoon } from "react-icons/fi";      // dark

export default function ThemeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const active = theme === "system" ? `System (${systemTheme ?? ""})` : theme;

  const baseStyle =
    "flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold transition";
  const inactiveStyle =
    "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700";
  const activeStyle = "bg-accent text-white dark:bg-accent-dark";

  return (
    <div className="card flex items-center gap-1 p-1 rounded-full">
      <button
        onClick={() => setTheme("system")}
        className={`${baseStyle} ${
          theme === "system" ? activeStyle : inactiveStyle
        }`}
      >
        <FiMonitor size={14} /> System
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`${baseStyle} ${
          theme === "light" ? activeStyle : inactiveStyle
        }`}
      >
        <FiSun size={14} /> Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`${baseStyle} ${
          theme === "dark" ? activeStyle : inactiveStyle
        }`}
      >
        <FiMoon size={14} /> Dark
      </button>
      <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">
        {active}
      </span>
    </div>
  );
}
