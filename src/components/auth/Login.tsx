import { FormEvent, useState } from 'react';
import './auth.css';

interface LoginProps {
  onLogin: (username: string) => void;
}

export default function Login({ onLogin }: LoginProps): JSX.Element {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
      return;
    }

    onLogin(trimmedUsername);
  };

  return (
    <main className="login-screen" aria-label="Login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-form__title">Welcome back</h1>
        <label className="login-form__field" htmlFor="username">
          Username
          <input
            id="username"
            className="login-form__input"
            type="text"
            autoComplete="username"
            placeholder="Enter your username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <button className="login-form__button" type="submit" disabled={!username.trim()}>
          Login
        </button>
      </form>
    </main>
  );
}
