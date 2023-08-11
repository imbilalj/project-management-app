import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const Client = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID, description: 'ID of the client' },
    name: { type: GraphQLString, description: 'Name of the client' },
    email: { type: GraphQLString, description: 'Email address of the client' },
    phone: { type: GraphQLString, description: 'Phone number of the client' },
  }),
});
