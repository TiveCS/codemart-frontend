/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'recandy-blue-900': '#1742B7',
        'recandy-blue-800': '#1262D6',
        'recandy-blue-700': '#0C74E9',
        'recandy-blue-600': '#0087FD',
        'recandy-blue-500': '#0095FF',
        'recandy-blue-400': '#2EA5FF',
        'recandy-blue-300': '#5AB5FF',
        'recandy-blue-200': '#8CCAFF',
        'recandy-blue-100': '#BADEFF',
        'recandy-blue-50': '#E2F2FF',

        'recandy-white-0': '#FFFFFF',
        'recandy-white-50': '#FAFAFA',
        'recandy-white-100': '#F5F5F5',
        'recandy-white-200': '#F0F0F0',
        'recandy-white-300': '#EBEBEB',

        'recandy-black-900': '#050D24',
        'recandy-black-800': '#07153B',
        'recandy-black-700': '#0A1D52',
        'recandy-black-600': '#0D2668',
        'recandy-black-500': '#102E7F',
        'recandy-black-400': '#133696',

        'recanndy-gray-900': '#696969',
        'recanndy-gray-800': '#757575',
        'recanndy-gray-700': '#828282',
        'recanndy-gray-600': '#8F8F8F',
        'recanndy-gray-500': '#9C9C9C',
        'recanndy-gray-400': '#A8A8A8',
        'recanndy-gray-300': '#B5B5B5',
        'recanndy-gray-200': '#C2C2C2',
        'recanndy-gray-100': '#CFCFCF',
        'recanndy-gray-50': '#DBDBDB',
      },
    },
  },
  plugins: [],
};
