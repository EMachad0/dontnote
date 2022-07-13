import { builder } from '../../builder'
import { db } from '../../../db'
import { UserIdInput } from '../user/user.input'

const WorkspaceCreationInput = builder.inputType('WorkspaceCreationInput', {
  fields: (t) => ({
    title: t.string({ required: true }),
    users: t.field({
      type: [UserIdInput],
      required: true,
    }),
  }),
})

builder.mutationField('createWorkspace', (t) => {
  return t.prismaField({
    type: 'Workspace',
    args: {
      input: t.arg({ type: WorkspaceCreationInput, required: true }),
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
