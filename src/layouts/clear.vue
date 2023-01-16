<template>
  <DLayout>
    <DPageContainer>
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route" />
      </router-view>
    </DPageContainer>
  </DLayout>
</template>
