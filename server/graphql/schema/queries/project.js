import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';
import { Project } from '../types/Project.js';

export const project = {
  type: Project,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(_, { id }) {
    // Return project
  },
};

export const projects = {
  type: new GraphQLList(Project),
  resolve() {
    // Return all projects
  },
};
