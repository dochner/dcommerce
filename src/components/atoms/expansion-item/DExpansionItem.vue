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
  <div class="d-expansion-item" :class="isOpen ? 'is-open' : ''" @click="setValue(!isOpen)">
    <div class="d-expansion-wrapper relative outline-0">
      <div class="d-expansion-item-header transition-all min-h-12 duration-150 row items-center" :class="headerClass">
        <slot name="label">
          {{ label }}
        </slot>
        <div class="d-expansion-item-header-icon transition-all">
          <slot name="icon">
            <i class="i-mdi-chevron-down transition-transform duration-150 rotate-0" />
          </slot>
        </div>
      </div>
      <DSlideTransition @click.stop="() => {}">
        <div v-show="isOpen" class="contentClass">
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

      .d-expansion-item-header-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }
    }
  }

   &.is-open {
    .d-expansion-item-header-icon {
      transform: rotate(180deg)
    }
  }
}
</style>
