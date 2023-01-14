import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import Previewer from 'virtual:vue-component-preview'
import type { RouterScrollBehavior } from 'vue-router'
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

if (import.meta.env.DEV)
  // eslint-disable-next-line no-console
  console.log(routes)

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return {
      el: decodeURIComponent(to.hash),
      top: 120,
      behavior: 'smooth',
    }
  }
  else {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition)
          resolve(savedPosition)
        else
          resolve({ left: 0, top: 0 })
      }, 300)
    })
  }
}

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL, scrollBehavior },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    ctx.app.use(Previewer)
  },
)
