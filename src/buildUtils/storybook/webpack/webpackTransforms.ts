import type { RuleSetRule } from "webpack";
import type { MaybeRuleSetRule, Transform } from "./types";

import { SVGR_RULE } from "./webpackRules";

// Helper function to check if an item is a RuleSetRule
const isRuleSetRule = (rule: MaybeRuleSetRule): rule is RuleSetRule => {
  return typeof rule === 'object';
};

// helper function to make transforms readable.
export const compose = <T>(...funcs: Transform<T>[]): Transform<T> => (input: T): T => funcs.reduce((value, fn) => fn(value), input)

export const prependSVGRRule: Transform<MaybeRuleSetRule[]> = (rules) => {
  return [SVGR_RULE, ...rules] ;
}

export const excludeSVGFromFileRule: Transform<MaybeRuleSetRule[]> = (rules) => {

  const fileLoaderRule = rules?.find((rule) =>
    isRuleSetRule(rule) && rule.test instanceof RegExp && rule.test.test('.svg')
  );

  if (fileLoaderRule && isRuleSetRule(fileLoaderRule)) {
    fileLoaderRule.exclude = /\.svg$/;
  }

  return rules
}