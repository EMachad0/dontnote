import { builder } from '../../builder'

builder.prismaObject('Category', {
  fields: (t) => ({
    id: t.exposeInt('id'),
    title: t.exposeString('title'),
    color: t.exposeString('color'),
    workspace: t.relation('workspace'),
  }),
})
