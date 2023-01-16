import { toRefs } from 'vue'
import { useField } from 'vee-validate'

export const useFormProps = {
  modelValue: null,
  name: {
    type: String,
    required: true,
  },
  debounce: {
    type: Number,
    default: 0,
  },
  rules: {
    required: false,
  },
}

export const useVeeValidate = (props: any) => {
  const { name, modelValue } = toRefs(props)
  const { value: inputValue, errorMessage, handleBlur, handleReset, handleChange, meta } = useField(name, props?.rules, {
    initialValue: props.modelValue,
  })

  watch(modelValue, (val) => {
    useDebounceFn(() => {
      handleChange(val)
    }, props.debounce)
  })

  return {
    inputValue,
    errorMessage,
    handleBlur,
    handleReset,
    handleChange,
    meta,
  }
}
