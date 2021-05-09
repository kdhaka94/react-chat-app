import { gql } from 'apollo-server-express';

export const orientation = gql`

  enum Orientation {
    "landscape"
    LANDSCAPE
    "portrait"
    PORTRAIT
    "normal"
    NORMAL
  }
`;

export default orientation;
