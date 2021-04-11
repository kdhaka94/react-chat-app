import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

export const MessageModel = model(
  'Messages',
  new Schema(
    {
      chatId: {
        type: ObjectId,
        required: true,
        ref: 'Chat',
      },
      body: {
        type: String,
        required: true,
      },
      mediaId: {
        type: [ObjectId],
        required: true,
      },
      author: {
        type: ObjectId,
        required: true,
        ref: 'users',
      },
      type: {
        type: String,
      },
    },
    {
      timestamps: true,
      collection: 'Messages',
      discriminatorKey: 'type',
    }
  )
);

export default MessageModel;
