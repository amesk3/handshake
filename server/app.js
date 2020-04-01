const express = require( 'express');
const graphqlHTTP = require( 'express-graphql');
const { buildSchema } = require('graphql')
// const schema = require( './schema')

// import bodyParser from 'bodyparser';
// import cors from 'cors';

// const router = new Router();

const schema = buildSchema(`
type Query {
  feed: [Post!]!
  drafts: [Post!]!
  post(id: ID!): Post
}

type Mutation {
  createDraft(title: String!, content: String): Post
  deletePost(id: ID!): Post
  publish(id: ID!): Post
}

type Post {
  id: ID!
  published: Boolean!
  title: String!
  content: String!
}

`);

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
