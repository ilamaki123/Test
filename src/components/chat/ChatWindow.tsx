import { useMemo, useState } from 'react';
import type { ChatMessage } from '../../types';
import ChatInput from './ChatInput';
import MessageBubble from './MessageBubble';
import './chat.css';

interface ChatWindowProps {
  onLogout: () => void;
  initialMessages: ChatMessage[];
}

const createMessageId = (): string => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

function ChatWindow({ onLogout, initialMessages }: ChatWindowProps): JSX.Element {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const assistantResponsePrefix = useMemo(() => 'Assistant reply:', []);

  const handleSendMessage = (content: string): void => {
    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: 'user',
      content,
    };

    const assistantMessage: ChatMessage = {
      id: createMessageId(),
      role: 'assistant',
      content: `${assistantResponsePrefix} ${content}`,
    };

    setMessages((current) => [...current, userMessage, assistantMessage]);
  };

  return (
    <main className="chat-page">
      <header className="chat-header">
        <h1 className="chat-title">AI Chat</h1>
        <button className="chat-logout-button" type="button" onClick={onLogout}>
          Logout
        </button>
      </header>

      <section className="chat-messages" aria-live="polite">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </section>

      <footer className="chat-footer">
        <ChatInput onSendMessage={handleSendMessage} />
      </footer>
    </main>
  );
}

export default ChatWindow;
