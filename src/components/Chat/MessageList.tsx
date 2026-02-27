import { useEffect, useRef } from 'react';
import type { Message } from '../../types/chat';
import styles from '../../styles/Chat.module.css';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export const MessageList = ({ messages, isLoading }: MessageListProps) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <section className={styles.messageList} aria-live="polite">
      {messages.map((message) => (
        <article
          key={message.id}
          className={`${styles.messageRow} ${
            message.sender === 'user' ? styles.userRow : styles.assistantRow
          }`}
        >
          <div
            className={`${styles.messageBubble} ${
              message.sender === 'user' ? styles.userBubble : styles.assistantBubble
            }`}
          >
            {message.text}
          </div>
        </article>
      ))}

      {isLoading && (
        <article className={`${styles.messageRow} ${styles.assistantRow}`}>
          <div className={`${styles.messageBubble} ${styles.assistantBubble}`}>
            <span className={styles.typing}>AI is typing...</span>
          </div>
        </article>
      )}
      <div ref={bottomRef} />
    </section>
  );
};
