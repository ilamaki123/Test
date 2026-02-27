import { FormEvent, useState } from 'react';
import styles from './ChatInput.module.css';

interface ChatInputProps {
  disabled: boolean;
  onSend: (value: string) => void;
}

export function ChatInput({ disabled, onSend }: ChatInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = value.trim();

    if (!trimmed || disabled) {
      return;
    }

    onSend(trimmed);
    setValue('');
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Type your message..."
          disabled={disabled}
          aria-label="Chat message"
        />
        <button className={styles.button} type="submit" disabled={disabled || !value.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}
