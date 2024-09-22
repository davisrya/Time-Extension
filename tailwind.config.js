/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        paytone: "'Paytone One', sans-serif",
        abril: "'Abril Fatface', serif",
        acme: "'Acme', sans-serif"
      }
    },
  },
  plugins: [],
}

