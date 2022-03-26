import { gql } from '@apollo/client';

const CREATE_POST = gql`
  mutation (
    $input: CreatePostInput!
  ) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

export default CREATE_POST;