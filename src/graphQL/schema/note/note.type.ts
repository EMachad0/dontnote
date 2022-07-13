import { builder } from '../../builder'

builder.prismaObject('Note', {
  fields: (t) => ({
    id: t.exposeInt('id'),
    text: t.exposeString('text'),
    workspace: t.relation('workspace'),
    author: t.relation('author'),
    // categories: t.relation('categories'),
  }),
})
