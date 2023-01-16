<script setup>
defineEmits(['openMenu'])

const breadcrumbList = computed(() => useRoute().fullPath.split('/').filter(Boolean))
</script>

<template>
  <header
    class="inset-x-0 z-50 h-$header-height px-6 bg-white dark:bg-dark !bg-opacity-80 backdrop-blur border-b border-$c-border"
  >
    <div class="h-full flex justify-center flex-row items-center">
      <div class="flex-grow">
        <div class="row items-center">
          <DBtn round class="mr-3" @click="$emit('openMenu')">
            <div class="i-bx-menu" />
          </DBtn>

          <router-link class="text-2xl font-bold select-none outline-none" to="/" focusable="false">
            <h1 class="text-dark fw-300 dark:text-light-800 font-display">
              DCommerce
            </h1>
          </router-link>

          <div class="flex-grow" />
          <DBtnToggleDark class="mr-3" />
        </div>
      </div>
    </div>
  </header>
</template>
