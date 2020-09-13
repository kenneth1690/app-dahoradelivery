module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@contexts': './src/contexts',
          '@screens': './src/screens',
          '@components': './src/components',
          '@services': './src/services',
          '@assets': './src/assets',
          '@libs': './src/libs',
        },
      },
    ],
    'jest-hoist',
  ],
};
