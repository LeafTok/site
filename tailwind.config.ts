import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Color palette from existing design
      colors: {
        primary: {
          DEFAULT: '#2DD29F',
          dark: '#26bd8a',
          light: '#5de8bc',
          glow: 'rgba(45, 210, 159, 0.4)',
        },
        accent: {
          DEFAULT: '#D36462',
          light: '#e88886',
        },
        dark: {
          DEFAULT: '#0a0b0f',
          100: '#13141E',
          200: '#1a1c28',
          300: '#252836',
          400: '#363a4d',
        },
        light: {
          DEFAULT: '#f8f9fc',
          200: '#e8eaf0',
        },
        text: {
          primary: '#ffffff',
          secondary: 'rgba(255, 255, 255, 0.7)',
          muted: 'rgba(255, 255, 255, 0.5)',
        },
      },
      // Typography from existing design
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      // Animation keyframes
      keyframes: {
        bgPulse: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        leafFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        bgPulse: 'bgPulse 15s ease-in-out infinite alternate',
        leafFloat: 'leafFloat 20s ease-in-out infinite',
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        slideUp: 'slideUp 0.8s ease-out forwards',
      },
      // Spacing and sizing
      maxWidth: {
        container: '1400px',
      },
      // Border radius
      borderRadius: {
        leaf: '0 70% 70% 70%',
      },
      // Backdrop blur
      backdropBlur: {
        nav: '20px',
      },
    },
  },
  plugins: [],
};

export default config;
