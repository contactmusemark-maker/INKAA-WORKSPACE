import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: { extend: { colors: { inkaa: { bg: '#F3F3F1', bgSoft: '#FAFAFA', sidebar: '#050505', red: '#E53935', redDark: '#C71414', redAccent: '#FF453A', lavender: '#DCD2FF', panel: '#FCFCFC', panelSoft: '#F8F8F8', border: '#ECECEC', text: '#161616', muted: '#777777', muted2: '#999999', success: '#00C853', warning: '#FFB300' } }, borderRadius: { xl2: '28px', xl3: '42px' }, boxShadow: { glow: '0 10px 40px rgba(229,57,53,.18)', soft: '0 12px 30px rgba(17,17,17,0.05)' } } },
  plugins: []
};
export default config;
