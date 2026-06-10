import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        m: {
          bg:'#0a0612', bg2:'#0f0a1a', bg3:'#140e22',
          or:'#ff6b35', pk:'#f72585', pu:'#7c3aed', cy:'#06b6d4', gn:'#10b981', ye:'#fbbf24',
          tx:'#ffffff', mu:'#94a3b8', dm:'#64748b',
        },
      },
      fontFamily: { grotesk:['var(--font-grotesk)','sans-serif'], inter:['var(--font-inter)','sans-serif'] },
    },
  },
  plugins: [],
}
export default config
