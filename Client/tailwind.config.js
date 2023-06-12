/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      objectFit: {
        'contain': 'contain',
        'cover': 'cover',
        'fill': 'fill',
        'none': 'none',
        'scale-down': 'scale-down',
      },
    },
  },
  plugins: [],
}
