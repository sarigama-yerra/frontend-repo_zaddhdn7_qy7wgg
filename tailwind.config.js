/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        geist: ['Geist', 'system-ui', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
        mona: ['Mona Sans', 'system-ui', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        midnight: {
          900: '#0a1220',
          800: '#0f1b2e',
          700: '#13243b',
        },
        neon: {
          cyan: '#00e5ff',
          blue: '#3b82f6'
        }
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 229, 255, 0.35), 0 0 40px rgba(59, 130, 246, 0.25)'
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"300\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.03\"/></svg>')",
        'hero-gradient': 'radial-gradient(1200px 600px at 20% 10%, rgba(0,229,255,0.20), transparent 60%), radial-gradient(900px 500px at 80% 30%, rgba(59,130,246,0.20), transparent 60%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease both',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0,229,255,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(0,229,255,0)' }
        }
      },
    },
  },
  plugins: [],
}
