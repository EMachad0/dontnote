/**
 * Build Nexus Schema
 */
import schema from './schema'
import { context } from './context'

import { ApolloServer } from 'apollo-server-express'

export async function start_server(): Promise<ApolloServer> {
  /**
   * Build Apollo Server
   */
  const apollo = new ApolloServer({
    schema,
    context,
  })

  await apollo.start()
  return apollo
}
