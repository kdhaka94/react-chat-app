export const SignUpUser = async (root, { data }, context) => {
  try {
    const { UserModel, bcrypt } = context;
    data.password = await bcrypt.hash(data.password, 11);
    const user = await new UserModel({
      ...data,
    }).save();
    return user;
  } catch (err) {
    throw err;
  }
};
