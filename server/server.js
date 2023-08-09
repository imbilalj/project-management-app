import express from 'express';
import dotenv from 'dotenv';
import { Database } from './utils/Database.js';

dotenv.config();

const port = process.env.PORT;

const app = express();

const db = new Database();

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
