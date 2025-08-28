<script lang="ts">
  import "../app.css"

  const { children } = $props()
</script>

<svelte:head>
  <title>Orbital diffdb - open source database migration tool</title>
</svelte:head>

{@render children?.()}
