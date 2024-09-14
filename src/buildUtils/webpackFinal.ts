const path = require('path');

const webpackFinal = async (config) => {

    const { resolve = {}, module = {},  } = config;
    resolve.alias = {
      ...config.resolve?.alias,
    }

    resolve.extensions = [
      ...config.resolve?.extensions!,
      '.ts', '.tsx'
    ]

    module.rules = [
      ...config.module?.rules!,
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: ['@babel/plugin-transform-react-jsx'],
            },
          },
        ],
      }
    ]

    const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg')
      );
      if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/;
      }
  
      // Add your own rule for handling SVG files with SVGR
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
        ],
      });
  
      return { ...config, module, resolve};

}

export default webpackFinal