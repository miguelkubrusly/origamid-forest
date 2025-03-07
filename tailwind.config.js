/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        verde: {
          100: "#ACEF75",
          200: "#91EE77",
          300: "#17E880",
          400: "#2E482C",
          500: "#16281F",
          600: "#0f1C15",
          700: "#030504",
        },
      },
    },
  },
  plugins: [],
};
