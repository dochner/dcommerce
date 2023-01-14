<script setup>
const props = defineProps({
  modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const open = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

const toggle = () => {
  open.value = !open.value
}

const openClass = computed(() => {
  return open.value ? 'open' : ''
})

const classes = computed(() => {
  return `d-sidebar ${openClass.value}`
})
</script>

<template>
  <aside :class="classes" class="pt-$header-height pb-20 w-$sidebar-width max-w-full border shadow-1 border-$c-border w-full md:w-$sidebar-width">
    <nav class="absolute top-0 left-0 w-full bg-accent">
      <div class="text-4xl font-display fw-bold">
        Bem vindo!

        <DBtn round class="text-base px-md mt-md">
          Crie uma conta agora <div class="ml-3 i-mdi-arrow-right" />
        </DBtn>
      </div>
    </nav>
  </aside>
</template>

<style lang="scss">
.d-sidebar {
  position: fixed;
  top: var(--header-height);
  right: 0;
  bottom: var(--footer-height);
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);
  will-change: transform;

  &.open {
    transform: translateX(0);
  }

  nav {
    padding: 1.5rem;
  }
}
</style>
