import { type FormEvent, useState } from 'react';
import styles from '../../styles/Login.module.css';

interface LoginFormProps {
  onSubmit: () => void;
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username.trim()) {
      return;
    }

    onSubmit();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Welcome back</h1>
      <p className={styles.subtitle}>Log in to continue to your AI chat.</p>
      <label className={styles.label} htmlFor="username">
        Username
      </label>
      <input
        id="username"
        className={styles.input}
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Enter your username"
        autoComplete="username"
      />
      <button className={styles.button} type="submit">
        Login
      </button>
    </form>
  );
};
