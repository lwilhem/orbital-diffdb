<script lang="ts">
  import { ModeWatcher } from "mode-watcher"
  import "../app.css"

  const { children } = $props()
</script>

<svelte:head>
  <title>Orbital diffdb - open source database migration tool</title>
</svelte:head>

<ModeWatcher defaultMode="light" />
{@render children?.()}
