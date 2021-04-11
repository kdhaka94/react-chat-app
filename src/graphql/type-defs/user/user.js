import { gql } from 'apollo-server';

export const user = gql`
  extend type Query {
    GetUserById(id: ID!): User
    LoginUser(data: LoginInput): Login
    GetAllUsers: [User]
    GetMe: User
  }
  extend type Mutation {
    SignUpUser(data: SignUpInput!): User
  }
  extend type Subscription {
    OnlineUsers: [User]
    NewUser: User!
  }
  type Login {
    token: String
    message: String
    user: User
  }
  type User {
    id: ID
    email: String
    password: String
    fullName: String
    online: String
    createdAt: Date
    updatedAt: Date
  }
  input SignUpInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    dob: Date
  }
  input LoginInput {
    email: String!
    password: String!
  }
`;

export default user;
