import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background:        '#0A0A0A',
        surface:           '#111111',
        'surface-2':       '#1A1A1A',
        'surface-3':       '#222222',
        border:            '#262626',
        'border-subtle':   '#1C1C1C',
        foreground:        '#F8F7F4',
        'foreground-muted': '#898989',
        'foreground-subtle': '#444444',
        accent:            '#C8392B',
        'accent-hover':    '#A12E23',
        'accent-muted':    '#8B2620',
        gold:              '#B8A78C',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'Arial Narrow', 'sans-serif'],
        sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(4.5rem, 10vw, 13rem)',  { lineHeight: '0.88', letterSpacing: '-0.01em' }],
        'display-xl':  ['clamp(3.5rem, 8vw, 10rem)',   { lineHeight: '0.90', letterSpacing: '-0.01em' }],
        'display-lg':  ['clamp(2.5rem, 5vw, 7rem)',    { lineHeight: '0.92' }],
        'display-md':  ['clamp(2rem, 3.5vw, 4.5rem)', { lineHeight: '0.95' }],
        'display-sm':  ['clamp(1.5rem, 2.5vw, 3rem)', { lineHeight: '1.0' }],
      },
      letterSpacing: {
        'ultra-wide':  '0.30em',
        'extra-wide':  '0.20em',
        label:         '0.15em',
        expanded:      '0.10em',
      },
      borderRadius: {
        DEFAULT: '0px',
        none:    '0px',
        sm:      '2px',
        md:      '2px',
        lg:      '2px',
        full:    '9999px',
      },
      animation: {
        'fade-up':    'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':    'fadeIn 0.8s ease forwards',
        'slide-left': 'slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
