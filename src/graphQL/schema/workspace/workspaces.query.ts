import { builder } from '../../builder'
import { db } from '../../../db'

builder.queryField('workspaces', (t) => {
  return t.prismaField({
    type: ['Workspace'],
    resolve: (query) => db.workspace.findMany({ ...query }),
  })
})
