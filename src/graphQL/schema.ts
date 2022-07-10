import { makeSchema } from 'nexus'
// import * as types from './types'
import { join } from 'path'

const schema = makeSchema({
  types: [],
  plugins: [],
  outputs: {
    typegen: join(__dirname, 'nexus-typegen.ts'),
    schema: join(__dirname, 'schema.graphql'),
  },
})

export default schema
