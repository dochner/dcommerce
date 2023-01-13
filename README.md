# Dcommerce - Ecommerce Vue Application

That's a simple ecommerce application built by [me](https://github.com/dochner), using vue3, vite and the last technologies.

-----

- [Dcommerce - Ecommerce Vue Application](#dcommerce---ecommerce-vue-application)
  - [Technologies](#technologies)
  - [UI](#ui)
  - [Icons](#icons)
  - [Plugins](#plugins)
  - [Development rules](#development-rules)
  - [Dev tools](#dev-tools)
  - [Project usage](#project-usage)
  - [Download/Clone Project](#downloadclone-project)
  - [Installing dependencies](#installing-dependencies)
  - [Development](#development)
  - [Production](#production)

-----

## Technologies

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild)
- 🗂 [File based page routing](./src/pages)
- 📦 [Components auto import](./src/components)
- 📑 [Layout system for pages](./src/layouts)
- 🗒 [Markdown`.md` files support](https://github.com/antfu/vite-plugin-md)
- 📥 [Api's auto import](https://github.com/antfu/unplugin-auto-import)

## UI

- 🍃 [UnoCSS - atomic design css utilities](https://windicss.org/)

## Icons

- [Iconify](https://iconify.design) - uses any icons set `mdi, carbon...` avaliable at [🔍Icônes](https://icones.netlify.app/)

## Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file based page routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layout system for pages
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - Components auto-import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Enable auto-import for composition api, and plugins like `vue, vue-router, vue-use...`
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md) - Markdown files as components, allow component inside Markdown
  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) For code highlight
  - [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) - Prism.js theme configured through css variables
- [VueUse](https://github.com/antfu/vueuse) - collection of many composition APIs
- [`@vueuse/head`](https://github.com/vueuse/head) - handles the head of pages reactively

## Development rules

- composition api only, of course [`<script setup>` syntaxe SFC](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semicolon.

## Dev tools

- [pnpm](https://pnpm.js.org/) - fast and disk space efficient package manager
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Launch application with vite automatically when opening VSCode
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Support for VSCode with Vue 3 `<script setup>`
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Displays the icon inline with de code, when validating the icon name
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Project usage

> Project requires Node.js >= 14.x
> Must have `pnpm` installed

## Download/Clone Project

- Clone the project to your local machine with
  - <https://github.com/dochner/dcommerce.git>
  - or [ssh://git@github.com:dochner/dcommerce.git](ssh://git@github.com:dochner/dcommerce.git) -- certificate configured required
- Or download the project [aqui](https://github.com/dochner/dcommerce/archive/refs/heads/main.zip)

## Installing dependencies

Choose your package manager (pnpm recommended**):

```bash
pnpm install
```

## Development

Choose your package manager (pnpm recommended**):

```bash
pnpm dev
```

## Production

> Use the build command to build the project and prepare it for production

```bash
pnpm build
```

> Use the preview command to preview the project before uploading to the production environment

```bash
pnpm preview
```
