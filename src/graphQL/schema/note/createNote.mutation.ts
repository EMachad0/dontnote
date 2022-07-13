import { builder } from '../../builder'
import { db } from '../../../db'
import { idInput } from '../misc/input'

const CreateNoteInput = builder.inputType('CreateNoteInput', {
  fields: (t) => ({
    title: t.string({ required: true }),
    text: t.string({ required: true }),
    workspace: t.field({ type: idInput, required: true }),
    author: t.field({ type: idInput, required: true }),
    // TODO: Make categories optional
    categories: t.field({ type: [idInput], required: true }),
  }),
})

builder.mutationField('createNote', (t) => {
  return t.prismaField({
    type: 'Note',
    args: {
      input: t.arg({ type: CreateNoteInput, required: true }),
    },
    resolve: (query, _, args) => {
      return db.note.create({
        data: {
          title: args.input.title,
          text: args.input.text,
          workspace: {
            connect: args.input.workspace,
          },
          author: {
            connect: args.input.author,
          },
          categories: {
            connect: args.input.categories,
          },
        },
        ...query,
      })
    },
  })
})
