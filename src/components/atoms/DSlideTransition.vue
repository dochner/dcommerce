<script setup>
const beforeEnter = (element) => {
  requestAnimationFrame(() => {
    if (!element.style.height)
      element.style.height = '0px'

    element.style.display = null
  })
}

const enter = (element) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = `${element.scrollHeight}px`
    })
  })
}

const afterEnter = (element) => {
  element.style.height = null
}

const beforeLeave = (element) => {
  requestAnimationFrame(() => {
    if (!element.style.height)
      element.style.height = `${element.offsetHeight}px`
  })
}

const leave = (element) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = '0px'
    })
  })
}

const afterLeave = (element) => {
  element.style.height = null
}
</script>

<template>
  <transition
    enter-active-class="enter-active"
    leave-active-class="leave-active"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot />
  </transition>
</template>

<style scoped>
.enter-active,
.leave-active {
  overflow: hidden;
  transition: height .25s linear;
}
</style>
