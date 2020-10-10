const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  // assetPrefix: './',
  // dynamicAssetPrefix: true,
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

    config.resolve.alias = {
      ...config.resolve.alias,
      '@common': path.resolve(__dirname, 'src', 'common'),
      '@images': path.resolve(__dirname, 'public', 'images'),
      '@components': path.resolve(__dirname, 'src', 'components'),
    };

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ];

    return config;
  },
});
