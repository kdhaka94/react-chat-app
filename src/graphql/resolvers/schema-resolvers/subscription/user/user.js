export const OnlineUsers = {
  subscribe: (root, params, { CONSTANTS, pubSub }) =>
    pubSub.asyncIterator(CONSTANTS.USER_ONLINE),
};
export const NewUser = {
  subscribe: (root, params, { pubSub, CONSTANTS }) =>
    pubSub.asyncIterator(CONSTANTS.NEW_USER),
};
