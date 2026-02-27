import { FormEvent, useState } from 'react';
import './auth.css';

interface LoginProps {
  onLogin: () => void;
}

function Login({ onLogin }: LoginProps): JSX.Element {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!username.trim()) {
      return;
    }

    onLogin();
  };

  return (
    <main className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Sign in</h1>
        <label className="login-label" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          className="login-input"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter your username"
          autoComplete="username"
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </main>
  );
}

export default Login;
