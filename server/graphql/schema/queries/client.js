import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';
import { Client } from '../types/Client.js';

export const client = {
  type: Client,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(_, { id }) {
    // Return client
  },
};

export const clients = {
  type: new GraphQLList(Client),
  resolve() {
    // Return all clients
  },
};
