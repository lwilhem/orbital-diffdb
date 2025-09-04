<script setup lang="ts">
import type { NavigationMenuTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { useForwardProps } from 'reka-ui'
import { NavTriggerStyle } from '.'

const props = defineProps<NavigationMenuTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwardedProps"
    :class="cn(NavTriggerStyle(), 'group', props.class)"
  >
    <slot />
    <Icon
      name="lucide:chevron-down"
      class="top-px relative ml-1 w-3 h-3 group-data-[state=open]:rotate-180 transition duration-200"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>
