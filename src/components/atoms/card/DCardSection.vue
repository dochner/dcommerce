<script setup>
const props = defineProps({
  horizontal: Boolean,
})

const customClasses = computed(() => {
  return [
    props.horizontal ? 'd-card__section--horizontal' : 'd-card__section--vertical',
  ]
})
</script>

<template>
  <div class="d-card__section" :class="[horizontal ? 'row no-wrap' : '', ...customClasses]">
    <slot />
  </div>
</template>
