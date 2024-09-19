import { type Configuration as WebpackConfig } from 'webpack';

export type MaybeRuleSetRule = WebpackConfig['module']['rules'][number];
export type Transform<T> = (value: T) => T;
export type TransformFactory<ArgsType, T>  = (args: ArgsType) => Transform<T>