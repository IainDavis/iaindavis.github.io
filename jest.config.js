module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',  // For TypeScript files
        '^.+\\.mdx?$': '@mdx-js/jest',  // For MDX files
        '^.+\\.jsx?$': 'babel-jest'  // For JSX files if needed
      },
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
      setupFilesAfterEnv: ['@testing-library/jest-dom'],
      testPathIgnorePatterns: ['/node_modules/', '/build/', '/.docusaurus/']
}