import { FormEvent } from 'react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
}

export function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (disabled || !value.trim()) {
      return;
    }
    onSend();
  };

  return (
    <form className="chat-input-wrapper" onSubmit={handleSubmit}>
      <input
        className="chat-input"
        type="text"
        placeholder="Nhập tin nhắn..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        aria-label="Tin nhắn"
      />
      <button className="send-button" type="submit" disabled={disabled || !value.trim()}>
        Gửi
      </button>
    </form>
  );
}
