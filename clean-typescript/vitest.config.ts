import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Vitest configuration options
    globals: true, // Use global APIs (describe, it, expect, etc.)
    environment: 'node', // Specify the test environment (e.g., node, jsdom)
    // reporters: ['verbose'], // Example of using a specific reporter
    coverage: {
      provider: 'v8', // or 'istanbul'
      reporter: ['text', 'json', 'html'],
    },
  },
});
