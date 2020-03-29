// webpack.config.js

module.exports = {
  rules: [
    {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        {
          loader: 'css-loader',
          options: {
            // enable CSS Modules
            modules: true,
            // customize generated class names
            localIdentName: '[local]_[hash:base64:8]'
          }
        }
      ]
    },
    {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          // Requires sass-loader@^7.0.0
          options: {
            implementation: require('sass'),
            fiber: require('fibers'),
            indentedSyntax: true // optional
          },
          // Requires sass-loader@^8.0.0
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: require('fibers'),
              indentedSyntax: true // optional
            },
          },
        },
      ],
    },
  ],