<script>
  import { Navbar } from "$lib"
  import { setMode } from "mode-watcher"
  import { onMount } from "svelte"

  onMount(() => {
    setMode("light")
  })

</script>

<Navbar />
