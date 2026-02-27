import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/Auth/LoginForm';
import styles from './Login.module.css';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate();

  const handleLogin = (username: string) => {
    window.localStorage.setItem('ai-chat-username', username);
    onLogin();
    navigate('/chat', { replace: true });
  };

  return (
    <main className={styles.page}>
      <LoginForm onSubmit={handleLogin} />
    </main>
  );
}
