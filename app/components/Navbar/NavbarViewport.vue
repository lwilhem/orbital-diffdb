<script setup lang="ts">
import type { NavigationMenuViewportProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { useForwardProps } from 'reka-ui'

const props = defineProps<NavigationMenuViewportProps & { class?: HTMLAttributes['class'] }>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="top-full left-0 absolute flex justify-center">
    <NavigationMenuViewport
      v-bind="forwardedProps"
      :class="
        cn('relative bg-popover shadow-lg mt-1.5 border rounded-md w-full md:w-[--reka-navigation-menu-viewport-width] h-[--reka-navigation-menu-viewport-height] overflow-hidden text-popover-foreground origin-top-center data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90',
           props.class,
        )
      "
    />
  </div>
</template>
