import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/UI/ProtectedRoute';
import { useAuth } from './hooks/useAuth';
import { ChatPage } from './pages/Chat';
import { LoginPage } from './pages/Login';

function App() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? <Navigate to="/chat" replace /> : <LoginPage onLogin={login} />
        }
      />
      <Route
        path="/chat"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ChatPage onLogout={logout} />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to={isAuthenticated ? '/chat' : '/'} replace />} />
    </Routes>
  );
}

export default App;
