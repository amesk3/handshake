const fs = require("fs");
const path = require("path");
const express = require('express');
const graphqlHTTP = require( 'express-graphql');
const { buildSchema } = require('graphql')
const { postgraphile } = require("postgraphile");

const schema = require('./schema')

const app = express();


app.use(
  postgraphile('postgres://localhost:5432/handshake', 'public', {
    graphiql: true,
    enableCors: true,
    schema
  })
);


app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
