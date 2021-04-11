export const SignUpUser = async (root, { data }, context) => {
  try {
    const copiedData = Object.assign({},data);
    if (
      copiedData.email.trim() == '' ||
      copiedData.password.trim() == '' ||
      copiedData.firstName.trim() == '' ||
      copiedData.lastName.trim() == ''
    ) {
      throw new Error('Fields cannot be empty');
    }
    if (copiedData.email.indexOf("@") == -1 || copiedData.email.indexOf('.') == -1) {
      throw new Error('Invaild email');
    }
    const { UserModel, bcrypt, pubSub, CONSTANTS } = context;
    data.password = await bcrypt.hash(data.password, 11);
    const user = await new UserModel({
      ...data,
    }).save();
    pubSub.publish(CONSTANTS.NEW_USER, { NewUser: user });
    return user;
  } catch (err) {
    throw err;
  }
};
