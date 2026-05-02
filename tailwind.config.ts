import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        foreground: "#000",
        "geist-gray": {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eaeaea",
          300: "#e1e1e1",
          400: "#cacaca",
          500: "#999",
          600: "#888",
          700: "#666",
          800: "#333",
          900: "#111",
        },
        accent: "#0070f3",
        "accent-light": "#3291ff",
        "accent-dark": "#0761d1",
        success: "#0070f3",
        warning: "#f5a623",
        error: "#e00",
      },
    },
  },
  plugins: [],
};

export default config;
