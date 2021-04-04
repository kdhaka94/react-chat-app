import { gql } from 'apollo-server';

export const user = gql`
  extend type Query {
    GetUserById(id:Int): User
  }
  type User{
    email:String,
    id:Int,
    password:String,
    name:String
  }
`;

export default user;