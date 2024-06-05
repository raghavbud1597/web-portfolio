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
      boxShadow: {
        'neu-outer': 'inset 5px 5px 5px rgba(0,0,0,0.05), inset -5px -5px 5px rgba(255,255,255,0.5), 5px 5px 5px rgba(0,0,0,0.05), -5px -5px 5px rgba(255,255,255,0.5) ',
        'neu-inner': '0 10px 20px rgba(0,0,0,0.1)',
        'neu-hover': '0 10px 40px rgba(0,0,0,0.4)',
        'neu-inner-dark': '0 10px 20px rgba(255,255,255,0.1)',
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