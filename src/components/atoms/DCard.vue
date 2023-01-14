<script setup>
defineProps({
  padding: {
    type: String,
    default: '0',
  },
})
</script>

<template>
  <div class="d-card">
    <slot />
  </div>
</template>

<style lang="scss">
html.dark .d-card {
  background-color: var(--color-dark-accent);
}

.d-card {
  background-color: var(--color-white);
  border-radius: 0.5rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  padding: v-bind(padding);
}
</style>
