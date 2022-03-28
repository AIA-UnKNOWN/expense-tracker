module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
        "alias": {
          "@common": "./src/common",
          "@screens": "./src/screens"
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
