import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query getCharacterByName($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
        block @client
      }
    }
  }
`;
