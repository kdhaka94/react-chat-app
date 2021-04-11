import MessageModel from './message';

import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

export const PersonalMessageModel = MessageModel.discriminator(
  'PersonalMessage',
  new Schema({
    seen: {
      type: Boolean,
      default: false,
    },
    dateSeen: {
      type: Date,
    },
    delivered: {
      type: Boolean,
      default: false,
    },
    dateDelivered: {
      type: Date,
    },
    authorDeleted: {
      type: Boolean,
      default: false,
    },
    recieverDeleted: {
      type: Boolean,
      default: false,
    },
    deleted: { type: Boolean, default: false },
  })
);
