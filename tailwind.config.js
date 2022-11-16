/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: { 
        'Darkblue': '#010E29', 
        'Lightblue':'#006FFF', 
        'Darkgray':'#1A2439D9', 
        'Lightgray':'#2E384A', 
        'Darkgraytoggle':'#f0f0f0f5', 
        'Lightgraytoggle':'#F7F7F7', 
        'divideGray':'#1A2940' 
      },
      fontFamily: {
        'Hurmebold':["Hurmebold",'sans-serif'],
        'Hurmethin':["hurmethin",'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio')
  ],
  variants: {
    scrollbar: ['rounded'],
  },
}