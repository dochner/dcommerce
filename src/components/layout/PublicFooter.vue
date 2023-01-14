<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 px-6 backdrop-blur-sm bg-white dark:bg-dark-accent h-$footer-height">
    <div class="items-center justify-center mx-auto opacity-50 flex">
      <span class="text-sm">
        <a target="_blank" rel="noopener" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style="color:inherit" class="!font-normal">
          CC BY-NC-SA 4.0
        </a>
        {{ year }} © Douglas Ochner
      </span>
    </div>
  </footer>
</template>
