import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatInput from '../components/Chat/ChatInput';
import MessageList from '../components/Chat/MessageList';
import Header from '../components/UI/Header';
import { useAuth } from '../hooks/useAuth';
import { sendMessageToAi } from '../services/api';
import { ChatMessage } from '../types/chat';
import styles from '../styles/ChatPage.module.css';

const makeId = (): string => `${Date.now()}-${Math.random().toString(16).slice(2)}`;

function ChatPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const username = useMemo(() => localStorage.getItem('ai-chat-username') ?? 'User', []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (text: string): Promise<void> => {
    const userMessage: ChatMessage = {
      id: makeId(),
      sender: 'user',
      text,
      timestamp: Date.now()
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    const response = await sendMessageToAi({ message: text });

    const assistantMessage: ChatMessage = {
      id: makeId(),
      sender: 'assistant',
      text: response.reply,
      timestamp: Date.now()
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('ai-chat-username');
    navigate('/login', { replace: true });
  };

  return (
    <main className={styles.page}>
      <section className={styles.chatCard}>
        <Header title={`Hi ${username}`} actionLabel="Logout" onAction={handleLogout} />
        <MessageList messages={messages} isTyping={isTyping} bottomRef={bottomRef} />
        <div className={styles.inputWrap}>
          <ChatInput onSend={handleSendMessage} disabled={isTyping} />
        </div>
      </section>
    </main>
  );
}

export default ChatPage;
