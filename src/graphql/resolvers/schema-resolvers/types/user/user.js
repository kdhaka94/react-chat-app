export const id = async (root) => root?._id?.toString();

export const fullName = async (root) => `${root.firstName} ${root.lastName}`;

export const online = async (root) => (root?.online ? 'ONLINE' : 'OFFLINE');

export const lastSeen = async (root, _, { moment }) =>
  moment(root.lastSeen).fromNow();

export const me = async (root, _, { user }) => root?.id == user?.id;
