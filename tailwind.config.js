/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        cream: '#F8F5F0',
        sage: {
          50: '#F0F4F1',
          100: '#E1E9E3',
          200: '#C2D3C7',
          300: '#A3BDAB',
          400: '#85A78F',
          500: '#669173',
          600: '#52745C',
          700: '#3F5745',
          800: '#2B3B2F',
          900: '#181E18',
        },
        terracotta: {
          DEFAULT: '#CC7755',
          dark: '#BB5533',
        },
        taupe: {
          50: '#F5F3F2',
          100: '#EBE7E4',
          200: '#D7CFC9',
          300: '#C3B7AE',
          400: '#AF9F93',
          500: '#9B8778',
          600: '#7C6C60',
          700: '#5D5148',
          800: '#3E3630',
          900: '#1F1B18',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};