const MOCK_DELAY_MS = 1200;

export interface ChatReply {
  text: string;
}

export async function sendMessageToAssistant(prompt: string): Promise<ChatReply> {
  await new Promise((resolve) => {
    window.setTimeout(resolve, MOCK_DELAY_MS);
  });

  const normalizedPrompt = prompt.trim();

  const text = normalizedPrompt.length
    ? `Thanks for your message: "${normalizedPrompt}". This is a mocked assistant response from services/api.ts.`
    : 'I did not receive text, but this confirms the API layer is connected.';

  return { text };
}
