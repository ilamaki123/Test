import { Navigate, Route, Routes } from 'react-router-dom';
import ChatPage from './pages/Chat';
import LoginPage from './pages/Login';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { isAuthenticated } from './services/auth';

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={isAuthenticated() ? '/chat' : '/login'} replace />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <ChatPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
