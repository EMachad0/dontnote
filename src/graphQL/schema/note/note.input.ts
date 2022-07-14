import { builder } from '../../builder'
import { idInput } from '../misc/input'

export const NoteConnectionCategoryInput = builder.inputType(
  'NoteConnectionCategoryInput',
  {
    fields: (t) => ({
      note: t.field({ type: idInput, required: true }),
      category: t.field({ type: idInput, required: true }),
    }),
  }
)
