<script setup>
const props = defineProps({
  label: String,
  items: Array,
})
</script>

<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <RouterLink v-if="!item?.children?.length" :to="item.to" class="flex items-center px-4 py-2 font-medium hover:text-primary cursor-pointer">
        {{ item.title }}
      </RouterLink>
      <DExpansionItem v-else tag="li" :label="item?.title">
        <DNavList :items="item.children" />
      </DExpansionItem>
    </li>
  </ul>
</template>
