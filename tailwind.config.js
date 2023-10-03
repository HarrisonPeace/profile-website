/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        'out-quad': 'cubic-bezier(0.5, 1, 0.89, 1)'
      },
      colors: {
        dark: '#000000',
        light: '#FFFFFF'
      },
      screens: {
        '3xl': '2000px'
      },
      fontSize: {
        'heading-xs': [
          '1rem',
          {
            lineHeight: '1rem'
          }
        ],
        'heading-sm': [
          '1.5rem',
          {
            lineHeight: '1.5rem'
          }
        ],
        'heading-lg': [
          '3rem',
          {
            lineHeight: '3rem'
          }
        ],
        'body-sm': [
          '1rem',
          {
            lineHeight: '1.2rem'
          }
        ],
        body: [
          '1.5rem',
          {
            lineHeight: '1.875rem'
          }
        ]
      },
      fontFamily: {
        rubik: ['Rubik Mono One', 'sans-serif'],
        space: ['Space Mono', 'monospace']
      }
    }
  },
  plugins: []
}
