import { Message } from '../../types/chat';
import styles from './ChatMessageList.module.css';

interface ChatMessageListProps {
  messages: Message[];
  isTyping: boolean;
}

export function ChatMessageList({ messages, isTyping }: ChatMessageListProps) {
  if (messages.length === 0) {
    return (
      <div className={styles.list}>
        <p className={styles.empty}>Start the conversation by sending your first message.</p>
        {isTyping ? <p className={styles.typing}>Assistant is typing...</p> : null}
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {messages.map((message) => {
        const rowClass = `${styles.messageRow} ${
          message.sender === 'user' ? styles.user : styles.assistant
        }`;
        const bubbleClass = `${styles.bubble} ${
          message.sender === 'user' ? styles.userBubble : styles.assistantBubble
        }`;

        return (
          <div key={message.id} className={rowClass}>
            <div className={bubbleClass}>{message.content}</div>
          </div>
        );
      })}

      {isTyping ? <p className={styles.typing}>Assistant is typing...</p> : null}
    </div>
  );
}
