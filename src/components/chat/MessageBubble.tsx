import { ChatMessage } from '../../types';

interface MessageBubbleProps {
  message: ChatMessage;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const bubbleClassName =
    message.role === 'user' ? 'message-row message-row-user' : 'message-row message-row-assistant';

  return (
    <div className={bubbleClassName}>
      <article className="message-bubble">
        <p className="message-content">{message.content}</p>
      </article>
    </div>
  );
};

export default MessageBubble;
