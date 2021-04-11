// export const OnlineUsers = (root, params, context) => ({pubSub.asyncIterator('Online Users')})
//   ;
export const NewUser = {
  subscribe: (root, params, { pubSub, CONSTANTS }) =>
    pubSub.asyncIterator(CONSTANTS.NEW_USER),
};
