import { builder } from '../../builder'

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeInt('id'),
    name: t.exposeString('name'),
    email: t.exposeString('email'),
    workspaces: t.relation('workspaces'),
    notes: t.relation('notes'),
  }),
})
