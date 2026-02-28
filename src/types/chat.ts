export type MessageRole = 'user' | 'assistant';

export interface ChatMessageModel {
  id: string;
  role: MessageRole;
  content: string;
}
