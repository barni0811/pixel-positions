/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
        fontFamily: {
            "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
        },
        fontSize: {
            "2xs": "0.625rem",
        },
    },
  },
  plugins: [],
}
