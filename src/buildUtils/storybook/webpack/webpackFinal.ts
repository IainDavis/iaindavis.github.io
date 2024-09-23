import { Configuration as WebpackConfig } from 'webpack';
import { excludeSVGFromFileRule, loadSVGwithSVGR, loadModulesWithBabel } from './webpackTransforms';
import { compose } from './helpers';

const webpackFinal = (config: WebpackConfig): WebpackConfig => {
  const { module = {} } = config;
  const { rules } = module;

  const transformRules = compose(
    loadModulesWithBabel,
    // order matters -- if we prepend the exclude rule before the SVGR
    // rule, the 'exclude' rule will exclude the SVGR rule.
    excludeSVGFromFileRule,
    loadSVGwithSVGR 
  )

  return {
    ...config,
    stats: 'errors-warnings',
    module: {
      ...module,
      rules: [
        ...transformRules(rules),
      ]
    },
  };
};

export default webpackFinal;