import type { ChatMessage } from '../../types';

interface MessageBubbleProps {
  message: ChatMessage;
}

function MessageBubble({ message }: MessageBubbleProps): JSX.Element {
  const bubbleClassName =
    message.role === 'user' ? 'message-bubble message-bubble-user' : 'message-bubble message-bubble-assistant';

  return (
    <article className={bubbleClassName}>
      <p className="message-text">{message.content}</p>
    </article>
  );
}

export default MessageBubble;
