import { gql } from 'apollo-server';

export const user = gql`
  extend type Query {
    GetUserById(id: Int!): User
  }
  extend type Mutation {
    SignUpUser(data: SignUpInput!): User
  }
  type User {
    email: String
    id: ID
    password: String
    name: String
  }
  input SignUpInput {
    firstName: String
    LastName: String
    email: String
    password: String
    dob: Date
  }
`;

export default user;
