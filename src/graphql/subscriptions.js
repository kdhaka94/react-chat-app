import jwt from 'jsonwebtoken';
import { models } from '../models';
export const path = '/';

export const onConnect = async (param, webSocket, context) => {
  if (param.authorization) {
    try {
      const { UserModel } = models;
      const [, token] = param.authorization.split(' ');
      const { id, email } = await jwt.verify(token, process.env.JWT_SECRET);
      await UserModel.findByIdAndUpdate(id, { $set: { online: true } });
      return { user: { id, email, online: 'ONLINE' } };
    } catch (err) {
      console.log({ err });
      return { user: null };
    }
  }
  return { user: null };
};

export const onDisconnect = async (a, b) => {
  console.log('Tata');
  console.log({ a, b });
  // await UserModel.findOneAndUpdate(
  //   { _id: id },
  //   { lastSeen: new Date(), online: false }
  // );
};
