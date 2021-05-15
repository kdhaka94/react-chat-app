import { gql } from 'apollo-server-express';

export const chat = gql`
  extend type Query {
    GetChat(chatId: ID): Chat
    GetMyChats: [Chat]
  }
  extend type Mutation {
    CreateChat(chat: ChatInput!): Chat
    DeleteChat(id: ID!): Chat
    DeleteChats(ids: [ID!]!): [Chat]
    UpdateChat(id: ID!): Chat
  }

  interface Chat {
    id: ID!
    participants: [User!]!
    messages(n: Int): [Message]

    lastMsg: Message
    active: Boolean
    type: String!
    newMsg: Boolean
    dateCreated: Date
    dateUpdated: Date
  }
  input ChatInput {
    participants: [ID!]!
    type: String
  }
`;
