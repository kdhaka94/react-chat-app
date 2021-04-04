export const GetUserById = (_, { id }, { UserModel }) => {
  const user = UserModel.findOne(id);
  if(!user){
    throw new Error(`No user found with ID: ${id}`);
  }
};
