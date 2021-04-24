export const id = async (root) => root?._id?.toString();

export const dateCreated = async (root, _, { moment }) =>
  moment(root.createdAt).fromNow();
