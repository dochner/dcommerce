<script setup>
import { generateUUID } from '~/utils'

const props = defineProps({
  ...useFormProps,
  label: {
    type: String,
    required: true,
  },
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
  maxlength: {
    type: Number,
    default: 255,
  },
  hint: {
    type: String,
    default: '',
  },
  readonly: Boolean,
  disabled: Boolean,
  autofocus: Boolean,
  form: String,
  hideBottomSpace: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const { errorMessage, inputValue, meta, handleReset, handleBlur } = useVeeValidate(props)

const updateModelValue = (value) => {
  emit('update:modelValue', value)
}

const isFocused = ref(false)
const hasPlaceholder = computed(() => !!props.placeholder || !!props.modelValue)

const onInputFocus = (event) => {
  isFocused.value = true
}

const onInputBlur = (event) => {
  isFocused.value = false
  handleBlur(event)
}

const id = generateUUID()

const customClasses = computed(() => [
  isDark.value && 'd-input-text--dark',
  props.disabled && 'd-input-text--disabled',
  props.readonly && 'd-input-text--readonly',
  isFocused.value && 'd-input-text--focused',
  hasPlaceholder.value && 'd-input-text--placeholder',
  errorMessage.value && 'd-input-text--error',
  !props.hideBottomSpace && 'd-input-text--with-bottom',
].filter(Boolean))
</script>

<template>
  <div class="d-input-text row no-wrap items-start text-base w-full relative box-border" :class="customClasses">
    <div class="d-input-text__wrapper self-stretch w-full">
      <label class="d-input-text__label px-2 transition-all duration-150 origin-left" :for="id" :class="!!$slots.prepend ? 'd-input-text__label-away' : ''">
        {{ label }}
      </label>

      <div class="d-input-text__control relative row no-wrap border-2 border-$c-border transition-all duration-150">
        <div v-if="$slots.prepend" class="text-2xl d-input-text__prepend d-input-text__marginal row no-wrap items-center !pr-3">
          <slot name="prepend" />
        </div>
        <div class="d-input-text__control-container row relative no-wrap flex-1">
          <input
            id="id"
            ref="inputRef"
            class="d-input-text__input z-3"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :autofocus="autofocus"
            :form="form"
            :maxlength="maxlength"
            :value="inputValue"
            @input="updateModelValue"
            @blur="onInputBlur"
            @focus="onInputFocus"
          >
        </div>

        <div v-if="$slots.append" class="d-input-text__append text-2xl d-input-text__prepend d-input-text__marginal row no-wrap items-center !pl-3">
          <slot name="append" />
        </div>
        <div v-show="!hideBottomSpace" class="d-input-text__bottom row items-start d-input-text__bottom--animated">
          <div class="d-input-text__messages fw-semibold">
            <Transition name="d-transition--field-message">
              <span v-if="errorMessage">{{ errorMessage }}</span>
              <span v-else-if="hint">{{ hint }}</span>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.d-input-text {
  &__wrapper {
    text-align: left;
  }

  &__label {
    position: absolute;
    top: 22px;
    left: 8px;
    line-height: 1;
    letter-spacing: .04em;
    z-index: 2;
    font-family: poppins;
    font-weight: 700;
    background-color: white;

    &-away {
      left: 54px;
    }
  }

  &--placeholder &,
  &--focused & {
    &__label {
      top: -4px;
      left: 10px;
      font-size: 12px;
    }
  }

  &__control {
    padding: 0 12px;
    border-radius: 8px;
    height: 56px;
    max-width: 100%;
    outline: none;

    &-container {
      height: inherit;
    }
  }

  &__marginal,
  &__prefix,
  &__suffix,
  &__input {
    font-weight: 400;
    line-height: 28px;
    letter-spacing: .00937em;
    text-decoration: inherit;
    text-transform: inherit;
    border: none;
    border-radius: 0;
    background: none;
    color: rgba(0,0,0,.6);
    padding: 6px 0;
  }

  &__prepend {
    height: 56px;
    font-size: 24px;
  }

  &__prepend,
  &__append {
    .d-btn {
      height: 100%;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__input {
    width: 100%;
    min-width: 0;
    outline: 0 !important;
    -webkit-user-select: auto;
    user-select: auto;
  }

  &__label,
  &__marginal,
  &__bottom,
  &__input {
    color: rgba(0,0,0,.6);
  }

  &--dark & {
    &__label,
    &__marginal,
    &__bottom,
    &__input,
    &__input::placeholder, {
      color: #ffffffb3;
    }

    &__label {
      background-color: var(--color-dark-light);
    }
  }

  &--focused & {
    &__label {
      color: var(--color-primary) !important;
    }

    &__control {
      border-color: var(--color-primary);
    }
  }

  &--with-bottom {
    padding-bottom: 20px;
  }

  &__bottom {
    font-size: 14px;
    min-height: 20px;
    line-height: 1;
    transition: all .2s ease-in-out;
    padding: 8px 12px 0;
    backface-visibility: hidden;

    &--animated {
      transform: translateY(100%);
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  &--error & {
    &__control {
      border-color: var(--color-negative);
    }

    &__label {
      color: var(--color-negative) !important;
    }

    &__messages {
      color: var(--color-negative);
    }
  }

  .d-transition--field-message {
    &-enter-active,
    &-leave-active {
      transition: transform .6s cubic-bezier(.86,0,.07,1), opacity .6s cubic-bezier(.86,0,.07,1);
    }

    &-enter-from, &-leave-to{
      opacity: 0;
      transform: translateY(-10px);
    }

    &-leave-from, &-leave-active{
      position: absolute;
    }
  }
}
</style>
