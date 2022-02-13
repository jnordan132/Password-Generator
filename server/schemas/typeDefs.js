const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Passwords {
    title: String!
    titlesPassword: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: [User]
    passwords(_id: String): [Passwords]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addPassword(title: String!, titlesPassword: String!): Passwords
  }
`;

module.exports = typeDefs;