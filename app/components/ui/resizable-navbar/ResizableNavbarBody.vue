<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

interface INavbarBodyProps {
  visible?: boolean
  class?: HTMLAttributes['class']
}

const props = defineProps<INavbarBodyProps>()

const NavBarBodyClass = cn(
  'hidden z-[60] relative lg:flex flex-row justify-between items-center self-start bg-transparent dark:bg-transparent mx-auto px-4 py-2 rounded-full w-full max-w-7xl',
  props.visible && 'bg-white/80 dark:bg-neutral-950/80',
  props.class,

)
</script>

<template>
  <Motion
    as="div"
    :animate="{
      backdropFilter: props.visible ? 'blur(20px)' : 'blur(0px)',
      boxShadow: props.visible
        ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
        : 'none',
      width: props.visible ? '40%' : '100%',
      y: props.visible ? 20 : 0,
    }"
    :transition="{
      type: 'spring',
      stiffness: 200,
      damping: 50,

    }"
    :style="{
      minWidth: '800px',
    }"
    :class="NavBarBodyClass"
  >
    <slot />
  </Motion>
</template>
