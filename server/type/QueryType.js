const { GraphQLObjectType, GraphQLString } = require('graphql')
const UserType = require('./UserType');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      // `args` describes the arguments that the `user` query accepts
      args: {
        id: { type: GraphQLString }
      },
      resolve: () => {
        return 'hello';
      }
    }
  }
});

module.exports = { QueryType}