/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-18s": "loop 18s linear infinite",
        "loop-22s": "loop 22s linear infinite",
        "loop-25s": "loop 25s linear infinite",

        "loop-60s": "loop 60s linear infinite",
        "loop-50s": "loop 50s linear infinite",
        "spin-slow": "spin 5s linear infinite"
      },

      keyframes: {
        loop: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - var(--gap)/2))" },
        },
      }
    },
  },
  plugins: [],
}