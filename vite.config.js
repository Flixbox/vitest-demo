// Configure Vitest (https://vitest.dev/config)

import { defineConfig } from 'vite';

export default defineConfig({
  environment: 'happy-dom',
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // global: true,
  },
});
