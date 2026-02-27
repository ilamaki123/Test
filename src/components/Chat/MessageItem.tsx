import type { ChatMessage } from '../../types/chat';
import styles from './MessageItem.module.css';

interface MessageItemProps {
  message: ChatMessage;
}

function MessageItem({ message }: MessageItemProps): JSX.Element {
  const isUser = message.role === 'user';

  return (
    <div className={`${styles.row} ${isUser ? styles.userRow : styles.assistantRow}`}>
      <article className={`${styles.bubble} ${isUser ? styles.userBubble : styles.assistantBubble}`}>
        {message.content}
      </article>
    </div>
  );
}

export default MessageItem;
