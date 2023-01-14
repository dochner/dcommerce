<script setup>
defineEmits(['openMenu'])
</script>

<template>
  <header
    class="inset-x-0 z-50 h-$header-height px-6 bg-white dark:bg-dark !bg-opacity-80 backdrop-blur border-b border-$c-border"
  >
    <div class="max-w-screen-lg mx-auto h-full flex justify-center flex-row items-center">
      <router-link class="text-2xl font-bold select-none outline-none" to="/" focusable="false">
        <h1 class="text-dark fw-300 dark:text-light-800 font-display">
          DCommerce
        </h1>
      </router-link>

      <div class="flex-grow" />

      <DToggleDark />
      <DButtonShoppingBag class="ml-3" />
      <DBtn round class="ml-3" @click="$emit('openMenu')">
        <div class="i-bx-menu" />
      </DBtn>
    </div>
  </header>
</template>
