// https://nitro.unjs.io/config
export default defineNitroConfig({
  renderer: './renderer.ts',
  publicAssets: [
    {
      dir: 'dist',
    },
  ],
  serverAssets: [
    {
      baseName: 'vite',
      dir: './dist/.vite',
    },
  ],
  azure: {
    config: {
      platform: {
        apiRuntime: 'node:18'
      }
    }
  }
})
