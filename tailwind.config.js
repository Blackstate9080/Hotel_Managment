/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundSize: {
          "200": "200% 200%",
        },
      
       fontFamily:{
        'cabin-sketch': ['"Cabin Sketch"', 'sans-serif'],
       },
       keyframes: {
        "text-gradient": {
          "0%, 15%": {
            "background-position": "0% 50%",
          },
          "85%, 100%": {
            "background-position": "100% 50%",
          },
        },
        
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
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
        slideUp: 'slideUp 0.8s ease-out forwards',
        slideUpDelay: 'slideUp 0.8s ease-out forwards 0.5s',
        "text-gradient": "text-gradient 2s ease-in-out infinite alternate",
      },
      safelist: [
  'opacity-0', 'opacity-100',
  'translate-y-0', 'translate-y-3',
  'transition-all', 'duration-700',
  'delay-200', 'delay-500', 'delay-700', 'delay-1000'
]

    },
  },
  plugins: [],
}