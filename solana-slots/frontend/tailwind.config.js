/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define colors based on the design system
        'bg': '#0D182C',
        'bg-alt': '#15263E',
        'primary': '#00E3FF',
        'purple': '#9945FF',
        'green': '#14F195',
        'orange': '#FF8A3D',
        'yellow': '#FFC272',
      },
      fontFamily: {
        // Define typography based on the design system
        sans: ['Inter Variable', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        // Define font sizes based on 1.25 rem major-third scale (example values)
        sm: '0.8rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '1.563rem',
        '2xl': '1.953rem',
        '3xl': '2.441rem',
        '4xl': '3.052rem',
      }
    },
  },
  plugins: [],
}
