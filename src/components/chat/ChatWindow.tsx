import { useEffect, useRef } from 'react';
import { ChatMessage } from '../../types';
import MessageBubble from './MessageBubble';
import './chat.css';

interface ChatWindowProps {
  messages: ChatMessage[];
}

function ChatWindow({ messages }: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <section className="chat-window" aria-label="Conversation">
      <div className="chat-window__messages">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </section>
  );
}

export default ChatWindow;
