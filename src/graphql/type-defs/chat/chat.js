import { gql } from 'apollo-server-express';

export const chat = gql`
  extend type Query {
    GetChat(chatId: ID): Chat
    GetMyChats: [Chat]
  }
  extend type Mutation {
    CreateChat(participants: [ID]): Chat
    DeleteChat(chatId: ID): String
  }
  
  type Chat {
    messages: [Message]
    participants: [User]
    createdAt: Date
    type: String
  }
`;
