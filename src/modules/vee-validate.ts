import { configure, defineRule } from 'vee-validate'
import { confirmed, email, min, required } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

import type { UserModule } from './../types'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('confirmed', confirmed)

configure({
  generateMessage: localize({
    en: {
      messages: {
        required: 'This field is required',
        email: 'This field must be a valid email',
        min: 'This field must be at least {length} characters',
        confirmed: 'This field confirmation does not match',
      },
    },
    pt_BR: {
      messages: {
        required: 'O campo é obrigatório',
        email: 'O campo deve ser um e-mail válido',
        min: 'O campo deve ter no mínimo {length} caracteres',
        confirmed: 'A confirmação do campo não corresponde',
      },
    },
  }),
})

export const install: UserModule = () => {}
