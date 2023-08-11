import { GraphQLID, GraphQLNonNull } from 'graphql';
import { Client } from '../types/Client.js';
import {
  CreateClientInput,
  UpdateClientInput,
} from '../types/inputs/ClientInput.js';
import { ClientService } from '../../../services/client.service.js';

const clientService = new ClientService();

export const createClient = {
  type: Client,
  args: {
    input: { type: new GraphQLNonNull(CreateClientInput) },
  },
  resolve(_, { input }) {
    return clientService.create(input);
  },
};

export const updateClient = {
  type: Client,
  args: {
    input: { type: new GraphQLNonNull(UpdateClientInput) },
  },
  resolve(_, { input }) {
    const { id, ...update } = input;

    return clientService.update(id, update);
  },
};

export const deleteClient = {
  type: Client,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(_, { id }) {
    return clientService.delete(id);
  },
};
