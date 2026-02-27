interface MockApiRequest {
  message: string;
}

interface MockApiResponse {
  reply: string;
}

const mockReplies = [
  'That is a great question. Let me break it down step by step.',
  'I understand. Here is a practical way to approach this.',
  'Nice idea. You can start small and iterate from there.',
  'Good direction. Make sure to test one piece at a time.',
  'Absolutely. Focus on clarity first, then optimize later.'
];

const randomDelayMs = (): number => 800 + Math.floor(Math.random() * 1000);

const pickReply = (message: string): string => {
  const normalized = message.trim().toLowerCase();
  if (normalized.includes('hello') || normalized.includes('hi')) {
    return 'Hello! How can I help you today?';
  }

  const index = Math.floor(Math.random() * mockReplies.length);
  return mockReplies[index];
};

export const sendMessageToAi = async ({ message }: MockApiRequest): Promise<MockApiResponse> => {
  await new Promise((resolve) => {
    setTimeout(resolve, randomDelayMs());
  });

  return {
    reply: pickReply(message)
  };
};
