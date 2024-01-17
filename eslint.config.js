// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  ignores: ['.nitro', 'dist', 'build', 'node_modules'],
  rules: {
    'no-console': 'off'
  }
})
