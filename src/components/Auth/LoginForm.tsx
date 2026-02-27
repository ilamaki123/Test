import { FormEvent, useState } from 'react';
import styles from './LoginForm.module.css';

interface LoginFormProps {
  onSubmit: (username: string) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalized = username.trim();

    if (!normalized) {
      return;
    }

    onSubmit(normalized);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Welcome back</h1>
      <p className={styles.subtitle}>Sign in to continue to your AI chat.</p>

      <label className={styles.label} htmlFor="username">
        Username
      </label>
      <input
        className={styles.input}
        id="username"
        type="text"
        autoComplete="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Enter any name"
      />

      <button className={styles.button} type="submit" disabled={!username.trim()}>
        Login
      </button>
    </form>
  );
}
