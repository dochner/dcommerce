import type { UserModule } from '@/types'

export const install: UserModule = ({ router }) => {
  router.beforeEach((to, from, next) => {
    const newPath = decodeURI(to.path)

    if (to.path !== newPath)
      next({ path: newPath })
    else
      next()
  })
}
