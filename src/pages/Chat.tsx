import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatInput } from '../components/Chat/ChatInput';
import { ChatMessageList } from '../components/Chat/ChatMessageList';
import { sendMessageToAssistant } from '../services/api';
import { Message } from '../types/chat';
import styles from './Chat.module.css';

interface ChatPageProps {
  onLogout: () => void;
}

function createMessage(sender: Message['sender'], content: string): Message {
  return {
    id: crypto.randomUUID(),
    sender,
    content,
    createdAt: new Date().toISOString()
  };
}

export function ChatPage({ onLogout }: ChatPageProps) {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAnchorRef = useRef<HTMLDivElement | null>(null);

  const username = useMemo(() => {
    return window.localStorage.getItem('ai-chat-username') ?? 'User';
  }, []);

  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleLogout = () => {
    window.localStorage.removeItem('ai-chat-username');
    onLogout();
    navigate('/', { replace: true });
  };

  const handleSend = async (value: string) => {
    const userMessage = createMessage('user', value);
    setMessages((previous) => [...previous, userMessage]);
    setIsTyping(true);

    try {
      const reply = await sendMessageToAssistant(value);
      const assistantMessage = createMessage('assistant', reply.text);
      setMessages((previous) => [...previous, assistantMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>AI Chat · {username}</h1>
          <button type="button" className={styles.logout} onClick={handleLogout}>
            Logout
          </button>
        </header>

        <ChatMessageList messages={messages} isTyping={isTyping} />
        <div ref={scrollAnchorRef} />
        <ChatInput disabled={isTyping} onSend={handleSend} />
      </section>
    </main>
  );
}
