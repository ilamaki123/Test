import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatInput } from '../components/Chat/ChatInput';
import { MessageList } from '../components/Chat/MessageList';
import { useAuthContext } from '../components/Auth/AuthContext';
import { requestAiReply } from '../services/api';
import type { Message } from '../types/chat';
import { PageShell } from '../components/UI/PageShell';
import styles from '../styles/Chat.module.css';

const createMessage = (sender: Message['sender'], text: string): Message => ({
  id: `${sender}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  sender,
  text,
  timestamp: Date.now()
});

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleSendMessage = async (text: string) => {
    const userMessage = createMessage('user', text);
    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setIsLoading(true);

    try {
      const response = await requestAiReply(text);
      const assistantMessage = createMessage('assistant', response);
      setMessages((currentMessages) => [...currentMessages, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <PageShell>
      <section className={styles.chatContainer}>
        <header className={styles.header}>
          <h1 className={styles.heading}>AI Chat</h1>
          <button className={styles.logoutButton} onClick={handleLogout} type="button">
            Logout
          </button>
        </header>
        <MessageList messages={messages} isLoading={isLoading} />
        <ChatInput disabled={isLoading} onSendMessage={handleSendMessage} />
      </section>
    </PageShell>
  );
};

export default ChatPage;
