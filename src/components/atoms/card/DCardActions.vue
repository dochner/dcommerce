<script setup>
const props = defineProps({
  vertical: Boolean,
})

const customClasses = computed(() => {
  return [
    props.vertical ? 'd-card__actions--vertical' : 'd-card__actions--horizontal',
  ]
})
</script>

<template>
  <div class="d-card__actions" :class="[vertical ? 'column' : 'row items-center', ...customClasses]">
    <slot />
  </div>
</template>
