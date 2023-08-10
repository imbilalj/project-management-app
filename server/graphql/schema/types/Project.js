import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import { Client } from './Client.js';
import { ClientService } from '../../../services/client.service.js';

const clientService = new ClientService();

export const Project = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID, description: 'ID of the project' },
    name: { type: GraphQLString, description: 'Name of the project' },
    description: {
      type: GraphQLString,
      description: 'Description of the project',
    },
    status: { type: GraphQLString, description: 'Status of the project' },
    client: {
      type: Client,
      resolve({ clientId }) {
        return clientService.findById(clientId);
      },
    },
  }),
});
