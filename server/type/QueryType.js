const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')
const UserType = require('./UserType');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      // `args` describes the arguments that the `user` query accepts
      args:{ id: { type: GraphQLID } },
      resolve(_, args) {
        return _.find({ id: args.id});
      }
    }
  }
});

module.exports = { QueryType}