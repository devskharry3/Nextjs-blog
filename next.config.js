const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
  });
  
  module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    webpack(config, options) {
      return config;
    },
  });
  