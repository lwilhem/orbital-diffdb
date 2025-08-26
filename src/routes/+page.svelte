<script>
  import { Button } from "$lib"
  import { setMode } from "mode-watcher"
  import { onMount } from "svelte"
  import MdiArrowCollapseLeft from "virtual:icons/mdi/arrow-collapse-left"

  onMount(() => {
    setMode("light")
  })

</script>

<main>
  <Button href="/">
    <span>Hello World !</span>
    <MdiArrowCollapseLeft />
  </Button>
</main>
