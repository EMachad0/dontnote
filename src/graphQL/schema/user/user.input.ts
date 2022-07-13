import { builder } from '../../builder'

export const UserIdInput = builder.inputType('UserIdInput', {
  fields: (t) => ({
    id: t.int({ required: true }),
  }),
})
