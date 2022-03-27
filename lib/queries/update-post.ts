import { gql } from '@apollo/client';

const UPDATE_POST = gql`
  mutation (
    $id: ID!,
    $input: UpdatePostInput!
  ) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
    }
  }
`;

export default UPDATE_POST;