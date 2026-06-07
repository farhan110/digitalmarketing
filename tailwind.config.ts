import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mars: {
          bg:    '#0a0612',
          bg2:   '#0f0a1a',
          bg3:   '#140e22',
          or:    '#ff6b35',
          pk:    '#f72585',
          pu:    '#7c3aed',
          cy:    '#06b6d4',
          gn:    '#10b981',
          ye:    '#fbbf24',
          tx:    '#ffffff',
          mu:    '#94a3b8',
          dm:    '#64748b',
        },
      },
      fontFamily: {
        grotesk: ['var(--font-grotesk)', 'sans-serif'],
        inter:   ['var(--font-inter)',   'sans-serif'],
      },
      animation: {
        'mars-rotate':  'marsRotate 28s linear infinite',
        'planet-float': 'planetFloat 8s ease-in-out infinite',
        'atmo-glow':    'atmoGlow 5s ease-in-out infinite alternate',
        'orbit-pulse':  'orbitPulse 7s ease-in-out infinite',
        'orbit-1':      'orbitMove1 18s linear infinite',
        'orbit-2':      'orbitMove2 22s linear infinite',
        'orbit-3':      'orbitMove3 26s linear infinite',
        'metric-float': 'metricFloat 5s ease-in-out infinite',
        'pulse-dot':    'pulseDot 2s ease-in-out infinite',
        'shine':        'shine 3s linear infinite',
        'float-a':      'floatA 12s ease-in-out infinite',
        'float-b':      'floatB 14s ease-in-out infinite',
        'marq-scroll':  'marqScroll 30s linear infinite',
        'fade-in':      'fadeIn 0.4s ease',
      },
      keyframes: {
        marsRotate:  { from:{transform:'rotate(0deg)'}, to:{transform:'rotate(360deg)'} },
        planetFloat: { '0%,100%':{transform:'translateY(0)'}, '50%':{transform:'translateY(-15px)'} },
        atmoGlow:    { from:{opacity:'.55'}, to:{opacity:'1'} },
        orbitPulse:  { '0%,100%':{opacity:'.2', transform:'translate(-50%,-50%) scale(1)'}, '50%':{opacity:'.6', transform:'translate(-50%,-50%) scale(1.02)'} },
        orbitMove1:  { from:{transform:'rotate(0deg) translateY(-145px) rotate(0deg)'}, to:{transform:'rotate(360deg) translateY(-145px) rotate(-360deg)'} },
        orbitMove2:  { from:{transform:'rotate(0deg) translateY(-160px) rotate(0deg)'}, to:{transform:'rotate(-360deg) translateY(-160px) rotate(360deg)'} },
        orbitMove3:  { from:{transform:'rotate(0deg) translateX(180px) rotate(0deg)'}, to:{transform:'rotate(360deg) translateX(180px) rotate(-360deg)'} },
        metricFloat: { '0%,100%':{transform:'translateY(0)'}, '50%':{transform:'translateY(-10px)'} },
        pulseDot:    { '0%,100%':{opacity:'1', transform:'scale(1)'}, '50%':{opacity:'.6', transform:'scale(.85)'} },
        shine:       { '0%':{transform:'translateX(-200%) rotate(45deg)'}, '100%':{transform:'translateX(200%) rotate(45deg)'} },
        floatA:      { '0%,100%':{transform:'translate(0,0)'}, '50%':{transform:'translate(20px,-15px)'} },
        floatB:      { '0%,100%':{transform:'translate(0,0)'}, '50%':{transform:'translate(-15px,20px)'} },
        marqScroll:  { from:{transform:'translateX(0)'}, to:{transform:'translateX(-50%)'} },
        fadeIn:      { from:{opacity:'0', transform:'translateY(8px)'}, to:{opacity:'1', transform:'translateY(0)'} },
      },
      backgroundImage: {
        'gr-or':    'linear-gradient(135deg,#ff6b35 0%,#f72585 50%,#7c3aed 100%)',
        'gr-cy':    'linear-gradient(135deg,#06b6d4 0%,#7c3aed 100%)',
        'gr-gn':    'linear-gradient(135deg,#10b981 0%,#06b6d4 100%)',
      },
    },
  },
  plugins: [],
}
export default config
