import { makeSchema } from 'nexus'
import * as types from './types'
import { join } from 'path'

const schema = makeSchema({
  types,
  plugins: [],
  outputs: {
    typegen: join(__dirname, '../../generated/', 'nexus-typegen.ts'),
    schema: join(__dirname, 'schema.graphql'),
  },
  contextType: {
    module: join(__dirname, './context.ts'),
    export: 'Context',
  },
  prettierConfig: join(__dirname, '../../.prettierrc.json'),
  nonNullDefaults: { output: true, input: true },
})

export default schema
