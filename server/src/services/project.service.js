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

  async create(project) {
    const createdProject = new Project(project);

    return createdProject.save();
  }

  async update(id, update) {
    const updatedProject = Project.findByIdAndUpdate(id, update, { new: true });

    return updatedProject;
  }

  async delete(id) {
    const deletedProject = Project.findOneAndDelete({ _id: id });

    return deletedProject;
  }
}
