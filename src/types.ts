export type Sender = 'user' | 'ai';

export interface ChatMessage {
  id: string;
  text: string;
  sender: Sender;
}
