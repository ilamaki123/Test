import { useMemo, useState } from 'react';
import Login from './components/auth/Login';
import ChatWindow from './components/chat/ChatWindow';
import ChatInput from './components/chat/ChatInput';
import { ChatMessage } from './types';
import './components/chat/chat.css';

const AUTH_STORAGE_KEY = 'isAuthenticated';
const USER_STORAGE_KEY = 'chatUsername';

const initialMessages: ChatMessage[] = [
  {
    id: 'assistant-1',
    role: 'assistant',
    content: 'Hello! I am your assistant. How can I help today?',
  },
];

function createMessage(role: ChatMessage['role'], content: string): ChatMessage {
  return {
    id: `${role}-${crypto.randomUUID()}`,
    role,
    content,
  };
}

export default function App(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
  });

  const [username, setUsername] = useState<string>(() => {
    return localStorage.getItem(USER_STORAGE_KEY) ?? '';
  });

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const headerTitle = useMemo(() => {
    return username ? `AI Chat · ${username}` : 'AI Chat';
  }, [username]);

  const handleLogin = (nextUsername: string) => {
    localStorage.setItem(AUTH_STORAGE_KEY, 'true');
    localStorage.setItem(USER_STORAGE_KEY, nextUsername);
    setUsername(nextUsername);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
    setIsAuthenticated(false);
    setUsername('');
  };

  const handleSendMessage = (content: string) => {
    const userMessage = createMessage('user', content);
    const assistantMessage = createMessage(
      'assistant',
      `Got it. You said: "${content}". This is a placeholder response ready for AI integration.`,
    );

    setMessages((previousMessages) => [...previousMessages, userMessage, assistantMessage]);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="chat-layout">
      <header className="chat-header">
        <h1 className="chat-header__title">{headerTitle}</h1>
        <button className="chat-header__logout" type="button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
