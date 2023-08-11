import { GraphQLEnumType } from 'graphql';
import { ProjectStatus } from '../../../constants/project-status.js';

export const ProjectStatusEnum = new GraphQLEnumType({
  name: 'ProjectStatusEnum',
  description: 'Project Status Values',
  values: {
    OPEN: {
      value: ProjectStatus.OPEN,
      description: 'Project is not started yet',
    },
    INPROGRESS: {
      value: ProjectStatus.INPROGRESS,
      description: 'Project is in progress',
    },
    COMPLETED: {
      value: ProjectStatus.COMPLETED,
      description: 'Project is completed',
    },
  },
});
