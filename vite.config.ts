import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(async () => {
    const {default: mdx} = await import('@mdx-js/rollup')

    return ({
        plugins: [
            react(),
            mdx(),
        ],
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './vitest.setup.ts',
            include: ['src/**/*.{test,spec}.{ts,tsx,js,jsx}']
        }
    });
})
