import { useMemo, useState } from 'react';
import Login from './components/auth/Login';
import ChatWindow from './components/chat/ChatWindow';
import type { ChatMessage } from './types';

const AUTH_STORAGE_KEY = 'isAuthenticated';

const createInitialMessages = (): ChatMessage[] => [
  {
    id: 'assistant-welcome',
    role: 'assistant',
    content: 'Welcome! I am your assistant. How can I help you today?',
  },
];

function App(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
  });

  const initialMessages = useMemo(() => createInitialMessages(), []);

  const handleLogin = (): void => {
    localStorage.setItem(AUTH_STORAGE_KEY, 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = (): void => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return <ChatWindow onLogout={handleLogout} initialMessages={initialMessages} />;
}

export default App;
