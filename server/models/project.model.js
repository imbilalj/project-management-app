import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    status: {
      type: String,
      enum: ['Open', 'In Progress', 'Completed'],
      required: true,
    },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  },
  {
    timestamps: true,
  }
);

export const Project = mongoose.model('Project', ProjectSchema);
