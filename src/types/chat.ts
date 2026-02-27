export type Sender = 'user' | 'assistant';

export interface Message {
  id: string;
  sender: Sender;
  text: string;
  timestamp: number;
}
