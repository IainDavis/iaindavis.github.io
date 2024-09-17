/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '\\.(css|less|scss|sass)': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|png)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.svg$': '@svgr/webpack'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
    ".+\\.module\\.(css|scss)$": 'jest-css-modules-transform'
  },
  testPathIgnorePatterns: [
    '/node_modules/(?!())',
  ]
};