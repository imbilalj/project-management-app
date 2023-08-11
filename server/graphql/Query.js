import { GraphQLObjectType } from 'graphql';
import { client, clients } from './queries/client.js';
import { project, projects } from './queries/project.js';

export const Query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    client,
    clients,
    project,
    projects,
  }),
});
