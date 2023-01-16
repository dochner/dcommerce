<script setup>
const props = defineProps({
  inset: Boolean,
  vertical: Boolean,
})

const customClasses = computed(() => ({
  'd-separator': true,
  'd-separator--inset': props.inset,
  'd-separator--vertical': props.vertical,
}))
</script>

<template>
  <div :class="customClasses" />
</template>

<style lang="scss">
.d-separator {
  display: block;
  width: 100%;
  height: 1px;
  background-color: var(--c-border);

  &--inset {
    margin: 0 1rem;
  }

  &--vertical {
    width: 1px;
    height: 100%;
  }
}
</style>
