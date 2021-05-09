import { gql } from 'apollo-server-express';

export const file = gql`

input FileInput {
  fileName: String!
  mimeType: String!
  encoding: String!
}
`;

export default file;
