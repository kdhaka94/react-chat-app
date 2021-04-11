import { gql } from 'apollo-server-express';

export const root = gql`
  type Query

  type Mutation

  type Subscription
`;

export default root;