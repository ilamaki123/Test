import { FormEvent, useState } from 'react';
import './auth.css';

interface LoginProps {
  onLogin: () => void;
}

function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username.trim()) {
      return;
    }

    onLogin();
  };

  return (
    <main className="login-screen">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1 className="login-card__title">Sign in</h1>
        <label className="login-card__label" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          className="login-card__input"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter your username"
          autoComplete="username"
        />
        <button className="login-card__button" type="submit" disabled={!username.trim()}>
          Login
        </button>
      </form>
    </main>
  );
}

export default Login;
