const RESPONSES = [
  'Great question! This is a mock response from the assistant.',
  'I understand. In a real app, this would come from your backend AI endpoint.',
  'You can replace this function with a fetch call to your own API later.',
  'Thanks for testing the demo. The typing indicator is currently simulated.',
];

const randomDelay = () => 900 + Math.floor(Math.random() * 900);

export async function getMockChatResponse(userMessage: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomReply = RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
      resolve(`${randomReply}\n\n(You said: "${userMessage}")`);
    }, randomDelay());
  });
}
