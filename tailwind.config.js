/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        gray900: "#111827",
        gray800: "#1f2937",
        gray400: "#9ca3af",
        gray200: "#e5e7eb",
        gray100: "#f3f4f6",
        gray50: "#f9fafb",
        secondary: "#4f46e5",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
