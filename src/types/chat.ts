export type Sender = 'user' | 'assistant';

export interface Message {
  id: string;
  sender: Sender;
  content: string;
  createdAt: string;
}
