import { RuleSetRule } from "webpack";
import { MaybeRuleSetRule } from "./types";

export const SVGR_RULE: RuleSetRule = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
      },
    ],
} as const;
