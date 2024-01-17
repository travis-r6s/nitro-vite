import process from 'node:process'
import type { ViteDevServer } from 'vite'

export default defineNitroPlugin(async (nitroApp) => {
  if (process.env.NODE_ENV === 'production')
    return

  const { createServer } = await import('vite')
  console.log('Starting Vite dev server')

  const vite = await createServer()

  await vite.listen()
  vite.printUrls()

  nitroApp.hooks.hook('request', (event) => {
    event.context.vite = vite
  })
})

declare module 'h3' {
  interface H3EventContext {
    vite?: ViteDevServer
  }
}
