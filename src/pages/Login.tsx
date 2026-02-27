import { Navigate, useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/Auth/LoginForm';
import { useAuthContext } from '../components/Auth/AuthContext';
import { PageShell } from '../components/UI/PageShell';
import styles from '../styles/Login.module.css';

const LoginPage = () => {
  const { isLoggedIn, login } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/chat', { replace: true });
  };

  if (isLoggedIn) {
    return <Navigate to="/chat" replace />;
  }

  return (
    <PageShell>
      <section className={styles.card}>
        <LoginForm onSubmit={handleLogin} />
      </section>
    </PageShell>
  );
};

export default LoginPage;
