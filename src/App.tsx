import { useEffect, useMemo, useState } from 'react';
import Login from './components/auth/Login';
import ChatWindow from './components/chat/ChatWindow';
import ChatInput from './components/chat/ChatInput';
import { ChatMessage } from './types';
import './components/chat/chat.css';

const AUTH_STORAGE_KEY = 'isAuthenticated';

const createAssistantReply = (input: string): string => {
  return `Agent response queued: ${input}`;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const savedAuthState = localStorage.getItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(savedAuthState === 'true');
  }, []);

  const handleLogin = () => {
    localStorage.setItem(AUTH_STORAGE_KEY, 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
    setMessages([]);
  };

  const handleSendMessage = (text: string) => {
    const trimmedText = text.trim();
    if (!trimmedText) {
      return;
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: trimmedText,
      timestamp: Date.now(),
    };

    const assistantMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: createAssistantReply(trimmedText),
      timestamp: Date.now() + 1,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, assistantMessage]);
  };

  const chatTitle = useMemo(() => 'AI Agent Workspace', []);

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="chat-layout">
      <header className="chat-header">
        <h1 className="chat-title">{chatTitle}</h1>
        <button type="button" className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
