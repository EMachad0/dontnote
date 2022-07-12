/**
 * Build Nexus Schema
 */
import { schema } from './schema'

import { ApolloServer } from 'apollo-server-express'

export async function start_server(): Promise<ApolloServer> {
  /**
   * Build Apollo Server
   */
  const apollo = new ApolloServer({
    schema,
  })

  await apollo.start()
  return apollo
}
