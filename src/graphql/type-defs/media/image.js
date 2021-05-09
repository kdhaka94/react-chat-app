import { gql } from 'apollo-server-express';

export const image = gql`
  extend type Query {
    GetImage(id: ID!): Image
    GetAccountImage(id: ID, accountId: ID): Image
    GetMyImage(id: ID): Image
    GetAccountImages(id: ID, opts: OptInput): [Image]
    GetMyImages(opts: OptInput): [Image]
  }

  extend type Mutation {
    UploadImage(data: ImageInput): Image
    UploadImages(data: [ImageInput]): [Image]
    DeleteImage(id: String!): Image @isAuth
  }

  type Image implements Media {
    id: String!
    title: String
    account: User
    ext: String
    path: String
    fullPath: String
    url: String
    body: String
    description: String
    mimeType: String
    type: String
    orientation: Orientation
    width: Float
    height: Float
    dateCreated: Date
    createdAt: Date
    updatedAt: Date
  }

  input ImageInput {
    ext: String!
    path: String!
    description: String
    privacy: String
    albumId: String
    type: String!
    title: String
  }

  input ImageData {
    height: Float
    width: Float
    orientation: Orientation
  }
`;

export default image;
