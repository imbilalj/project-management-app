import { Project } from '../models/project.model.js';

export class ProjectService {
  async findById(id) {
    let project;

    try {
      project = await Project.findById(id);
    } catch (error) {
      project = null;
    }

    return project;
  }

  async findAll() {
    return await Project.find();
  }
}
