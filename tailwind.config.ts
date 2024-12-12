import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: () => ({
        "112": "28rem",
        "120": "30rem",
      }),
      minHeight: () => ({
        "80": "20rem",
      }),
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        palette: {
          lighter: "#F5F3FF",
          light: "#DDD6FE",
          primary: "#5B21B6",
          dark: "#4C1D95",
        },
      },
      fontFamily: {
        primary: ['"Josefin Sans"'],
      },
    },
  },
  plugins: [
    forms({
      strategy: "class",
    }),
  ],
} satisfies Config;
