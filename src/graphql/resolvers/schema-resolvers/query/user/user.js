export const GetUserById = async (root, { id }, { UserModel }) => {
  const user = await UserModel.findById(id);
  if (!user) {
    throw new Error(`No user found with ID: ${id}`);
  }
  return user;
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
