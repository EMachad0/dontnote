import { builder } from '../../builder'
import { UserIdInput } from '../user/user.input'

export const WorkspaceConnectionUserInput = builder.inputType(
  'WorkspaceConnectionUserInput',
  {
    fields: (t) => ({
      id: t.int({ required: true }),
      user: t.field({ type: UserIdInput, required: true }),
    }),
  }
)
