import { useMemo, useState } from 'react';
import Login from './components/auth/Login';
import ChatWindow from './components/chat/ChatWindow';
import ChatInput from './components/chat/ChatInput';
import { ChatMessage } from './types';

const AUTH_STORAGE_KEY = 'isAuthenticated';

const initialMessages: ChatMessage[] = [
  {
    id: 'assistant-welcome',
    role: 'assistant',
    content: 'Welcome! I am ready to help you build with AI agents.',
    createdAt: new Date().toISOString()
  }
];

const createId = () =>
  typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => localStorage.getItem(AUTH_STORAGE_KEY) === 'true'
  );
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const handleLogin = () => {
    localStorage.setItem(AUTH_STORAGE_KEY, 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
  };

  const handleSendMessage = (content: string) => {
    const userMessage: ChatMessage = {
      id: createId(),
      role: 'user',
      content,
      createdAt: new Date().toISOString()
    };

    const assistantMessage: ChatMessage = {
      id: createId(),
      role: 'assistant',
      content: 'Acknowledged. This frontend architecture is ready for AI agent integrations.',
      createdAt: new Date().toISOString()
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, assistantMessage]);
  };

  const headerTitle = useMemo(() => 'AI Agent Chat Workspace', []);

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="chat-layout">
      <header className="chat-layout__header">
        <h1 className="chat-layout__title">{headerTitle}</h1>
        <button className="chat-layout__logout" type="button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
