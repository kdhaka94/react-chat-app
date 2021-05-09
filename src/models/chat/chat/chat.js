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
      updateChange: {
        type: Date,
        default: new Date(),
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

export default ChatModel;
