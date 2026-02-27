import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Auth/LoginForm';
import { useAuth } from '../hooks/useAuth';
import styles from '../styles/LoginPage.module.css';

function LoginPage() {
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/chat', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = (username: string) => {
    login();
    localStorage.setItem('ai-chat-username', username);
    navigate('/chat', { replace: true });
  };

  return (
    <main className={styles.page}>
      <LoginForm onSubmit={handleLogin} />
    </main>
  );
}

export default LoginPage;
