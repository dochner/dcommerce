<script setup>
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const bodyEl = document.querySelector('body')

watch(isMenuOpen, (value) => {
  if (value)
    bodyEl.classList.add('overflow-hidden')

  else
    bodyEl.classList.remove('overflow-hidden')
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
