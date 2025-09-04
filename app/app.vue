<script setup lang="ts">
const colorMode = useColorMode()

onMounted(() => {
  colorMode.value = 'light'
})
</script>

<template>
  <div class="relative w-full h-96">
    <BlackHoleBackground class="absolute inset-0 flex justify-center items-center rounded-xl" />
  </div>
</template>
