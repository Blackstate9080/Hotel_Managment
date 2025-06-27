/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(200px, -200px) scale(1.5)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-200px, 150px) scale(1.6)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(180px, 180px) scale(1.4)' },
        },
      },
      animation: {
        blob1: 'blob1 3s ease-in-out infinite',
        blob2: 'blob2 4s ease-in-out infinite',
        blob3: 'blob3 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}