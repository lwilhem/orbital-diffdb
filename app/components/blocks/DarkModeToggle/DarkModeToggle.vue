<script setup lang="ts">
const { setColorMode } = useColorModeSingleton()
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="outline">
        <Icon name="lucide:moon" class="w-[1.2rem] h-[1.2rem] rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all" />
        <Icon name="lucide:sun" class="absolute w-[1.2rem] h-[1.2rem] rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all" />
        <span class="sr-only">Toggle theme</span>
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="end">
      <UiDropdownMenuItem @click="setColorMode('light')">
        Light
      </UiDropdownMenuItem>
      <UiDropdownMenuItem @click="setColorMode('dark')">
        Dark
      </UiDropdownMenuItem>
      <UiDropdownMenuItem @click="setColorMode('system')">
        System
      </UiDropdownMenuItem>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
