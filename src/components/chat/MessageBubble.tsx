import { ChatMessage } from '../../types';

interface MessageBubbleProps {
  message: ChatMessage;
}

export default function MessageBubble({ message }: MessageBubbleProps): JSX.Element {
  return (
    <article className={`message-bubble message-bubble--${message.role}`}>
      <p className="message-bubble__content">{message.content}</p>
    </article>
  );
}
