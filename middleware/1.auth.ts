export default eventHandler((ctx) => {
  console.log('auth middleware!')
  if (ctx.path === '/') {
    // Want to redirect?
    // setResponseStatus(ctx, 307)
    // setHeader(ctx, 'location', '/api')

    // return 'not logged in, redirecting'
  }
})
