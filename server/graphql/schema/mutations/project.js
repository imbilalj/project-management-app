import { GraphQLID, GraphQLNonNull } from 'graphql';
import { Project } from '../types/Project.js';
import {
  CreateProjectInput,
  UpdateProjectInput,
} from '../types/inputs/ProjectInput.js';
import { isObjectId } from '../../../utils/functions.js';
import { ProjectService } from '../../../services/project.service.js';

const projectService = new ProjectService();

export const createProject = {
  type: Project,
  args: {
    input: { type: new GraphQLNonNull(CreateProjectInput) },
  },
  resolve(_, { input }) {
    if (!isObjectId(input.clientId)) {
      throw new Error('Invalid Object ID');
    }

    return projectService.create(input);
  },
};

export const updateProject = {
  type: Project,
  args: {
    input: { type: new GraphQLNonNull(UpdateProjectInput) },
  },
  resolve(_, { input }) {
    const { id, ...update } = input;

    return projectService.update(id, update);
  },
};

export const deleteProject = {
  type: Project,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(_, { id }) {
    return projectService.delete(id);
  },
};
