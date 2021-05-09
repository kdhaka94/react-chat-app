import ChatModel from './chat';

import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

export const PersonalChatModel = ChatModel.discriminator(
  'PersonalChat',
  new Schema({
    hash: {
      type: String,
      unique: true,
      index: -1,
    },
  }).pre('save', function (next) {
    this.hash = this.participants.sort().toString();
    next();
  })
);

export default PersonalChatModel;
