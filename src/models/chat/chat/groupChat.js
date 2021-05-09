import ChatModel from './chat';

import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

export const GroupChatModel = ChatModel.discriminator(
  'GroupChat',
  new Schema({
    creator: {
      type: ObjectId,
      required: true,
      index: true,
    },
    multi: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
    privacy: {
      type: String,
      default: 'public',
    },
    code: {
      type: String,
    },
    description: {
      type: String,
    },
    profileImage: {
      type: ObjectId,
    },
    admin: {
      type: [ObjectId],
      default: [],
    },
  }).index({ creator: -1, title: -1 }, { unique: true })
);

export default GroupChatModel;
