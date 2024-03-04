/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "special": "2150px",
        "pro": "1024px"
      }
    },
    fontFamily: {
      subscription: ["Urbanist", "sans-serif"],
    },
    animations: {
      'animate-spin': 'animation: spin 1s linear infinite',
      'animate-ping': 'animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      'animate-bounce': 'animation: bounceX 1s infinite'
      
    }
  },
  plugins: [],
}

