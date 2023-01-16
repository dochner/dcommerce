<script setup>
const isMenuOpen = ref(true)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="min-h-screen grid md:grid-cols-[auto_1fr]">
    <AdminMenu v-model="isMenuOpen" />

    <DLayout>
      <AdminHeader @open-menu="toggleMenu" />

      <DPageContainer>
        <router-view v-slot="{ Component, route }">
          <component :is="Component" :key="route" />
        </router-view>
      </DPageContainer>

      <AdminFooter />
    </DLayout>
  </div>
</template>
