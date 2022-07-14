import { builder } from '../../builder'
import { db } from '../../../db'

builder.queryField('users', (t) => {
  return t.prismaField({
    type: ['User'],
    resolve: (query) => {
      return db.user.findMany({ ...query })
    },
  })
})
