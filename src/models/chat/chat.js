import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

export const ChatModel = model(
  'Chat',
  new Schema(
    {
      participents: {
        type: [ObjectId],
        required: true,
        ref: 'users',
      },
      type: {
        type: String,
      },
    },
    {
      timestamps: true,
      discriminatorKey: 'type',
      collection: 'Chat',
    }
  )
);
