import mongoose from 'mongoose';
import { ProjectStatus } from '../constants/project-status.js';

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    status: {
      type: String,
      enum: Object.values(ProjectStatus),
      default: ProjectStatus.OPEN,
      required: true,
    },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  },
  {
    timestamps: true,
  }
);

export const Project = mongoose.model('Project', ProjectSchema);
