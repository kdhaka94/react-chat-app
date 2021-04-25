import {
  ValidationError,
  AuthenticationError,
  ForbiddenError,
  UserInputError,
  makeExecutableSchema,
} from 'apollo-server-express';
import { resolvers, schemaDirectives } from './resolvers';
import { Users } from '../dummyData/user';
import { models } from '../models';
import * as types from './type-defs';
import moment from 'moment';
import bcrypt from 'bcrypt';
import * as utils from '../util';
import jwt from 'jsonwebtoken';
import * as subscriptions from './subscriptions';
export { ApolloServer, withFilter, PubSub } from 'apollo-server-express';

const typeDefs = Object.values(types);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives,
  inheritResolversFromInterfaces: true,
});

export const properties = {
  schema,
  subscriptions,
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
  bcrypt,
  jwt,
  utils,
  ...utils,
  moment,
  ValidationError,
  AuthenticationError,
  ForbiddenError,
  UserInputError,
};

export default {
  properties,
  context,
};
