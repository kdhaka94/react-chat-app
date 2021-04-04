import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;
ObjectId.prototype.valueOf = () => this.toString();

export const UserModel = mongoose.model(
  'User',
  new Schema(
    {
      email: {
        type: String,
        unique: true,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      dob: {
        type: Date,
      },
    },
    { timestamps: true }
  ).index({ unique: true })
);
