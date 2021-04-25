const hasRole = (next, source, { role }, { user }) => {
  
  if (!user) {
    throw new Error('You are not logged in');
  }

  if (!role.some(r => user.role.includes(r))) {
    throw new Error('You don\'t possesed the appropriate permission for this action');
  }

  return next();
};

const isAuth = (next, source, args, {
  user,
}) => {
  if (!user) {
    throw new Error('You are not logged in');
  }
  return next();
};

const isOwner = (next, source, args, {
  user,
}) => {
  if (!user) {
    throw new Error('You are not logged in');
  }
  return next();
};

const unAuth = (next, source, args, {
  user,
}) => {
  if (user) {
    throw new Error('You must be logged out to perform this action');
  }

  return next();
};

export default {
  hasRole,
  isAuth,
  isOwner,
  unAuth,
};
