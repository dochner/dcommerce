<script setup>
const props = defineProps({
  label: String,
  items: Array,
})

defineEmits(['switch'])
</script>

<template>
  <ul class="grid grid-cols-1 gap-xs">
    <li v-for="(item, index) in items" :key="index">
      <RouterLink v-if="!item?.children?.length" :to="item.to" class="flex items-center px-4 py-2 font-medium hover:text-primary cursor-pointer min-h-12" @click="$emit('switch')">
        {{ item.title }}
      </RouterLink>
      <DExpansionItem v-else tag="li" :label="item?.title" header-class="hover:text-primary">
        <DNavList :items="item.children" @switch="$emit('switch')" />
      </DExpansionItem>
    </li>
  </ul>
</template>
