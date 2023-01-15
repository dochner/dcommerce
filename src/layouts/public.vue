<script setup>
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

watch(isMenuOpen, () => {
  document.documentElement.classList.toggle('overflow-hidden', true)
})
</script>

<template>
  <DLayout>
    <PublicHeader @open-menu="toggleMenu" />

    <DPageContainer>
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route" :class="isMenuOpen ? 'blur-sm' : ''" />
      </router-view>
    </DPageContainer>
    <PublicMenu :model-value="isMenuOpen" />

    <PublicFooter />
  </DLayout>
</template>
