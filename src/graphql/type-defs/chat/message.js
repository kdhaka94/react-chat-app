import { gql } from 'apollo-server-express';

export const mesage = gql`
  extend type Query {
    GetMessages(chatId: ID): [Message]
  }
  type Message {
    body: String
    sender: User
    recipient: [User]
    createdAt: Date
  }
`;
