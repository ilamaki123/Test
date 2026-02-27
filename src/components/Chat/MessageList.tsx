import { RefObject } from 'react';
import { ChatMessage } from '../../types/chat';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import styles from './MessageList.module.css';

interface MessageListProps {
  messages: ChatMessage[];
  isTyping: boolean;
  bottomRef: RefObject<HTMLDivElement>;
}

function MessageList({ messages, isTyping, bottomRef }: MessageListProps) {
  return (
    <section className={styles.container} aria-live="polite">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={bottomRef} />
    </section>
  );
}

export default MessageList;
