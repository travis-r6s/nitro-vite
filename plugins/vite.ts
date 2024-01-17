import {createServer} from 'vite'

export default defineNitroPlugin(async () => {
  console.log('Starting Vite dev server')

  const vite = await createServer()

  await vite.listen()
  vite.printUrls()
})
