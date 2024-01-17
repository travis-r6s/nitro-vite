
export default defineEventHandler(async (ctx) => {
  console.log('handle render!', ctx.path)

  // So this should handle choosing the right HTML page to serve, and interpolate our asset URL's

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>

  <script type="module">
    import RefreshRuntime from 'http://localhost:5173/@react-refresh'
    RefreshRuntime.injectIntoGlobalHook( window )
    window.$RefreshReg$ = () => { }
    window.$RefreshSig$ = () => ( type ) => type
    window.__vite_plugin_react_preamble_installed__ = true
  </script>

  <!-- if development -->
  <script type="module" src="http://localhost:5173/@vite/client"></script>
  <script type="module" src="http://localhost:5173/app/main.tsx"></script>

</body>
</html>
`
})
