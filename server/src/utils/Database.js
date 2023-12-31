import mongoose from 'mongoose';

export class Database {
  constructor() {
    this.connect();
  }

  connect() {
    try {
      mongoose.connect(process.env.MONGODB_URI);

      console.log('Connected to MongoDB!');
    } catch (error) {
      console.log(`Error connecting to MongoDB: ${error}`);
    }
  }
}
