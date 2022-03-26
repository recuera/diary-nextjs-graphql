import { gql } from '@apollo/client';

const GET_POST_DETAIL = gql`
  query {
    post(id: 1) {
      id
      title
      body
    }
  }
`;

export default GET_POST_DETAIL;