/** @type {import('tailwindcss').Config} */

const plugins = [];

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ['./src/index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      keyframes: {
      },
      animation: {
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: plugins,
  purge: false,
  important: true,
};
