// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu(
  {
    formatters: true,

    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    },
  },
)
  .append(nuxt())
