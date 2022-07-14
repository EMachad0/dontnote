import { builder } from '../../builder'
import { db } from '../../../db'
import { NoteConnectionCategoryInput } from './note.input'

builder.mutationField('connectCategory', (t) => {
  return t.prismaField({
    type: 'Note',
    args: {
      input: t.arg({ type: NoteConnectionCategoryInput, required: true }),
    },
    resolve: (query, _, args) => {
      return db.note.update({
        where: args.input.note,
        data: {
          categories: {
            connect: args.input.category,
          },
        },
        ...query,
      })
    },
  })
})
