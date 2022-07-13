import { builder } from '../../builder'
import { db } from '../../../db'

const CreateUserInput = builder.inputType('CreateUserInput', {
  fields: (t) => ({
    name: t.string({ required: true }),
    email: t.string({ required: true }),
    password: t.string({ required: true }),
  }),
})

builder.mutationField('createUser', (t) => {
  return t.prismaField({
    type: 'User',
    args: {
      input: t.arg({ type: CreateUserInput, required: true }),
    },
    resolve: (query, _, args) => {
      return db.user.create({
        data: {
          name: args.input.name,
          email: args.input.email,
          password: args.input.password,
        },
        ...query,
      })
    },
  })
})
