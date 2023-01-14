<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Dcommerce',
  meta: [
    { name: 'description', content: 'Dcommerce application built for study purposes' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#1a1a1a' : '#ffffff'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
