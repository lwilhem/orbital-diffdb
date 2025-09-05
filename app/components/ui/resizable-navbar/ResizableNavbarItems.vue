<script setup lang="ts">
interface INavbarItemsProps {
  items: {
    name: string
    link: string
  }[]
  class?: string
  onItemClick?: () => void
}

const props = defineProps<INavbarItemsProps>()

const isHovered = ref<number | null>(null)
</script>

<template>
  <Motion
    v-for="(item, index) in props.items"
    :key="index"
    as="div"
    @mouseleave="isHovered = null"
  >
    <slot />
  </Motion>
</template>
