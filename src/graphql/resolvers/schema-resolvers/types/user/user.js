export const id = (root) => root?._id?.toString();

export const fullName = (root) => `${root.firstName} ${root.lastName}`;

export const online = (root) => (root?.online ? 'ONLINE' : 'OFFLINE');
