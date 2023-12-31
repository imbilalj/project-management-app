import { GraphQLSchema } from 'graphql';
import { Query } from './Query.js';
import { Mutation } from './Mutation.js';

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
