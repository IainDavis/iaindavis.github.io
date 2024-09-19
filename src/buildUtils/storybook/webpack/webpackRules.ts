import { RuleSetRule } from "webpack";
import babelConfig from 'babel.config';

export const SVGR_RULE: RuleSetRule = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
      },
    ],
} as const;

export const USE_BABEL_RULE: RuleSetRule = {
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: require.resolve('babel-loader'),
      options: babelConfig,
    },
  ],
}
