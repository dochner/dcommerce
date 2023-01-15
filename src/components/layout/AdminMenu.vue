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

const navList = computed(() => {
  return [
    {
      title: 'Dashboard',
      icon: 'i-mdi-view-dashboard',
      to: '/admin',
    },
    {
      title: 'Usuários',
      icon: 'i-mdi-account-group',
      to: '/admin/usuarios',
    },
    {
      title: 'Categorias',
      icon: 'i-mdi-folder',
      to: '/admin/categorias',
    },
    {
      title: 'Produtos',
      icon: 'i-mdi-package-variant',
      children: [
        {
          title: 'Todos os produtos',
          icon: 'i-mdi-package',
          to: '/admin/produtos',
        },
        {
          title: 'Opções de produtos',
          to: '/admin/produtos/opcoes',
          icon: 'i-mdi-package-variant-closed-plus',
        },
      ],
    },
    {
      title: 'Pedidos',
      icon: 'i-mdi-cart',
      to: '/admin/pedidos',
    },
    {
      title: 'Configurações',
      icon: 'i-mdi-cog',
      to: '/admin/configuracoes',
    },
  ]
})
</script>

<template>
  <aside :class="classes" class="relative w-$sidebar-width border py-8 shadow-1 border-$c-border w-full md:w-$sidebar-width">
    <div class="row items-center">
      <h1 class="text-dark fw-300 dark:text-light-800 font-display">
        Bem vindo!
      </h1>
    </div>

    <nav class="absolute top-$header-height left-0 w-full overflow-y-scroll">
      <DNavList :items="navList" label="Menu" />
    </nav>
  </aside>
</template>

<style lang="scss">
.d-sidebar {
  overflow-y: auto;
  transition: width 0.3s ease-in-out;
  transform-origin: left;
  will-change: transform;

  &.open {
    width: 0;
    transform: scaleX(0);
  }

  nav {
    padding: 1.5rem;
  }
}
</style>
