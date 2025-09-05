"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMonitor, FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const active = theme === "system" ? `System (${systemTheme ?? ""})` : theme;

  const options = [
    { key: "system", label: "System", icon: FiMonitor },
    { key: "light", label: "Light", icon: FiSun },
    { key: "dark", label: "Dark", icon: FiMoon },
  ];

  return (
    <div className="relative flex items-center gap-1 p-1 rounded-full bg-slate-100 dark:bg-slate-800">
      {options.map((opt) => {
        const isActive = theme === opt.key;
        const Icon = opt.icon;
        return (
          <button
            key={opt.key}
            onClick={() => setTheme(opt.key)}
            className="relative flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold transition-colors"
          >
            {/* Highlight background */}
            {isActive && (
              <motion.div
                layoutId="theme-toggle-pill"
                className="absolute inset-0 rounded-full bg-accent dark:bg-accent-dark"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}

            {/* Icon & label */}
            <span
              className={`relative z-10 flex items-center gap-1 ${
                isActive ? "text-white" : "text-slate-600 dark:text-slate-300"
              }`}
            >
              <motion.span
                key={opt.key}
                animate={
                  isActive
                    ? { rotate: 360, scale: 1.2 }
                    : { rotate: 0, scale: 1 }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Icon size={14} />
              </motion.span>
              {opt.label}
            </span>
          </button>
        );
      })}

      <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">
        {active}
      </span>
    </div>
  );
}
