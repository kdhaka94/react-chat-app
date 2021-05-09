import { gql } from 'apollo-server-express';

export const media = gql`
  extend type Mutation {
    UploadMedia(data: MediaInput): Media
    DeleteMedia(id: String!): Media @isAuth
  }

  interface Media {
    id: String!
    title: String
    account: User
    ext: String
    path: String
    fullPath: String
    url: String
    body: String
    mimeType: String
    description: String
    createdAt: Date
    dateCreated: Date
    updatedAt: Date
  }

  input MediaInput {
    ext: String!
    path: String!
    description: String
    privacy: String
    album: String
    type: String!
  }
`;

export default media;
