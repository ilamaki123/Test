import type { ChatMessageModel } from '../types/chat';

interface ChatMessageProps {
  message: ChatMessageModel;
}

function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[70%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm shadow-sm sm:text-base ${
          isUser ? 'bg-emerald-500 text-white' : 'bg-white text-slate-900'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}

export default ChatMessage;
