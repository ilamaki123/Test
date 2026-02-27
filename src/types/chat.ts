export type Sender = 'user' | 'assistant';

export interface ChatMessage {
  id: string;
  sender: Sender;
  text: string;
  timestamp: number;
}
