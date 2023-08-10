import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';
import { Project } from '../types/Project.js';
import { ProjectService } from '../../../services/project.service.js';

const projectService = new ProjectService();

export const project = {
  type: Project,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(_, { id }) {
    return projectService.findById(id);
  },
};

export const projects = {
  type: new GraphQLList(Project),
  resolve() {
    return projectService.findAll();
  },
};
