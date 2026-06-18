import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3D7A5F',
          dark: '#2E5E49',
          light: '#5A9E7E',
          muted: '#3D7A5F1A',
        },
        accent: {
          DEFAULT: '#C4654A',
          light: '#D98A74',
        },
        ink: {
          DEFAULT: '#1A1612',
          light: '#2C2620',
          secondary: '#5C5347',
          muted: '#5C5347',
          faint: '#8A7E72',
        },
        paper: {
          DEFAULT: '#FAF6F0',
          warm: '#F5EDE2',
          cream: '#EDE4D6',
          dark: '#E8DFD0',
        },
        text: {
          primary: '#1A1612',
          secondary: '#5C5347',
          muted: '#8A7E72',
          inverse: '#FAF6F0',
        },
        dark: {
          DEFAULT: '#1A1612',
          100: '#F5EDE2',
          200: '#EDE4D6',
          300: '#E8DFD0',
          400: '#5C5347',
        },
        light: {
          DEFAULT: '#FAF6F0',
          200: '#F5EDE2',
        },
      },
      fontFamily: {
        serif: ['Literata', 'Georgia', 'serif'],
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideUp: 'slideUp 0.8s ease-out forwards',
        fadeInScale: 'fadeInScale 0.5s ease-out forwards',
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        leaf: '0 70% 70% 70%',
      },
    },
  },
  plugins: [],
};

export default config;
