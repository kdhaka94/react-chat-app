import { gql } from 'apollo-server-express';

export const mesage = gql`
  extend type Query {
    GetMessages(chatId: ID): [Message]
    CreatePersonalMessage(chatId: ID, message: MessageInput): Message
  }
  type Message {
    id: ID
    body: String
    sender: User
    recipient: [User]
    createdAt: Date
    dateCreated: String
  }
  input MessageInput {
    body: String!
    to: ID!
    replyTo: ID
  }
`;
