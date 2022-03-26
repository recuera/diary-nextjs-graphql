import { gql } from '@apollo/client';

const GET_POST_DETAIL = gql`
  query ($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;

export default GET_POST_DETAIL;