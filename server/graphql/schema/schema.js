import { GraphQLSchema } from 'graphql';
import { Query } from './Query.js';

export const schema = new GraphQLSchema({
  query: Query,
});
