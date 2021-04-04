export const GetMessages = (_, { chatId }, context) => {
  return [
    {
      body: 'Hello There!',
      sender: '1',
      recipient: ['2'],
      createdAt: new Date(),
    },
  ];
};
