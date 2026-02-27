import { ChatMessage } from '../../types/chat';
import styles from './MessageBubble.module.css';

interface MessageBubbleProps {
  message: ChatMessage;
}

function MessageBubble({ message }: MessageBubbleProps) {
  const bubbleClass =
    message.sender === 'user' ? `${styles.bubble} ${styles.user}` : `${styles.bubble} ${styles.assistant}`;

  return (
    <div className={message.sender === 'user' ? styles.rowUser : styles.rowAssistant}>
      <div className={bubbleClass}>{message.text}</div>
    </div>
  );
}

export default MessageBubble;
