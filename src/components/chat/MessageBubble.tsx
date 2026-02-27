import { ChatMessage } from '../../types';

interface MessageBubbleProps {
  message: ChatMessage;
}

function MessageBubble({ message }: MessageBubbleProps) {
  const bubbleClassName =
    message.role === 'user' ? 'message-bubble message-bubble--user' : 'message-bubble message-bubble--assistant';

  return (
    <article className={bubbleClassName}>
      <p className="message-bubble__content">{message.content}</p>
    </article>
  );
}

export default MessageBubble;
