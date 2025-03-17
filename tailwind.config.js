/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensuring Tailwind scans your components
  ],
  theme: {
    extend: {
      fontSize: {
        10: ["10px"],
      },
    },
  },
  plugins: [],
};
