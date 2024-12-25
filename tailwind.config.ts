import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import type { CSSRuleObject } from "tailwindcss/types/config";

const scrollbarPlugin = plugin(function ({ addUtilities }) {
  const scrollbarUtilities: { [key: string]: CSSRuleObject } = {
    ".scrollbar": {
      "&::-webkit-scrollbar": {
        backgroundColor: "transparent",
        height: "10px",
        width: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "red",
      },
    },
    ".text-stroke": {
      "-webkit-text-stroke": "2px black",
    },
    ".SliderAlphabet": {
      "&::-webkit-scrollbar": {
        backgroundColor: "transparent",
      },
    },
  };

  // Add the custom scrollbar utilities
  addUtilities(scrollbarUtilities);
});

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Gilroy_R: ["var(--Gilroy-R)", "sans-serif"],
        gilroy_M: ["var(--Gilroy-M)", "sans-serif"], // Reference the font name from @font-face
        monument: ["var(--Monument)", "sans-serif"],
        monument_R: ["var(--monumentRegular)", "sans-serif"], // Reference the font name from @font-face
      },
      keyframes: {
        rotate: {
          from: {
            left: "0%",
          },
          to: {
            right: "100%",
          },
        },
        slider: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(-100% - 24px))" },
        },
        slider1: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(calc(-100% - 44px))" },
        },
        Toggle: {
          "0": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        nope: "rotate ",
        slider: "slider 10s linear infinite",
        slider1: "slider1 10s linear infinite",
        Toggle: "Toggle 2s linear ",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [scrollbarPlugin],
} satisfies Config;
