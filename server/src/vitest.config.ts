import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Enables global test functions (describe, test, expect)
    environment: 'node', // Sets up a Node.js testing environment
  },
});