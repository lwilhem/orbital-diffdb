import antfu from "@antfu/eslint-config"

export default antfu({
  formatters: true,
  svelte: true,
  pnpm: true,

  stylistic: {
    quotes: "double",
  },
})
