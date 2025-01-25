/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#358683',
        'white': '#F2F2F2',
        'black': '#000000'
      },
      backgroundColor: {
        'primary': '#232325',
        'secondary': '#358683',
        'white': '#F2F2F2',
        'black': '#000000'
      }
    },
  },
  plugins: [],
};
