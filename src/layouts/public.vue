<script setup></script>

<template>
  <DLayout>
    <PublicHeader />

    <DPageContainer>
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route" />
      </router-view>
    </DPageContainer>

    <PublicFooter />
  </DLayout>
</template>
