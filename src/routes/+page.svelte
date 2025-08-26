<script>
  import { Button } from "$lib"
  import { setMode } from "mode-watcher"
  import { onMount } from "svelte"

  onMount(() => {
    setMode("light")
  })

</script>

<main class="bg-background">
  <Button>
    <span class="text-accent">Hello World !</span>
  </Button>
</main>
