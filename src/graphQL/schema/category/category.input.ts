import { builder } from '../../builder'

export const CreateCategoryInput = builder.inputType('CreateCategoryInput', {
  fields: (t) => ({
    id: t.int({ required: true }),
    title: t.string({ required: true }),
  }),
})
