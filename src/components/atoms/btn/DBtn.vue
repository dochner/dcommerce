<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  ...RouterLink.props,
  to: {
    required: false,
  },
  fallback: {
    type: String,
    default: 'button',
  },
  round: Boolean,
  square: Boolean,
  flat: Boolean,
  outline: Boolean,
  color: String,
  size: {
    type: String,
    default: 'md',
  },
  block: Boolean,
  disabled: Boolean,
  loading: Boolean,
  icon: Boolean,
  iconLeft: Boolean,
  noCaps: Boolean,
  push: Boolean,
  padding: {
    type: String,
    default: '0.5rem 1rem',
  },
})

const componentIs = computed(() => {
  if (props.to)
    return 'router-link'

  if (props.href)
    return 'a'

  return props.fallback
})

const btnColor = computed(() => {
  if (props.color) {
    if (['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'dark-accent'].includes(props.color))
      return `var(--color-${props.color})`

    else if (props.color.startsWith('#'))
      return props.color

    else if (props.color.startsWith('rgb'))
      return props.color

    else if (props.color.startsWith('var'))
      return props.color
  }

  return props.color ? props.color : isDark.value ? 'var(--color-dark-accent)' : 'transparent'
})

const classes = computed(() => {
  const classes = ['d-btn']

  if (props.to || props.href)
    classes.push('d-btn-link')

  if (props.round)
    classes.push('d-btn--round')

  if (props.square)
    classes.push('d-btn--square')

  if (props.stretch)
    classes.push('d-btn--stretch')

  if (props.flat)
    classes.push('d-btn--flat')

  if (props.outline)
    classes.push('d-btn--outline')

  if (props.size)
    classes.push(`d-btn--${props.size}`)

  if (props.block)
    classes.push('d-btn--block')

  if (props.disabled)
    classes.push('d-btn--disabled')

  if (props.loading)
    classes.push('d-btn--loading')

  return classes.join(' ')
})
</script>

<template>
  <component :is="componentIs" :class="classes" class="row items-center justify-center">
    <div class="row items-center w-full d-btn-content">
      <slot />
    </div>
  </component>
</template>

<style lang="scss">
.d-btn {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: v-bind(padding);
  border-radius: 4px;
  background: v-bind("btnColor");
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12);
  transition: all 0.2s ease-in-out;
  font-weight: 700;

  &:active {
    --btn-background-opacity: 0.5;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
  }

  &--round {
    border-radius: 9999px;
    padding: 0.5rem;
  }

  &--flat {
    background: transparent;
    box-shadow: none;
  }

  &--stretch {
    height: 100%;
  }
}
</style>
