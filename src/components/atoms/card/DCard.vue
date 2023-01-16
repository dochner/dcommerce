<script setup>
defineProps({
  padding: {
    type: String,
    default: '0',
  },

  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
})

const classes = computed(() => {
  return [
    'd-card',
    props.square ? 'd-card--square' : '',
    props.flat ? 'd-card--flat' : '',
    props.bordered ? 'd-card--bordered' : '',
  ]
})
</script>

<template>
  <div class="d-card  bg-white shadow-2 align-top relative dark:bg-dark-light dark:shadow-dark-2" :un-border="bordered ? 'rounded-none' : 'rounded-lg'">
    <slot />
  </div>
</template>

<style lang="scss">
.d-card {
  padding: v-bind(padding);

  > div,
  > img {
    &:first-child {
        border-top: 0;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }
  }

  > div,
  > img {
    &:last-child {
        border-bottom: 0;
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }
  }

  > div,
  > img {
    &:not(:first-child) {
      border-top-left-radius: 0;
      border-top-left-radius: 0;
    }
  }

  > div,
  > img {
    &:not(:last-child) {
      border-bottom-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  > div {
    border-left: 0;
    border-right: 0;
    box-shadow: none;
  }

  &--bordered {
    border: 1px solid var(--c-border);
  }

  &__section {
    position: relative;

    &--vertical {
      padding: 16px;
    }

    &--horizontal {
      > div,
      > img {
        &:first-child {
          border-top-left-radius: inherit;
          border-bottom-left-radius: inherit;
        }

        &:last-child {
          border-top-right-radius: inherit;
          border-bottom-right-radius: inherit;
        }

        &:not(:first-child) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }

        &:not(:last-child) {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
      }

      > div {
        border-left: 0;
        border-right: 0;
        box-shadow: none;
      }
    }
  }

  &__actions {
    padding: 8px;
    align-items: center;
  }

  > img {
    display: block;
    width: 100%;
    max-width: 100%;
    border: 0;
  }
}
</style>
