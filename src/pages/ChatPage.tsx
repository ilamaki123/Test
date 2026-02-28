import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMockChatResponse } from '../api/chat';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';
import TypingIndicator from '../components/TypingIndicator';
import type { ChatMessageModel } from '../types/chat';

interface ChatPageProps {
  onLogout: () => void;
}

function ChatPage({ onLogout }: ChatPageProps) {
  const [messages, setMessages] = useState<ChatMessageModel[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Hello! This is a frontend-only chat demo. Ask me anything.',
    },
  ]);
  const [isWaitingForReply, setIsWaitingForReply] = useState(false);
  const navigate = useNavigate();
  const endRef = useRef<HTMLDivElement | null>(null);

  const canSend = useMemo(() => !isWaitingForReply, [isWaitingForReply]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isWaitingForReply]);

  const handleSend = async (content: string) => {
    const userMessage: ChatMessageModel = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
    };

    setMessages((current) => [...current, userMessage]);
    setIsWaitingForReply(true);

    const reply = await getMockChatResponse(content);
    const assistantMessage: ChatMessageModel = {
      id: `assistant-${Date.now()}`,
      role: 'assistant',
      content: reply,
    };

    setMessages((current) => [...current, assistantMessage]);
    setIsWaitingForReply(false);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="flex min-h-screen w-full justify-center px-0 sm:px-4">
      <div className="flex h-screen w-full flex-col bg-slate-50 sm:h-[96vh] sm:max-w-4xl sm:rounded-2xl sm:border sm:border-slate-200 sm:shadow-lg">
        <header className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-6">
          <h1 className="text-lg font-semibold">Chat Demo</h1>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-100"
          >
            Logout
          </button>
        </header>

        <main className="flex-1 overflow-y-auto px-3 py-4 sm:px-6">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isWaitingForReply ? <TypingIndicator /> : null}
            <div ref={endRef} />
          </div>
        </main>

        <div className="border-t border-slate-200 bg-white px-3 py-3 sm:px-6">
          <div className="mx-auto w-full max-w-3xl">
            <ChatInput disabled={!canSend} onSend={handleSend} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
