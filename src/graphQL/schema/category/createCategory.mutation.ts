import { builder } from '../../builder'
import { db } from '../../../db'
import { idInput } from '../misc/input'
import { RandomColor } from '../../../services/colorService'

const CreateCategoryInput = builder.inputType('CreateCategoryInput', {
  fields: (t) => ({
    title: t.string({ required: true }),
    workspace: t.field({ type: idInput, required: true }),
    notes: t.field({ type: [idInput], required: true, defaultValue: [] }),
  }),
})

builder.mutationField('createCategory', (t) => {
  return t.prismaField({
    type: 'Category',
    args: {
      input: t.arg({ type: CreateCategoryInput, required: true }),
    },
    resolve: (query, _, args) => {
      return db.category.create({
        data: {
          title: args.input.title,
          color: RandomColor(),
          workspace: {
            connect: args.input.workspace,
          },
          notes: {
            connect: args.input.notes,
          },
        },
        ...query,
      })
    },
  })
})
