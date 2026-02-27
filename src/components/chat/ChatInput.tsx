import { FormEvent, useState } from 'react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps): JSX.Element {
  const [draft, setDraft] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = draft.trim();

    if (!content) {
      return;
    }

    onSendMessage(content);
    setDraft('');
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        className="chat-input__field"
        type="text"
        placeholder="Type your message..."
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        aria-label="Message input"
      />
      <button className="chat-input__button" type="submit" disabled={!draft.trim()}>
        Send
      </button>
    </form>
  );
}
