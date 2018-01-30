module.exports = {
  plugins: {
    'autoprefixer': {
      flexbox: ['no-2009']
    },
    'postcss-assets': {
      loadPaths: ['images/']
    },
    'postcss-normalize': {
      forceImport: true
    }
  }
}
