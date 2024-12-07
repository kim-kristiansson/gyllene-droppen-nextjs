import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBrown: '#4E342E',
        beige: '#F5F5DC',
        gold: '#D4AF37',
        slateBlue: '#617987',
        softGray: '#E0E0E0',
      },
    },
  },
  plugins: [],
} satisfies Config;
