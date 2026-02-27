import { FormEvent, useState } from 'react';
import styles from './LoginForm.module.css';

interface LoginFormProps {
  onSubmit: (username: string) => void;
}

function LoginForm({ onSubmit }: LoginFormProps): JSX.Element {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const trimmed = username.trim();

    if (!trimmed) {
      return;
    }

    onSubmit(trimmed);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Welcome Back</h1>
      <p className={styles.subtitle}>Sign in to continue chatting.</p>
      <label className={styles.label} htmlFor="username">
        Username
      </label>
      <input
        className={styles.input}
        id="username"
        name="username"
        placeholder="Enter your name"
        autoComplete="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button className={styles.button} type="submit" disabled={!username.trim()}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
