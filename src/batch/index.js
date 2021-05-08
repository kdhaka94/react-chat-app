import DataLoader from 'dataloader';
import groupBy from 'lodash.groupby';
import keyBy from 'lodash.keyby';
import { models } from '../models';
import * as User from './user';


const extra = { groupBy, keyBy };

export const batch = {
  User:{
    User:{
      user: new DataLoader(keys => User.User.user(keys, models, extra))
    }
  }
}


export default batch;