/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"PT Serif"', 'serif'],
        body: ['"Edu QLD Hand"', 'cursive'],
      },
    },
  },
  plugins: [],
};
