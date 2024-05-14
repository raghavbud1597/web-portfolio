/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        'ball': 'animateBall 4s ease-in-out infinite',
        'bowl': 'animateBowl 4s ease-in-out infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
      keyframes: {
        animateBall: {
          '0%': { transform: 'translateY(-100%) translatex(-30px)'},
          '50%': { transform: 'translateY(-100%) translatex(220px)' },
          '100%': { transform: 'translateY(-100%) translatex(-30px)' },
        },
        animateBowl: {
          '0%': { transform: 'rotate(50deg)' },
          '50%': { transform: 'rotate(-50deg)' }, 
          '100%': { transform: 'rotate(50deg)' },
        },
      },
    },
  },
  plugins: [
  ],
}