/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '\\.(css|less|scss|sass)': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|png)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.svg$': '@svgr/webpack'
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.config.js' }],
    ".+\\.module\\.(css|scss)$": 'jest-css-modules-transform'
  },
  testPathIgnorePatterns: [
    '/node_modules/(?!(react))',
  ]
};