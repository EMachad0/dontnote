import { builder } from '../../builder'

builder.prismaObject('Workspace', {
  fields: (t) => ({
    id: t.exposeInt('id'),
    title: t.exposeString('title'),
    uuid: t.exposeID('uuid'),
  }),
})
