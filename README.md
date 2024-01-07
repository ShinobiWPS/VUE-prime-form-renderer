# VuePrime form renderer

etc..

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
- (⚠️NOT TESTED) GitHub workflows
  - Renovatebot for keeping up with dependencies
  - Automated unit + component tests
  - Automated e2e tests
  - Coverage reporting in PR comments
