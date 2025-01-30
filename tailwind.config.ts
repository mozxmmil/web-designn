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
      "-webkit-text-stroke": "2px white",
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
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}", 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  
  ],
  theme: {
    extend: {
      fontFamily: {
        Gilroy_R: ["var(--Gilroy-R)", "sans-serif"],
        gilroy_M: ["var(--Gilroy-M)", "sans-serif"],
        monument: ["var(--Monument)", "sans-serif"],
        monument_R: ["var(--monumentRegular)", "sans-serif"],
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
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(calc(-100% - 24px))",
          },
        },
        slider1: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(calc(-100% - 44px))",
          },
        },
        Toggle: {
          "0": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        sliderReverse: {
          "0%": {
            transform: "translateX(calc(-100% - 24px))",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        HowerAnimation: {
          "0%": {
            bottom: "-5%",
            
          },
          "100%": {
            bottom: "0%",
            
          },
        },
      },
      animation: {
        HowerAnimation:"HowerAnimation .3s linear ",
        nope: "rotate ",
        slider: "slider 10s linear infinite",
        slider1: "slider1 10s linear infinite",
        sliderReverse: "sliderReverse 10s linear infinite",
        Toggle: "Toggle 2s linear ",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [scrollbarPlugin, require("tailwindcss-animate")],
} satisfies Config;
