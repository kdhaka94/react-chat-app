import { gql } from 'apollo-server-express';

export const chat = gql`
  extend type Query {
    GetChat(chatId: ID): Chat
    GetMyChats: [Chat]
  }
  type Chat {
    messages: [Message]
    participants: [User]
    createdAt: Date
    type: String
  }
`;
