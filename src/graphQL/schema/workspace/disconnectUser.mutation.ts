import { builder } from '../../builder'
import { db } from '../../../db'
import { WorkspaceConnectionUserInput } from './workspace.input'

builder.mutationField('disconnectUser', (t) => {
  return t.prismaField({
    type: 'Workspace',
    args: {
      input: t.arg({ type: WorkspaceConnectionUserInput, required: true }),
    },
    resolve: (query, _, args) => {
      return db.workspace.update({
        where: {
          id: args.input.id,
        },
        data: {
          users: {
            disconnect: args.input.user,
          },
        },
        ...query,
      })
    },
  })
})
