export const CreateChat = async (
  root,
  { participants, isMulti },
  { ChatModel }
) => {
  if (participants.length <= 0) {
    throw new Error('Select users to create chat');
  }
  
};
