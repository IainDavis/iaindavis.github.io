import { Configuration as WebpackConfig, RuleSetRule } from 'webpack';
import { SVGR_RULE } from './webpackRules';
import { compose, excludeSVGFromFileRule, prependSVGRRule } from './webpackTransforms';

const webpackFinal = (config: WebpackConfig): WebpackConfig => {
  const { module = {} } = config;
  const { rules } = module;

  const transformRules = compose(
    // order matters -- if we prepend the rule first, the 'exclude' rule will exclude it as well.
    excludeSVGFromFileRule,
    prependSVGRRule 
  )

  return {
    ...config,
    module: {
      ...module,
      rules: transformRules(rules)
    },
  };
};

export default webpackFinal;