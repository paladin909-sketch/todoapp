import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f4f3ff",
          100: "#ebe8ff",
          200: "#d9d4ff",
          300: "#bcb2ff",
          400: "#9a86ff",
          500: "#7c5cff",
          600: "#6a3ff5",
          700: "#5a2fdb",
          800: "#4a27b0",
          900: "#3d238c",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.25s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
