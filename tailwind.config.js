const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes:{
        change1:{
          '0%':{opacity:1},
          '100%':{opacity:0,transform:'translate(0px,-32px)'},
        },
        change2:{
          '0%':{opacity:0,transform:'translate(0px,-32px)'},
          '100%':{opacity:1,transform:'translate(0px,0px)'}
        },
        move1:{
          '0%':{},
          '100%':{transform:'translate(5px,0px)'}
        },
        move2:{
          '0%':{tranform:'translate(5px,0px)'},
          '100%':{tranform:'translate(0px,0px)'}
        }
      },
      animation:{
        change1:'change1 1s ease-in-out infinite',
        change2:'change2 1s ease-in-out infinite',
        move1:'move1 0.5s ease-in-out forwards',
        move2:'move2 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
};
