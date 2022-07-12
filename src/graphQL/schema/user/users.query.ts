import { builder } from '../../builder'
import { db } from '../../../db'

builder.queryField('users', (t) => {
  return t.prismaField({
    type: ['User'],
    resolve: (query) => db.user.findMany({ ...query }),
  })
})
