<script setup>
const props = defineProps({
  modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const classes = computed(() => {
  return `d-sidebar ${props.modelValue ? 'open' : ''}`
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
  <aside :class="classes" class="md:relative w-full border py-8 shadow-1 border-$c-border w-full md:w-$sidebar-width z-9972">
    <div class="items-center row relative md:hidden px-10">
      <router-link class="text-2xl font-bold select-none outline-none" to="/admin" focusable="false">
        <h1 class="text-dark fw-300 dark:text-light-800 font-display">
          DCommerce
        </h1>
      </router-link>

      <DBtn round class="ml-auto" @click="$emit('update:modelValue', false)">
        <div class="i-mdi-close" />
      </DBtn>
    </div>

    <nav class="absolute top-$header-height left-0 w-full overflow-y-scroll">
      <DNavList :items="navList" label="Menu" @switch="$emit('update:modelValue', false)" />
    </nav>
  </aside>
</template>

<style lang="scss">
.d-sidebar {
  overflow-y: auto;
  transition: width 0.3s ease-in, opacity 0.15s ease-in;
  transform-origin: left;
  will-change: transform;
  background-color: #ffffff;

  &.open {
    width: 0;
    opacity: 0;
  }

  nav {
    padding: 1.5rem;
  }

  @media screen and (max-width: 1240px) {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: fixed;
  }
}
</style>
