/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      'center': true,
      // 'width': '1280px',
      // 'padding': '2rem',
    },
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'mdl': '992px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      barlow: ['Barlow',' sans-serif'],
      input : [ 'input', 'Courier New',],
    },
    colors: {
      'blue-1': '#1911EB',
      'blue-2': '#0e50f5',
      'blue-3': '#005290',
      'blue-4': '#6699cc',
      'blue-5': '#6aaae4',
      'dark': '#090422',
      'dark-1': '#000000',
      'dark-shawdo': '#565656',
      'dark-shawdo-sm': '#465968',
      'dark-shawdo-md': '#3a364e',
      'dark-blue': '#1d1834',
      'mixed-blue-1': '#22d7ff',
      'mixed-blue-2': '#35c88a',
      'mixed-blue-3': '#3860be',
      'mixed-blue-4': '#e0f4ff',
      'mixed-blue-5': '#e3e7f7',
      'mixed-blue-6': '#ebeef7',
      'pink': '#f905c8',
      'orange': '#ff4e21',
    },
  },
  plugins: [],
}