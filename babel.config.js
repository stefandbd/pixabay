module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./'],
        // Make sure the alias list below correlates to
        // tsconfig.json -> compilerOptions -> paths
        alias: {
          $httpclient: './src/httpclient',
          $modules: './src/modules',
          $assets: './src/assets',
          $components: './src/components',
          $themes: './src/themes',
          $translations: './src/translations',
          $utils: './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
