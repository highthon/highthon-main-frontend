const withSass = require('@zeit/next-sass');
const webpackNotifyPlugin = require('webpack-notifier');

module.exports = withSass({
  webpack(config, options) {
    const additionalPlugins = [
      new webpackNotifyPlugin({
        title: '하이톤 인트라넷 메인 페이지',
      }),
    ];

    config.plugins = config.plugins.concat(additionalPlugins);

    return config;
  }
});