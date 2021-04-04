import { gql } from 'apollo-server';

export const user = gql`
  extend type Query {
    GetUserById(id: ID!): User
  }
  extend type Mutation {
    SignUpUser(data: SignUpInput!): User
  }
  type User {
    email: String
    id: ID
    password: String
    fullName: String
    createdAt:Date
    updatedAt: Date
  }
  input SignUpInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    dob: Date
    
  }
`;

export default user;
