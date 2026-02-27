import { FormEvent, useState } from 'react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
}

function ChatInput({ onSendMessage }: ChatInputProps) {
  const [messageDraft, setMessageDraft] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedMessage = messageDraft.trim();
    if (!trimmedMessage) {
      return;
    }

    onSendMessage(trimmedMessage);
    setMessageDraft('');
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <label className="chat-input__label" htmlFor="messageDraft">
        Message
      </label>
      <div className="chat-input__controls">
        <input
          id="messageDraft"
          className="chat-input__field"
          type="text"
          value={messageDraft}
          onChange={(event) => setMessageDraft(event.target.value)}
          placeholder="Type your message"
        />
        <button className="chat-input__send" type="submit" disabled={!messageDraft.trim()}>
          Send
        </button>
      </div>
    </form>
  );
}

export default ChatInput;
