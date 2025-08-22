/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'primary':'white',
      spacing: {
        '1/2-minus': 'calc(50% - 5px)',
        '1/3-minus': 'calc(33.3333% - 5px)',
        '1/4-minus': 'calc(25% - 5px)',
        '1/5-minus': 'calc(20% - 5px)',
      },
    },
  },
  plugins: [],
}

