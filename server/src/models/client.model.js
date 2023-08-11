import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail.js';

const ClientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: (value) => isEmail(value),
        message: (props) => `${props.value} is not a valid email address`,
      },
    },
    phone: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export const Client = mongoose.model('Client', ClientSchema);
