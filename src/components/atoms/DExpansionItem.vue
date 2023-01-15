<script setup>
const props = defineProps({
  label: String,
  modelValue: Boolean,
  headerClass: String,
  contentClass: String,
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

const setValue = (value) => {
  isOpen.value = value
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="d-expansion-item" @click="setValue(!isOpen)">
    <div class="d-expansion-wrapper">
      <div class="d-expansion-item-header !hover:text-primary">
        <slot name="label">
          {{ label }}
        </slot>
        <div class="d-expansion-item-header-icon">
          <slot name="icon">
            <i class="i-mdi-chevron-down transition-transform duration-150 rotate-0" :class="isOpen ?? 'rotate-180'" />
          </slot>
        </div>
      </div>
      <DSlideTransition @click.stop="() => {}">
        <div v-show="isOpen">
          <slot />
        </div>
      </DSlideTransition>
    </div>
  </div>
</template>

<style lang="scss">
.d-expansion-item {
  .d-expansion-wrapper {
    .d-expansion-item-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      padding: 4px 16px;
      color: var(--color-primary);

      .d-expansion-item-header-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        transition: background-color 0.3s ease-in-out;
      }
    }
  }
}
</style>
