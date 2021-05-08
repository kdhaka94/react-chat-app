const user = async (userIds, { UserModel }, { keyBy }) =>
  UserModel.find({ _id: { $in: userIds } }).then((users) => {
    const usersById = keyBy(users, '_id');
    return userIds.map((foundUser) => usersById[foundUser]);
  });

export default {
  user,
};
