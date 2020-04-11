const { GraphQLObjectType, GraphQLString } = require('graphql')
const ChangePassword = require('../mutation/ChangePasswordMutation');


const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({

  })
});

module.exports = { MutationType }