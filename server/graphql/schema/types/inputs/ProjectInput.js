import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import { ProjectStatusEnum } from '../enums/ProjectStatusEnum.js';
import { ProjectStatus } from '../../../../constants/project-status.js';

export const CreateProjectInput = new GraphQLInputObjectType({
  name: 'CreateProjectInput',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    status: { type: ProjectStatusEnum, defaultValue: ProjectStatus.OPEN },
    clientId: { type: new GraphQLNonNull(GraphQLID) },
  },
});

export const UpdateProjectInput = new GraphQLInputObjectType({
  name: 'UpdateProjectInput',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: ProjectStatusEnum },
  },
});
