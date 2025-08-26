import { sveltekit } from "@sveltejs/kit/vite"
import tailwindcss from "@tailwindcss/vite"
import icons from "unplugin-icons/vite"
import { defineConfig } from "vite"
import devtoolsJson from "vite-plugin-devtools-json"

export default defineConfig({
  plugins: [
    devtoolsJson(),
    tailwindcss(),
    sveltekit(),
    icons({ compiler: "svelte" }),
  ],
})
