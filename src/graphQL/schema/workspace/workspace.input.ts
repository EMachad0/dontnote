import { builder } from '../../builder'
import { idInput } from '../misc/input'

export const WorkspaceConnectionUserInput = builder.inputType(
  'WorkspaceConnectionUserInput',
  {
    fields: (t) => ({
      workspace: t.field({ type: idInput, required: true }),
      user: t.field({ type: idInput, required: true }),
    }),
  }
)
