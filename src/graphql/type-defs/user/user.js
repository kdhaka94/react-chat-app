import { gql } from 'apollo-server';

export const user = gql`
  extend type Query {
    GetUserById(id: ID!): User
    LoginUser(data: LoginInput): Login!
    GetAllUsers: [User]
    GetMe: User
    GetOnlineUsers: [User]
  }
  extend type Mutation {
    SignUpUser(data: SignUpInput!): User!
  }
  extend type Subscription {
    OnlineUsers: User
    NewUser: User!
  }
  type Login {
    token: String!
    message: String!
    user: User!
  }
  type User {
    id: ID!
    email: String!
    password: String
    firstName: String
    lastName: String
    fullName: String
    gender: Gender!
    online: String!
    createdAt: Date!
    updatedAt: Date!
    lastSeen: Date
  }
  input SignUpInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    dob: Date
    gender: Gender!
  }
  enum Gender {
    Male
    Female
  }
  input LoginInput {
    email: String!
    password: String!
  }
`;

export default user;
