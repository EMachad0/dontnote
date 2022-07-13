import { builder } from '../../builder'

export const idInput = builder.inputType('idInput', {
  fields: (t) => ({
    id: t.int({ required: true }),
  }),
})
