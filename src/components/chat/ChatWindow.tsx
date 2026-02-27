import { useEffect, useRef } from 'react';
import { ChatMessage } from '../../types';
import MessageBubble from './MessageBubble';

interface ChatWindowProps {
  messages: ChatMessage[];
}

const ChatWindow = ({ messages }: ChatWindowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="chat-window" ref={containerRef} aria-live="polite">
      {messages.length === 0 ? (
        <p className="chat-empty-state">Start a conversation with your AI assistant.</p>
      ) : (
        messages.map((message) => <MessageBubble key={message.id} message={message} />)
      )}
    </section>
  );
};

export default ChatWindow;
