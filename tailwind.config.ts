import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F5F0E8",
          light: "#FAF7F2",
          dark: "#E8E0D0",
        },
        dark: {
          DEFAULT: "#5f2483",
          deep: "#3d1555",
        },
        ink: "#2d2d2d",
        muted: "#6b6b6b",
        butter: "#fde9a2",
        blush: "#fbdad0",
        sage: "#d4e198",
      },
      fontFamily: {
        sans: ["var(--font-mulish)", "Avenir Next", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
