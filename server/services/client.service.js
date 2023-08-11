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

  async create(client) {
    const createdClient = new Client(client);
    return createdClient.save();
  }

  async update(id, update) {
    const updatedClient = Client.findByIdAndUpdate(id, update, { new: true });

    return updatedClient;
  }

  async delete(id) {
    const deletedClient = Client.findOneAndDelete({ _id: id });

    return deletedClient;
  }
}
