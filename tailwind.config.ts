import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '35ch' }
        },
        blink: {
          '50%': { borderColor: 'transparent' }
        },
        cursor: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#FD7014' }
        },
      },
      animation: {
        typing: 'typing 2s steps(25, end), blink .5s step-end infinite alternate',
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
