import type { ChatRequest, ChatResponse } from '../types/chat';

const MOCK_DELAY_MS = 1200;

function buildMockResponse(input: string): string {
  const cleaned = input.trim();

  if (!cleaned) {
    return 'Please enter a message and I will help you.';
  }

  return `You said: "${cleaned}". This is a mock AI response from the frontend API layer.`;
}

export async function sendMessage(request: ChatRequest): Promise<ChatResponse> {
  await new Promise((resolve) => {
    window.setTimeout(resolve, MOCK_DELAY_MS);
  });

  return {
    message: buildMockResponse(request.message)
  };
}
