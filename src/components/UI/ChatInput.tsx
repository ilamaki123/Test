import { FormEvent, useState } from 'react';
import styles from './ChatInput.module.css';

interface ChatInputProps {
  disabled: boolean;
  onSend: (message: string) => Promise<void>;
}

function ChatInput({ disabled, onSend }: ChatInputProps): JSX.Element {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const trimmed = message.trim();
    if (!trimmed || disabled) {
      return;
    }

    setMessage('');
    await onSend(trimmed);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Type your message..."
        disabled={disabled}
      />
      <button className={styles.button} type="submit" disabled={disabled || !message.trim()}>
        Send
      </button>
    </form>
  );
}

export default ChatInput;
