import { gql } from 'apollo-server-express';

export const GroupChat = gql`
  extend type Query {
    GetAllGroupChat(opts: OptInput): [GroupChat]
    GetGroupChat(id: ID!): GroupChat
    GetGroupChatMembers(id: ID!): [User]
  }

  extend type Mutation {
    CreateGroupChat(
      participants: [ID!]!
      title: String!
      privacy: String!
      image: Upload
      description: String
    ): GroupChat
    DeleteGroupChat(id: ID!): GroupChat
    """
    Group chat update
    """
    UpdateGroupChat(data: GroupChatInput!, id: ID!): GroupChat
    AssignAdminToGroupChat(userId: ID!, chatId: ID!): GroupChat
    AddUserToGroupChat(userId: ID!, chatId: ID!): GroupChat
    AddUsersToGroupChat(userIds: [ID!]!, chatId: ID!): GroupChat
    """
    Delete users from the group chat
    """
    RemoveUsersFromGroupChat(userIds: [ID!]!, chatId: ID!): GroupChat
    """
    Delete a user from the group chat
    """
    RemoveUserFromGroupChat(userId: ID!, chatId: ID!): GroupChat
    """
    Leave a Group
    """
    LeaveGroupChat(id: ID!): GroupChat
    BannedUsersFromGroupChat(userIds: [ID!]!, chatId: ID!): GroupChat
    UnBannedUsersFromGroupChat(userIds: [ID!]!, chatId: ID!): GroupChat
    AddReadOnlyUsersToGroupChat(userIds: [ID!]!, chatId: ID!): GroupChat
    RemoveReadOnlyUsersFromGroupChat(userIds: [ID!]!, chatId: ID!): GroupChat
  }

  type GroupChat implements Chat {
    id: ID!
    type: String!
    description: String
    participants: [User!]!
    messages(n: Int): [Message]
    lastMsg: Message
    multi: Boolean
    isAdmin: Boolean
    isCreator: Boolean
    admin: [User]
    profileImage: Image
    privacy: String
    title: String
    creator: User
    active: Boolean
    newMsg: Boolean
    dateCreated: Date
    dateUpdated: Date
  }

  input GroupChatInput {
    participants: [ID!]!
    admin: [ID]
    title: String
    privacy: String
    description: String
  }
`;
