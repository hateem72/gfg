/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'gfg-green': '#0F9D58',
        'gfg-dark-green': '#0D7A47',
        'gfg-blue': '#4285F4',
        'gfg-dark-blue': '#1A73E8',
        'gfg-yellow': '#F4B400',
        'gfg-dark-yellow': '#E37400',
        'gfg-black': '#1A1A1A',
        'gfg-gray': '#2D2D2D',
        'gfg-light-gray': '#F8F9FA',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'fira-code': ['Fira Code', 'monospace'],
        'impact': ['Impact', 'Arial Black', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Lora', 'serif'],
      },
      backgroundImage: {
        "gfg-gradient": "linear-gradient(135deg, #0F9D58, #4285F4)",
        "dark-gradient": "linear-gradient(135deg, #1A1A1A, #2D2D2D)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(15, 157, 88, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(15, 157, 88, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}