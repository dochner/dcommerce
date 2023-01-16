<script setup>
const formData = reactive({
  email: '',
  password: '',
  confirmPassword: '',
})
</script>

<template>
  <DPage class="login-page">
    <div class="container mx-auto h-full row items-center justify-center">
      <div class="h-full w-col-12 md:w-col-4 row items-center justify-center">
        <DCard class="login-page__card !py-12">
          <DCardSection>
            <h1 class="font-display text-4xl font-bold text-center ">
              Falta pouco para acessar todo o conteúdo! 🚀
            </h1>
          </DCardSection>

          <DCardSection class="column space-y-md">
            <DInputText
              v-model="formData.email"
              name="email"
              label="E-mail"
            />

            <DInputPassword
              v-model="formData.password"
              name="password"
              label="Senha"
            />
          </DCardSection>

          <DCardActions class="column justify-center">
            <DBtn color="accent" class="text-dark text-lg !py-3 !px-16" round>
              Entrar <i class="ml-xl i-mdi-arrow-right" />
            </DBtn>
          </DCardActions>
        </DCard>
      </div>
    </div>
  </DPage>
</template>

<style lang="scss">
.login-page {
  &__card {
    box-shadow: -99px -99px 100px rgba(51, 255, 51, 0.5), 93px -40px 100px rgba(20, 252, 213, 0.7), -8px 51px 100px rgba(20, 219, 106, 0.7) !important;
    -webkit-box-shadow: -99px -99px 100px rgba(51, 255, 51, 0.5), 93px -40px 100px rgba(20, 252, 213, 0.7), -8px 51px 100px rgba(20, 219, 106, 0.7) !important;
    -moz-box-shadow: -99px -99px 100px rgba(51, 255, 51, 0.5), 93px -40px 100px rgba(20, 252, 213, 0.7), -8px 51px 100px rgba(20, 219, 106, 0.7) !important;
  }
}
</style>

<route lang="yaml">
meta:
  layout: clear
</route>
