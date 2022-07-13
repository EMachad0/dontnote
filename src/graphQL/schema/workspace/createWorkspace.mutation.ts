import { builder } from '../../builder'
import { db } from '../../../db'
import { idInput } from '../misc/input'

const CreateWorkspaceInput = builder.inputType('CreateWorkspaceInput', {
  fields: (t) => ({
    title: t.string({ required: true }),
    users: t.field({ type: [idInput], required: true }),
  }),
})

builder.mutationField('createWorkspace', (t) => {
  return t.prismaField({
    type: 'Workspace',
    args: {
      input: t.arg({ type: CreateWorkspaceInput, required: true }),
    },
    resolve: (query, _, args) => {
      return db.workspace.create({
        data: {
          title: args.input.title,
          users: {
            connect: args.input.users,
          },
        },
        ...query,
      })
    },
  })
})
