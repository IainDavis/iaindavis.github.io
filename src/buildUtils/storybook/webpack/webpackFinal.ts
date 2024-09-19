import { Configuration as WebpackConfig } from 'webpack';
import { excludeSVGFromFileRule, loadSVGwithSVGR, loadModulesWithBabel } from './webpackTransforms';
import { compose } from './helpers';

const webpackFinal = (config: WebpackConfig): WebpackConfig => {
  console.log('BING! (webpackFinal');
  const { module = {} } = config;
  const { rules } = module;

  console.log(loadModulesWithBabel);

  const transformRules = compose(
    loadModulesWithBabel,
    // order matters -- if we prepend the exclude rule before the SVGR
    // rule, the 'exclude' rule will exclude the SVGR rule.
    excludeSVGFromFileRule,
    loadSVGwithSVGR 
  )

  return {
    ...config,
    module: {
      ...module,
      rules: [
        ...transformRules(rules),
      ]
    },
  };
};

export default webpackFinal;