<script setup>
defineProps({
  inset: Boolean,
  vertical: Boolean,
})

const classes = computed(() => ({
  'd-separator': true,
  'd-separator--inset': inset,
  'd-separator--vertical': vertical,
}))
</script>

<template>
  <div :class="classes" />
</template>

<style lang="scss">
.d-separator {
  display: block;
  width: 100%;
  height: 1px;
  background-color: #3f3f3f;

  &--inset {
    margin: 0 1rem;
  }

  &--vertical {
    width: 1px;
    height: 100%;
  }
}
</style>
