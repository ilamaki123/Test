import { FormEvent, useState } from 'react';
import './auth.css';

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username.trim()) {
      return;
    }

    onLogin();
  };

  return (
    <main className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Welcome Back</h1>
        <label className="login-label" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          className="login-input"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          autoComplete="username"
          placeholder="Enter your username"
        />
        <button type="submit" className="login-button" disabled={!username.trim()}>
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
