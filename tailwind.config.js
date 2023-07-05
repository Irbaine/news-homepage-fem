/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize:{
      sm: ['0.938rem', {
        letterSpacing: '0.03em',
        fontWeight: '400',
      }],
      'btn': ['0.78rem', {
        letterSpacing: '0.4em',
        lineHeight: '1.3rem',
        fontWeight: '600',
      }],
      'lg': ['1.638rem', {
        lineHeight: '0.6rem',
        fontWeight: '600',
      }],
      '5xl': ['2.53rem', {
        lineHeight: '2.4rem',
        fontWeight: '700',
      }],
      '6xl':['3.2rem',{
        lineHeight: '3.3rem',
        fontWeight: '900',
      }],
    },
    screens:{
      'sm': {'max': '900px'},
    },
    extend: {
      backgroundImage: {
      },
    },
    colors:{
      'yellow':'hsl(35, 77%, 62%)',
      'red':'hsl(5, 85%, 63%)',

      'white':'hsl(36, 100%, 99%)',
      'light-gray':' hsl(233, 8%, 79%)',
      'dark-gray':'hsl(236, 13%, 42%)',
      'vdark-blue':'hsl(240, 100%, 5%)',


    }
  },
  plugins: [],
}
