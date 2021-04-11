import jwt from 'jsonwebtoken';
import { models } from '../models';
import { pubSub } from '../db';
import { CONSTANTS } from '../util';
export const path = '/';

const { UserModel } = models;

export const onConnect = async (param, webSocket, context) => {
  if (param.authorization) {
    try {
      const [, token] = param.authorization.split(' ');
      const { id, email } = await jwt.verify(token, process.env.JWT_SECRET);
      const user = await UserModel.findByIdAndUpdate(id, {
        $set: { online: true, lastSeen: new Date() },
      });
      console.log({ user, id, email });
      pubSub.publish(CONSTANTS.USER_ONLINE, { OnlineUsers: user });
      return { user: { id, email, online: 'ONLINE' } };
    } catch (err) {
      console.log({ err });
      return { user: null };
    }
  }
  return { user: null };
};

export const onDisconnect = async (ws, context) => {
  const initialContext = await context.initPromise;
  if (initialContext.user) {
    try {
      const id = initialContext.user.id;
      const user = await UserModel.findOneAndUpdate(id, {
        $set: {
          lastSeen: new Date(),
          online: false,
        },
      });
      pubSub.publish(CONSTANTS.USER_ONLINE, { OnlineUsers: user });
    } catch (err) {
      throw new Error(err);
    }
  }
};
