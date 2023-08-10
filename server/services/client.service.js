import { Client } from '../models/client.model.js';

export class ClientService {
  async findById(id) {
    let client;

    try {
      client = await Client.findById(id);
    } catch (error) {
      client = null;
    }

    return client;
  }

  async findAll() {
    return await Client.find();
  }
}
