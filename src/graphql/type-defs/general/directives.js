import { gql } from 'apollo-server-express';

export const directives = gql`
  directive @isAuth on FIELD | FIELD_DEFINITION | QUERY 
  directive @isOwner on FIELD | FIELD_DEFINITION | QUERY
  directive @hasRole(role: [String]) on FIELD | FIELD_DEFINITION | QUERY
  directive @unAuth on FIELD | FIELD_DEFINITION | QUERY
`;

export default directives;
