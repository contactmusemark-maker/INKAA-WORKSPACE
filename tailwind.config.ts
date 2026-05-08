import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        inkaa: {
          bg: '#F3F3F1', panel: '#FCFCFC', panelSoft: '#F8F8F8',
          sidebar: '#050505', red: '#E53935', redDark: '#C71414', redBright: '#FF453A',
          lavender: '#DCD2FF', border: '#ECECEC', text: '#161616', muted: '#777777', muted2: '#999999',
          success: '#00C853', warning: '#FFB300'
        }
      },
      borderRadius: { luxe: '32px', xl2: '28px' },
      boxShadow: {
        soft: '0 12px 40px rgba(0,0,0,0.06)',
        glow: '0 0 40px rgba(229,57,53,0.25)'
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }
    }
  },
  plugins: []
};

export default config;
