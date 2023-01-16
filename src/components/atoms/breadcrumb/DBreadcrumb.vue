<script setup>
defineProps({
  items: Array,
})
</script>

<template>
  <div class="d-breadcrumb-list">
    <div v-for="(item, index) in items" :key="index" class="d-breadcrumb-item">
      <RouterLink :to="item.to" class="d-breadcrumb-link">
        {{ item.title }}
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss">
.d-breadcrumb-list {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: $c-gray-500;
  margin-bottom: 1rem;

  .d-breadcrumb-item {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: 0.5rem;

      &:after {
        content: '/';
        margin-left: 0.5rem;
      }
    }

    .d-breadcrumb-link {
      color: $c-gray-500;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: $c-primary;
      }
    }
  }
}
</style>
