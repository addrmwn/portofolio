import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0f172a",
          dim: "#475569",
          inverted: "#e5e7eb"
        },
        accent: {
          DEFAULT: "#0ea5e9",
          dark: "#38bdf8"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],           // pakai self-host Inter
        display: ["Space Grotesk", "system-ui", "sans-serif"] // pakai self-host Space Grotesk
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.06)",
        softdark: "0 16px 40px rgba(0, 0, 0, .45)"
      }
    }
  },
  plugins: []
};

export default config;
