/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      screens: {
        'xs': '425px',
        '375': '375px',
        'sxs': '320px',
        'lxs': '400px',
      }
    },
  },
  plugins: [],
}

