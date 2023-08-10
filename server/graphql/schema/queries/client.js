import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';
import { Client } from '../types/Client.js';
import { ClientService } from '../../../services/client.service.js';

const clientService = new ClientService();

export const client = {
  type: Client,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(_, { id }) {
    return clientService.findById(id);
  },
};

export const clients = {
  type: new GraphQLList(Client),
  resolve() {
    return clientService.findAll();
  },
};
