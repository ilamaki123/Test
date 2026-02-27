import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';
import { login } from '../services/auth';
import styles from './Login.module.css';

function LoginPage(): JSX.Element {
  const navigate = useNavigate();

  const handleLogin = (username: string): void => {
    localStorage.setItem('ai_chat_username', username);
    login();
    navigate('/chat', { replace: true });
  };

  return (
    <main className={styles.page}>
      <LoginForm onSubmit={handleLogin} />
    </main>
  );
}

export default LoginPage;
