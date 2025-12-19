/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#8B7BD8", // lavanda suave
          DEFAULT: "#6B5BAB", // púrpura cálido (confianza, espiritualidad)
          dark: "#4A3D7A", // púrpura profundo
        },
        secondary: {
          light: "#93C5C7", // aqua claro
          DEFAULT: "#5FA8AA", // verde azulado suave (calma, serenidad)
          dark: "#3D7A7C", // turquesa oscuro
        },
        accent: "#E8B298", // coral suave (calidez, empatía)
        background: "#F9F7F4", // beige muy claro
        surface: "#FFFFFF", // blanco puro
        textPrimary: "#2C2640", // púrpura muy oscuro
        textSecondary: "#5E5970", // gris violáceo
        border: "#E5DFD9", // beige claro
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
