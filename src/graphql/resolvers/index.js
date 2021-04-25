import schemaResolvers from './schema-resolvers';
import { IsAuth, UnAuth } from './directive-resolvers';
export const resolvers = {
  ...schemaResolvers,
};
export const schemaDirectives = {
  isAuth: IsAuth,
  unAuth: UnAuth,
};
