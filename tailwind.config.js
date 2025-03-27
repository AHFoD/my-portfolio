/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF5F1F',
          light: '#FF7F50',
          dark: '#E65100',
        },
        dark: {
          DEFAULT: '#0A0A0A', // Deeper black for better contrast
          light: '#141414',   // Subtle variation for depth
          lighter: '#1A1A1A', // Subtle backgrounds
        },
        light: {
          DEFAULT: '#FFFFFF',
          dark: '#F8F8F8',
          darker: '#EEEEEE',
        }
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
