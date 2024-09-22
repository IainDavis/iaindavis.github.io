import { defineConfig, UserConfig, UserConfigExport, UserConfigFn } from 'vitest/config';
import react from '@vitejs/plugin-react'

const config = defineConfig(async (): Promise<UserConfig> => {
    const {default: mdx} = await import('@mdx-js/rollup');

    return ({
        plugins: [
            react(),
            mdx(),
        ],
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './vitest.setup.ts',
            include: ['src/**/*.{test,spec}.{ts,tsx,js,jsx}'],
            reporters: [
                'default',
                [ 'junit', { outputFile: 'static/reports/test-results.xml', } ]
            ],
            coverage: {
                provider: 'istanbul',
                reporter: ['html', 'text', 'lcov'],
                reportsDirectory: 'static/reports/coverage',
                all: true,
                thresholds: {
                    statements: 90,
                    branches: 90,
                    functions: 80,
                    lines: 80,
                },
                exclude: [
                    "build", 
                    "static",
                    ".*",   // no dot-files

                    // typescript and javascript files in the root directory tend to be config files
                    "*.ts",
                    "*.js", 

                    // I think I want to avoid testing all the markdown files. May revisit later
                    // May just do snapshot tests on the rendered content later so at least I can detect if something breaks unexpectedly.
                    "*.mdx",
                    "*.md",
                    "**/*.test.*",
                    "**/*.spec.*",
                    "**/*.stories.*"
                ]
            }
        }
    })
})

export default config;
