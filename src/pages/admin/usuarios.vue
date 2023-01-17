<script setup>
const formData = reactive({
  name: '',
})
</script>

<template>
  <DPage>
    <div class="container mx-auto h-full">
      <div class="grid grid-cols-1 gap-4 h-full grid-rows-[max-content_max-content_1fr]">
        <div class="w-col-12">
          <h1 class="text-2xl font-semibold font-display">
            Usuários
          </h1>
        </div>
        <div class="w-col-12 ">
          <DCard flat>
            <DExpansionItem label="Filtros" header-class="text-card-title">
              <DCardSection class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-md">
                <DInputText v-model="formData.name" label="Nome" name="name" />
                <DInputText v-model="formData.email" label="Email" name="email" />
                <DInputText v-model="formData.phone" label="Telefone" name="phone" />
              </DCardSection>
            </DExpansionItem>
          </DCard>
        </div>
        <div class="w-col-12 grid grid-cols-1 h-full">
          <DCard flat class="flex-1">
            <DCardSection class="h-full" />
          </DCard>
        </div>
      </div>
    </div>
  </DPage>
</template>

<route lang="yaml">
meta:
  layout: private
  title: Usuários
</route>
