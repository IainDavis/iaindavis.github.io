import { RuleSetRule } from "webpack";
import { MaybeRuleSetRule, Transform } from "./types";

// Helper function to check if an item is a RuleSetRule
export const isRuleSetRule = (rule: MaybeRuleSetRule): rule is RuleSetRule => typeof rule === 'object';

// helper function to make transforms readable.
export const compose = <T>(...funcs: Transform<T>[]): Transform<T> => (input: T): T => funcs.reduce((value, fn) => fn(value), input)