/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main/15': 'rgba(6, 11, 40, 0.15)',
      },
      colors: {
        bug: '#7bcf00',
        dark: '#5a566a',
        dragon: '#0076ff',
        electric: '#ffde00',
        fairy: '#ff76ff',
        fighting: '#ff215b',
        fire: '#ff9900',
        flying: '#89bdff',
        ghost: '#4e6aff',
        grass: '#1cd80e',
        ground: '#ff6b0d',
        ice: '#2ee4c6',
        normal: '#9fa39d',
        poison: '#f149ff',
        psychic: '#ff6c64',
        rock: '#d8bc5a',
        steel: '#23a1bd',
        water: '#14a8ff',
      },
      translate: {
        '3d': 'translate3d(0px, 0px, 0px)',
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
