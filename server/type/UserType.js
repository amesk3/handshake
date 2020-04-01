const { GraphQLObjectType, GraphQLInt, GraphQLID, GraphQLString, GraphQLBoolean } = require( 'graphql')
const GraphQLDate = require( 'graphql-date')
const { globalIdField } = require( 'graphql-relay')

const userType =  new GraphQLObjectType({
  name: 'User',
  description: 'User data',
  fields: () => ({
    id: globalIdField('User'),
    _id: {
      type: GraphQLID,
      resolve: user => user._id,
    },
    last_name: {
      type: GraphQLString,
      resolve: user => user.lastName,
    },
    is_recruiter_flag: {
      type: GraphQLBoolean,
      resolve: user => user.isRecruiterFlag,
    },
    email: {
      type: GraphQLString,
      resolve: user => user.email,
    },
    job_seeking_status: {
      type: GraphQLString,
      resolve: user => user.jobSeekingStatus,
    },
    address: {
      type: GraphQLString,
      resolve: user => user.address,
    },
    state: {
      type: GraphQLString,
      resolve: user => user.state,
    },
    city: {
      type: GraphQLString,
      resolve: user => user.city,
    },
    country: {
      type: GraphQLString,
      resolve: user => user.country,
    },
    zip_code: {
      type: GraphQLInt,
      resolve: user => user.zipCode,
    },
    company_id: {
      type: GraphQLString,
      resolve: user => user.companyId,
    },
    experience: {
      type: GraphQLString,
      resolve: user => user.experience,
    },
    education: {
      type: GraphQLString,
      resolve: user => user.education,
    },
    school: {
      type: GraphQLString,
      resolve: user => user.school,
    },
    profile_summary: {
      type: GraphQLString,
      resolve: user => user.profileSummary,
    },
    headline: {
      type: GraphQLString,
      resolve: user => user.headline,
    },
    job_title: {
      type: GraphQLString,
      resolve: user => user.jobTitle,
    },
    profile_img: {
      type: GraphQLString,
      resolve: user => user.profileImg,
    },
    gender: {
      type: GraphQLString,
      resolve: user => user.gender,
    },
    birthdate: {
      type: GraphQLDate,
      resolve: user => user.birthdate,
    },
  }),
  interfaces: () => [NodeInterface],
});

module.exports = { userType }