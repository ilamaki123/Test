import { useEffect, useRef, useState } from 'react';
import { ChatInput } from './components/ChatInput';
import { ChatWindow } from './components/ChatWindow';
import type { ChatMessage } from './types';

function createMessage(text: string, sender: ChatMessage['sender']): ChatMessage {
  return {
    id: crypto.randomUUID(),
    text,
    sender
  };
}

export function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);
  const typingTimeoutRef = useRef<number | null>(null);

  // Dọn timeout khi component unmount để tránh memory leak.
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current !== null) {
        window.clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  const sendMessage = () => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue || isAiTyping) {
      return;
    }

    const userMessage = createMessage(trimmedValue, 'user');
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsAiTyping(true);

    // Giả lập AI phản hồi sau 2 giây.
    typingTimeoutRef.current = window.setTimeout(() => {
      const aiMessage = createMessage(`AI phản hồi: "${trimmedValue}"`, 'ai');
      setMessages((prev) => [...prev, aiMessage]);
      setIsAiTyping(false);
    }, 2000);
  };

  return (
    <main className="page">
      <section className="chat-card">
        <header className="chat-header">AI Chat App</header>
        <ChatWindow messages={messages} isAiTyping={isAiTyping} />
        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSend={sendMessage}
          disabled={isAiTyping}
        />
      </section>
    </main>
  );
}
