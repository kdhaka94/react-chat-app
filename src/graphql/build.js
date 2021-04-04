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
import models from '../models';
import * as types from './type-defs';

export { ApolloServer, withFilter } from 'apollo-server-express';

const type_Defs = Object.values(types);
console.log({type_Defs})
const schema = makeExecutableSchema({
  typeDefs:type_Defs,
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
};

export default {
  properties,
  context,
};
