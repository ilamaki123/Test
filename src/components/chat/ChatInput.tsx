import { FormEvent, useState } from 'react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
}

function ChatInput({ onSendMessage }: ChatInputProps): JSX.Element {
  const [draft, setDraft] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const trimmed = draft.trim();
    if (!trimmed) {
      return;
    }

    onSendMessage(trimmed);
    setDraft('');
  };

  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      <input
        className="chat-input"
        type="text"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        placeholder="Type a message"
        aria-label="Message input"
      />
      <button className="chat-send-button" type="submit">
        Send
      </button>
    </form>
  );
}

export default ChatInput;
