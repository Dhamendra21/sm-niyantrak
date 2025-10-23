import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
 
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#11b4d4",
        "background-light": "#f6f8f8",
        "background-dark": "#101f22",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
 
  plugins: [
    tailwindcss(),
  ],

})