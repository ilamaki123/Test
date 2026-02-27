const AI_RESPONSE_DELAY_MS = 1200;

const cannedResponses = [
  'That is a great question. Could you share a bit more context?',
  'Got it. A simple next step is to split the task into small milestones.',
  'I can help with that. Try focusing on one change at a time.',
  'Nice progress so far. Want me to suggest a cleaner version?'
];

const wait = (ms: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const requestAiReply = async (prompt: string): Promise<string> => {
  await wait(AI_RESPONSE_DELAY_MS);

  const normalizedPrompt = prompt.trim();
  if (!normalizedPrompt) {
    return 'Please send a message and I will respond.';
  }

  const responseIndex = Math.floor(Math.random() * cannedResponses.length);
  return `You said: "${normalizedPrompt}". ${cannedResponses[responseIndex]}`;
};
