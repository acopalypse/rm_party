import { gql } from '@apollo/client';

export const BLOCK_CHARACTER = gql`
  fragment MyChar on Character {
    block
  }
`;
