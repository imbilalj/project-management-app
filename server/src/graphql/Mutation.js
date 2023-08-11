import { GraphQLObjectType } from 'graphql';
import {
  createClient,
  updateClient,
  deleteClient,
} from './mutations/client.js';
import {
  createProject,
  updateProject,
  deleteProject,
} from './mutations/project.js';

export const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // Client
    createClient,
    updateClient,
    deleteClient,
    // Project
    createProject,
    updateProject,
    deleteProject,
  }),
});
