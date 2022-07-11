import { objectType, queryField, mutationField, stringArg, list } from 'nexus'

export const UserType = objectType({
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('email')
    t.string('password')
  },
})

export const UserQuery = queryField('users', {
  type: list('User'),
  resolve(_, __, ctx) {
    return ctx.db.user.findMany()
  },
})

export const UserMutation = mutationField('createUser', {
  type: 'User',
  args: {
    name: stringArg(),
    email: stringArg(),
    password: stringArg(),
  },
  resolve(_, args, ctx) {
    return ctx.db.user.create({
      data: args,
    })
  },
})
