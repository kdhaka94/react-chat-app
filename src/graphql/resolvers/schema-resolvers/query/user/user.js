export const GetUserById = (_, { id }, { Users }) => {
  const user = Users[id - 1];
  if (!user) {
    throw new Error('No User with id: ' + id);
  }
  return user;
};
