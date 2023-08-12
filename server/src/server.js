import express from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import { Database } from './utils/Database.js';
import { schema } from './graphql/schema.js';

dotenv.config();

const port = process.env.PORT;

const app = express();

new Database();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
