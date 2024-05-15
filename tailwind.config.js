/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gap: {
        'flex': '2rem', // Adjust the gap size as needed
      },
    },
  },
  plugins: [],
}