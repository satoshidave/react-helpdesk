const axios = require('axios');
const graphql = require('graphql');

const {
  GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLNonNull, GraphQLSchema, GraphQLList,
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'Users',
  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: GraphQLString },
    name: { type: GraphQLString },
    role: { type: GraphQLInt },
    tickets: {
      type: new GraphQLList(TicketsType),
      resolve(parentValue, args) {
        return axios.post('http://127.0.0.1:9000/incidences/get', { user_id: parentValue.id }).then(response => response.data.data);
      },
    },
  }),
});

const TicketsType = new GraphQLObjectType({
  name: 'Tickets',
  fields: () => ({
    id: { type: GraphQLInt },
    subject: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLInt },
    comment: { type: GraphQLString },
    user_id: { type: GraphQLInt },
    user: {
      type: UserType,
      resolve(parentValue, args) {
        return axios.post('http://127.0.0.1:9000/users/get', { id: parentValue.user_id }).then(response => response.data);
      }
    }
  }),
});

const query = new GraphQLObjectType({
  name: 'rootQuery',
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parentValue, args) {
        return axios.post('http://127.0.0.1:9000/users/get', { id: args.id }).then(response => response.data);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      args: {
        role: { type: GraphQLInt },
      },
      resolve(parentValue, args) {
        const { role } = args;
        if (role === 1) {
          return axios.post('http://127.0.0.1:9000/users/allin', { role }).then(response => response.data);
        }
      },
    },
    tickets: {
      type: new GraphQLList(TicketsType),
      args: {
        role: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        if (args.role === 1) {
          return axios.post('http://127.0.0.1:9000/incidences/allin', { role: args.role }).then(response => response.data)
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query,
});
