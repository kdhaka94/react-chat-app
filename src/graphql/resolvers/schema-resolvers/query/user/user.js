export const GetUserById = async (root, { id }, { UserModel }) => {
  const user = await UserModel.findById(id);
  if (!user) {
    throw new Error(`No user found with ID: ${id}`);
  }
  return user;
};


export const GetAllUsers = async (root, params, { UserModel }) => {
  return await UserModel.find();
};

export const GetMe = async (root, params, context) => {
  const { user, UserModel } = context;
  const me = await UserModel.findOne({ _id: user.id });
  return me;
};

export const GetOnlineUsers = async (root, params, { UserModel }) => {
  const onlineUsers = await UserModel.find({ online: true });
  if (!onlineUsers) {
    return [];
  }
  return onlineUsers;
};
