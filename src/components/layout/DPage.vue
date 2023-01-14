<script setup>
defineProps({
  padding: {
    type: String,
    default: '1.5rem',
  },
})
</script>

<template>
  <div class="d-page flex-1">
    <slot />
  </div>
</template>

<style lang="scss">
.d-page {
  padding: v-bind(padding);
}
</style>
