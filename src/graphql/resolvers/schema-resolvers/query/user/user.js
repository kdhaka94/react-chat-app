import { Users } from '../../../../../dummyData/user';

export const GetUserById = (_,params,context) => {
  return Users[params.id-1]
};
