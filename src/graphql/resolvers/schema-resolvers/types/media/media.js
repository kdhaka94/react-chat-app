export const id = async (root) => root?._id?.toString();

export const __resolveType = async (root) => root?.type;
