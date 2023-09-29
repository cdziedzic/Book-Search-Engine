import { gql } from '@apollo/client';

export const QUERY_ME = gql`
 query me {
  me {
    _id
    bookCount
    savedBooks {
      _id
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;
