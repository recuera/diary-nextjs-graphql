import { gql } from '@apollo/client';

const DELETE_POST = gql`
  mutation (
    $id: ID!
  ) {
    deletePost(id: $id)
  }
`;

export default DELETE_POST;