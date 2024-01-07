# VuePrime form renderer

## TO-DO

- Add route to form renderer
- Make async request to get the form schema
- Fornisci istruzioni su come avviare il progetto localmente, e se possibile, anche in staging e produzione.
  (Intendo anche solo:
  DEV
  npm run dev OR yarn run dev

PROD
npm run prod or yarn run prod)

- Elenco nel readme la posizione dei file e la struttura dei file che hai creato.
- Specifica i comandi per avviare i test sia in locale che in staging.
- clean package.json
- "i could have used Yup if rules were in the schema"

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
