export const CreateChat = async (root, { chat }, { ChatModel, users }) => {
  if (chat.participants.length <= 0) {
    throw new Error('Select users to create chat');
  }
  if (!chat.creator) {
    chat.creator = user.id;
  }
  const chat = new ChatModel(chat);
  const doc = await chat.save();
  return doc;
};

export const DeleteChat = async (root, { chatId }, { ChatModel }) =>
  ChatModel.findByIdAndRemove(chatId).then((removedChat) => {
    if (!removedChat) {
      throw new Error('Error deleting chat');
    }
    return removedChat;
  });
export const DeleteChats = async (root, { chatIds }, { ChatModel }) =>
  ChatModel.remove({ _id: { $in: chatIds } }).then((removedChats) => {
    if (!removedChats) {
      throw new Error('Error deleting chat, non of the chats were deleted');
    }
    return removedChats;
  });
