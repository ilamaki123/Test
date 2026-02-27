import { useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageItem from '../components/Chat/MessageItem';
import TypingIndicator from '../components/Chat/TypingIndicator';
import ChatInput from '../components/UI/ChatInput';
import { useAutoScroll } from '../hooks/useAutoScroll';
import { sendMessage } from '../services/api';
import { logout } from '../services/auth';
import type { ChatMessage } from '../types/chat';
import styles from './Chat.module.css';

function createMessage(role: ChatMessage['role'], content: string): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role,
    content,
    createdAt: new Date().toISOString()
  };
}

function ChatPage(): JSX.Element {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage('assistant', 'Hello! Ask me anything to start the conversation.')
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messageListRef = useRef<HTMLDivElement>(null);

  const displayName = useMemo(() => {
    return localStorage.getItem('ai_chat_username') ?? 'User';
  }, []);

  useAutoScroll(messageListRef, `${messages.length}-${isTyping}`);

  const handleSend = async (content: string): Promise<void> => {
    setMessages((previous) => [...previous, createMessage('user', content)]);
    setIsTyping(true);

    try {
      const response = await sendMessage({ message: content });
      setMessages((previous) => [...previous, createMessage('assistant', response.message)]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleLogout = (): void => {
    logout();
    localStorage.removeItem('ai_chat_username');
    navigate('/login', { replace: true });
  };

  return (
    <main className={styles.page}>
      <section className={styles.chatShell}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>AI Chat</h1>
            <p className={styles.subtitle}>Signed in as {displayName}</p>
          </div>
          <button className={styles.logoutButton} type="button" onClick={handleLogout}>
            Logout
          </button>
        </header>

        <div className={styles.messageArea} ref={messageListRef}>
          {messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
          {isTyping ? <TypingIndicator /> : null}
        </div>

        <footer className={styles.inputArea}>
          <ChatInput disabled={isTyping} onSend={handleSend} />
        </footer>
      </section>
    </main>
  );
}

export default ChatPage;
