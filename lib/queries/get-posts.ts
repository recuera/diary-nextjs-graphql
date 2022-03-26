import { gql } from '@apollo/client';

const GET_POSTS = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;

export default GET_POSTS;