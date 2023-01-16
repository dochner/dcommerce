<script setup>
defineProps({
  confirm: Boolean,
})

const passwordInput = ref()
const fieldType = ref('password')

const switchType = () => {
  fieldType.value = fieldType.value === 'password' ? 'text' : 'password'
  passwordInput.value.focus()
}
</script>

<template>
  <DInputText ref="passwordInput" :type="fieldType">
    <template #append>
      <DBtn round color="transparent" class="px-0 py-0" flat @click="switchType">
        <i v-if="fieldType === 'text'" class="i-mdi-eye-outline" />
        <i v-else class="i-mdi-eye-off-outline" />
      </DBtn>
    </template>
  </DInputText>
</template>
