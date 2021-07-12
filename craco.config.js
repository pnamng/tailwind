module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    resolve: {
      extensions: ['.js', '.json', '.ts', '.tsx'],
    },
  },
};
