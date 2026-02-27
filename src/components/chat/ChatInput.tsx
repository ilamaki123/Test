import { FormEvent, useState } from 'react';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [draft, setDraft] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedDraft = draft.trim();

    if (!trimmedDraft) {
      return;
    }

    onSendMessage(trimmedDraft);
    setDraft('');
  };

  return (
    <form className="chat-input-container" onSubmit={handleSubmit}>
      <label htmlFor="chat-message" className="sr-only">
        Message
      </label>
      <input
        id="chat-message"
        name="chat-message"
        className="chat-input"
        type="text"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        placeholder="Type your message..."
        autoComplete="off"
      />
      <button type="submit" className="send-button" disabled={!draft.trim()}>
        Send
      </button>
    </form>
  );
};

export default ChatInput;
