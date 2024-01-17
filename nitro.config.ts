// https://nitro.unjs.io/config
export default defineNitroConfig({
  renderer: './renderer.ts',
  devProxy: {
    // '**': 'http://localhost:5173'
  },
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
})
