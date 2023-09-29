const typeDefs = `
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    bookId: String!
    title: String!
    authors: [String]
    description: String!
    image: String
    link: String
  }

  input SavedBookInput {
    bookId: String!
    title: String!
    authors: [String]
    description: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(savedData: SavedBookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
