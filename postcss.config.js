module.exports = {
  plugins: {
    autoprefixer: {},
    // 'postcss-px-to-viewport': {
    //   viewportWidth: 375,
    //   viewportHeight: 667,
    //   unitPrecision: 3,
    //   viewportUnit: 'vw',
    //   selectrolbackList: ['.ignore', '.hairlines'],
    //   minPixelValue: 1,
    //   mediaQuery: false,
    // },
    'postcss-pxtorem': {
      rootValue: 32,
      selectorBlackList: ['weui', 'mu'],
      propList: ['*'],
    },
  },
}
