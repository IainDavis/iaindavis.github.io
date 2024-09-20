import type { RuleSetRule } from "webpack";
import type { MaybeRuleSetRule, Transform, TransformFactory } from "./types";

import { SVGR_RULE, USE_BABEL_RULE } from "./webpackRules";
import { isRuleSetRule } from "./helpers";


export const prependRule: TransformFactory<RuleSetRule, RuleSetRule[]> = (rule) =>  (rules) => [ rule, ...rules];
export const appendRule: TransformFactory<RuleSetRule, RuleSetRule[]> = (rule) =>  (rules) => [...rules, rule];

export const loadSVGwithSVGR = prependRule(SVGR_RULE);
export const loadModulesWithBabel = appendRule(USE_BABEL_RULE);

export const excludeSVGFromFileRule: Transform<MaybeRuleSetRule[]> = (rules) => {

  const fileLoaderRule = rules?.find((rule) =>
    isRuleSetRule(rule) && rule.test instanceof RegExp && rule.test.test('.svg')
  );

  if (fileLoaderRule && isRuleSetRule(fileLoaderRule)) {
    fileLoaderRule.exclude = /\.svg$/;
  }

  return rules
}