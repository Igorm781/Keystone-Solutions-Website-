/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#E8E4DD",
        signal: "#E63B2E",
        offwhite: "#F5F3EE",
        charcoal: "#111111",
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "sans-serif"],
        serif: ["'DM Serif Display'", "serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      boxShadow: {
        brutalist: "4px 4px 0px 0px #111111",
        "brutalist-hover": "2px 2px 0px 0px #111111",
        "brutalist-red": "4px 4px 0px 0px #E63B2E",
        "brutalist-red-hover": "2px 2px 0px 0px #E63B2E",
        "brutalist-large": "8px 8px 0px 0px #111111",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
