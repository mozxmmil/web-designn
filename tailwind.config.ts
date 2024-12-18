import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';
import type { CSSRuleObject } from 'tailwindcss/types/config';

const scrollbarPlugin = plugin(function ({ addUtilities }) {
  const scrollbarUtilities: { [key: string]: CSSRuleObject } = {
    '.scrollbar': {
      '&::-webkit-scrollbar': {
        backgroundColor: 'transparent',
        height: '10px',
        width: '10px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'red',
      },
    },
  };

  // Add the custom scrollbar utilities
  addUtilities(scrollbarUtilities,);
});

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        rotate:{
          from:{
            left:"0%"
          },
          to :{
            right:"100%"
          }
        }
      },
      animation:{
        nope:'rotate '
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [scrollbarPlugin],
} satisfies Config;
