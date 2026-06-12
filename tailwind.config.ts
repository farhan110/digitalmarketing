import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        space: { 950: '#06040f', 900: '#0a0718', 800: '#120e26', 700: '#1b1538' },
        mars: { 300: '#ffb38a', 400: '#ff8a5c', 500: '#ff6b3d', 600: '#f04e23' },
        nebula: { 400: '#a78bfa', 500: '#8b5cf6' },
        ion: { 300: '#67e8f9', 400: '#22d3ee' },
      },
      fontFamily: {
        grotesk: ['var(--font-grotesk)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(255,107,61,.45)',
        'glow-sm': '0 0 24px -6px rgba(255,107,61,.4)',
        'glow-violet': '0 0 40px -8px rgba(139,92,246,.4)',
      },
    },
  },
  plugins: [],
}
export default config
