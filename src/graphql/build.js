import {
  ValidationError,
  AuthenticationError,
  ForbiddenError,
  UserInputError,
  makeExecutableSchema,
} from 'apollo-server-express';
import {
  resolvers,
  //  schemaDirectives
} from './resolvers';
import { Users } from '../dummyData/user';
import { models } from '../models';
import * as types from './type-defs';

export { ApolloServer, withFilter } from 'apollo-server-express';

const typeDefs = Object.values(types);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  // schemaDirectives,
  inheritResolversFromInterfaces: true,
});

export const properties = {
  schema,
  // subscriptions,
  introspection: true,
  playground: process.env.NODE_ENV == 'development',
  tracing: true,
  /* engine: {
    apiKey: process.env.ENGINE_API_KEY,
  }, */
};

export const context = {
  ...models,
  Users,
};

export default {
  properties,
  context,
};
