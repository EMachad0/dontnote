import { builder } from '../../builder'
import { db } from '../../../db'

builder.queryField('notes', (t) => {
  return t.prismaField({
    type: ['Note'],
    resolve: (query) => {
      return db.note.findMany({ ...query })
    },
  })
})
