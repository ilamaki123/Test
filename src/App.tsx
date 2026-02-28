import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './hooks/useAuth';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';

function App() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage isAuthenticated={isAuthenticated} onLogin={login} />} />
      <Route
        path="/chat"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ChatPage onLogout={logout} />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to={isAuthenticated ? '/chat' : '/login'} replace />} />
    </Routes>
  );
}

export default App;
