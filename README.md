# PrimeVue form renderer

## TO-DO

- Make async request to get the form schema
- List in the readme the location of the files and the structure of the files you created.
- "I could have used Yup if rules were in the schema"

## Setup

- `pnpm i`

## Test Scripts

- `"test": "vitest"`: This script runs the tests using Vitest, a modern JavaScript testing framework.

- `"coverage": "vitest run --coverage"`: This script runs the tests and generates a coverage report. The `--coverage` flag tells Vitest to measure how much of your code is covered by the tests.

- `"test-e2e": "playwright test --headed"`: This script runs end-to-end tests using Playwright. The `--headed` flag makes the browser visible during the tests.

- `"test:ci": "vitest run --coverage"`: This script is used in continuous integration environments. It runs the tests and generates a coverage report, just like the `coverage` script.

- `"test:ci-e2e": "playwright test"`: This script is used in continuous integration environments for running end-to-end tests. Unlike the `test-e2e` script, the browser is not visible during the tests.

## Features

- Vue 3
- Pinia store
- Routing using [vue-router](https://router.vuejs.org/)
- TypeScript
- Automatic package and component imports with [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) and [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- PostCSS w/ `postcss-nesting` plugin and `cssnano` for minimizing production CSS
- Eslint
- Prettier
- Alias `@` to `<project_root>/src`
- Predefined and fully typed global variables:
  - `VITE_APP_VERSION` is read from `package.json` version at build time
  - `VITE_APP_BUILD_EPOCH` is populated as `new Date().getTime()` at build time
- Vitest unit + component tests with code coverage
