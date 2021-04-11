import { mongoose,pubSub } from '../db';
// import { io } from '../socket';
import { properties, context, ApolloServer, withFilter, PubSub } from './build';


export const server = new ApolloServer({
  ...properties,
  context: async ({ req, connection }) => {
    return {
      user: connection?.context?.user ? connection?.context?.user : req?.user,
      withFilter,
      ...context,
      mongoose,
      pubSub
      // redis,
    };
  },
});

export default server;
