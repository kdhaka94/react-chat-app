export const SignUpUser = async (root, { data }, context) => {
  try {
    const copiedData = Object.assign({}, data);
    if (
      copiedData.email.trim() == '' ||
      copiedData.password.trim() == '' ||
      copiedData.firstName.trim() == '' ||
      copiedData.lastName.trim() == ''
    ) {
      throw new Error('Fields cannot be empty');
    }
    if (
      copiedData.email.indexOf('@') == -1 ||
      copiedData.email.indexOf('.') == -1
    ) {
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

export const LoginUser = async (root, { data }, { UserModel, jwt, bcrypt }) => {
  const { email, password } = data;
  if (email.trim() == '' || password.trim() == '') {
    throw new Error('Email or password cannot be empty');
  }
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error(`Wrong email or password`);
  }
  const result = await bcrypt.compare(password, user.password);
  if (!result) {
    throw new Error(`Wrong password`);
  }
  const login = {};
  login.user = { ...user._doc, password: null };
  login.token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
  login.message = 'Login successful';
  return login;
};
