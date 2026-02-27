import type { ChatMessage } from '../types';

interface MessageBubbleProps {
  message: ChatMessage;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === 'user';

  return (
    <div className={`message-row ${isUser ? 'user' : 'ai'}`}>
      <div className={`message-bubble ${isUser ? 'user' : 'ai'}`}>{message.text}</div>
    </div>
  );
}
