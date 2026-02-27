import { type FormEvent, useState } from 'react';
import styles from '../../styles/Chat.module.css';

interface ChatInputProps {
  disabled: boolean;
  onSendMessage: (text: string) => Promise<void>;
}

export const ChatInput = ({ disabled, onSendMessage }: ChatInputProps) => {
  const [text, setText] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = text.trim();

    if (!trimmed || disabled) {
      return;
    }

    setText('');
    await onSendMessage(trimmed);
  };

  return (
    <form className={styles.inputBar} onSubmit={handleSubmit}>
      <input
        className={styles.chatInput}
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Type your message..."
        disabled={disabled}
      />
      <button className={styles.sendButton} type="submit" disabled={disabled || !text.trim()}>
        Send
      </button>
    </form>
  );
};
