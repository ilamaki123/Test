import { useEffect, useRef } from 'react';
import type { ChatMessage } from '../types';
import { MessageBubble } from './MessageBubble';

interface ChatWindowProps {
  messages: ChatMessage[];
  isAiTyping: boolean;
}

export function ChatWindow({ messages, isAiTyping }: ChatWindowProps) {
  const endRef = useRef<HTMLDivElement | null>(null);

  // Tự động kéo xuống cuối danh sách khi có tin nhắn mới hoặc AI đang trả lời.
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isAiTyping]);

  return (
    <div className="chat-window">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}

      {isAiTyping && (
        <div className="message-row ai">
          <div className="message-bubble ai typing">AI đang trả lời...</div>
        </div>
      )}

      <div ref={endRef} />
    </div>
  );
}
