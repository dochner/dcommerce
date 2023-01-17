<template>
  <DPage>
    <div class="container mx-auto">
      <div class="row">
        <div class="w-col-12">
          <div class="column items-center">
            <h1 class="font-display text-4xl font-bold text-center pt-20">
              Desculpe, página não encontrada!
            </h1>

            <DBtn to="/" class="mt-xl text-dark" color="white">
              Voltar para a página inicial
            </DBtn>
          </div>

          <img src="/img/404.svg" class="w-[calc(100vw_-_32px)] fixed top-2/5 left-1/2 transform translate-x--1/2 h-6/12">
        </div>
      </div>
    </div>
  </DPage>
</template>

<route lang="yaml">
meta:
  layout: clear
</route>
