export const GetUserById = async (root, { id }, { batch }) => {
  const user = await batch.User.User.user.load(id);
  if (!user) {
    throw new Error(`No user found with ID: ${id}`);
  }
  return user;
};

export const GetAllUsers = async (root, params, { UserModel }) =>
  await UserModel.find();

export const GetMe = async (root, params, { user, batch }) => {
  const me = await batch.User.User.user.load(user.id);
  return me;
};

export const GetOnlineUsers = async (root, params, { UserModel }) => {
  const onlineUsers = await UserModel.find({ online: true });
  if (!onlineUsers) {
    return [];
  }
  return onlineUsers;
};
