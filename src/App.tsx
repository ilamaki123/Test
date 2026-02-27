import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import ChatPage from './pages/Chat';
import LoginPage from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/chat" element={<ChatPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
