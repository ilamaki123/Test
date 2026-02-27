import { FormEvent, useState } from 'react';
import styles from './LoginForm.module.css';

interface LoginFormProps {
  onSubmit: (username: string) => void;
}

function LoginForm({ onSubmit }: LoginFormProps) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = username.trim();
    if (!trimmed) {
      return;
    }

    onSubmit(trimmed);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Welcome back</h1>
      <p className={styles.subtitle}>Sign in to continue to your AI chat.</p>
      <label className={styles.label} htmlFor="username">
        Username
      </label>
      <input
        id="username"
        className={styles.input}
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Enter your name"
        autoComplete="username"
      />
      <button type="submit" className={styles.button}>
        Continue
      </button>
    </form>
  );
}

export default LoginForm;
