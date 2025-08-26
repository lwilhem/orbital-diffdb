<script lang="ts">
  import type { TButtonProps } from "$lib"
  import { button_variants, cn } from "$lib"
  import { Button } from "bits-ui"

  let {
    class: className,
    variant = "default",
    size = "default",
    ref = $bindable(null),
    href = undefined,
    type = "button",
    disabled,
    children,
    ...restProps
  }: TButtonProps = $props()

</script>

{#if href}
  <Button.Root
    bind:ref={ref}
    data-button-root="link"
    class={cn(button_variants({ variant, size }), className)}
    href={disabled ? undefined : href}
    aria-disabled={disabled}
    role={disabled ? undefined : "link"}
    tabindex={disabled ? undefined : -1}
    {...restProps}
  >
    {@render children?.()}
  </Button.Root>
{:else}
  <Button.Root
    bind:ref={ref}
    data-button-root="button"
    class={cn(button_variants({ variant, size }), className)}
    {type}
    {disabled}
    {...restProps}
  >
    {@render children?.()}
  </Button.Root>
{/if}
