import MessageModel from './message';

import { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

export const PersonalMessageModel = MessageModel.discriminator(
  'PersonalMessage',
  new Schema({
    mentions: [
      {
        accountId: {
          type: ObjectId,
          required: true,
          index: true,
        },
        display: {
          type: String,
        },
      },
    ],
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
    replyTo: {
      type: ObjectId,
      default: null,
    },
    deleted: { type: Boolean, default: false },
  })
);
