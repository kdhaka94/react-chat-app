import { mongoose} from '../db';
// import { io } from '../socket';
import {
  properties, context, ApolloServer, withFilter,
} from './build';

export const server = new ApolloServer({
  ...properties,
  context: async ({ req, connection }) => ({
    user: connection?.context?.user ? connection?.context?.user : req?.user,
    withFilter,
    ...context,
    mongoose,
    // redis,
  }),
});

export default server;