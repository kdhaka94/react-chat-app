export const GetUserById = async (_, { id }, { UserModel }) => {
  const user = await UserModel.findById(id);
  if (!user) {
    throw new Error(`No user found with ID: ${id}`);
  }
  return user;
};
