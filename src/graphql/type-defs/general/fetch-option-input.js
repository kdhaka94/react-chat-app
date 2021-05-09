import { gql } from 'apollo-server-express';

export const fetchOptionInput = gql`

input OptInput {
  limit: Int
  skip: Int
  sort: Int
}


`;

export default fetchOptionInput;
